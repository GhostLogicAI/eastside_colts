import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MapPin, Calendar } from "lucide-react";
import type { Photo } from "../data/photos";
import { categoryLabels, categoryColors } from "../data/photos";
import { PhotoLightbox } from "./PhotoLightbox";

interface GalleryGridProps {
  photos: Photo[];
  showFilters?: boolean;
  maxPhotos?: number;
}

const categories = ['all', 'games', 'practice', 'mentorship', 'community', 'events', 'fundraisers'] as const;

export function GalleryGrid({ photos, showFilters = true, maxPhotos }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = activeFilter === 'all'
    ? photos
    : photos.filter(p => p.category === activeFilter);

  const displayPhotos = maxPhotos ? filteredPhotos.slice(0, maxPhotos) : filteredPhotos;

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all ${
                activeFilter === cat
                  ? 'bg-royal text-white'
                  : 'bg-secondary text-soft-gray hover:text-white hover:bg-secondary/80'
              }`}
              style={{ fontWeight: 500 }}
            >
              {cat === 'all' ? 'All Photos' : categoryLabels[cat as Photo['category']]}
            </button>
          ))}
        </div>
      )}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 640: 3, 1024: 4 }}>
        <Masonry gutter="8px">
          {displayPhotos.map((photo, i) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full block transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: i % 3 === 0 ? '4/5' : i % 3 === 1 ? '4/3' : '1/1' }}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className={`inline-block w-fit px-2 py-0.5 rounded-full text-xs mb-1.5 ${categoryColors[photo.category]}`} style={{ fontWeight: 500 }}>
                  {categoryLabels[photo.category]}
                </span>
                {photo.caption && (
                  <p className="text-white text-xs sm:text-sm" style={{ fontWeight: 500, lineHeight: '1.3' }}>{photo.caption}</p>
                )}
                <div className="flex items-center gap-3 mt-1 text-white/60 text-xs">
                  {photo.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {photo.date}
                    </span>
                  )}
                  {photo.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {photo.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <PhotoLightbox
        photo={selectedPhoto}
        photos={displayPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={setSelectedPhoto}
      />
    </>
  );
}
