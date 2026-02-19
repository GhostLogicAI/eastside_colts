import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import type { Photo } from "../data/photos";
import { categoryLabels, categoryColors } from "../data/photos";

interface PhotoLightboxProps {
  photo: Photo | null;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export function PhotoLightbox({ photo, photos, onClose, onNavigate }: PhotoLightboxProps) {
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1;

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      onNavigate(photos[currentIndex + 1]);
    }
  }, [currentIndex, photos, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1]);
    }
  }, [currentIndex, photos, onNavigate]);

  useEffect(() => {
    if (!photo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [photo, onClose, goNext, goPrev]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 text-white/60 text-sm">
          {currentIndex + 1} / {photos.length}
        </div>

        {/* Nav Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={goNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Image */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[70vh] max-w-[90vw] sm:max-w-[85vw] object-contain rounded-lg"
          loading="lazy"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs ${categoryColors[photo.category]}`} style={{ fontWeight: 500 }}>
              {categoryLabels[photo.category]}
            </span>
          </div>
          {photo.caption && (
            <p className="text-white text-sm sm:text-base" style={{ fontWeight: 500 }}>{photo.caption}</p>
          )}
          <div className="flex items-center justify-center gap-4 mt-2 text-white/50 text-xs">
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
    </div>
  );
}
