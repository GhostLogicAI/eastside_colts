import { photos } from "../data/photos";
import { GalleryGrid } from "../components/GalleryGrid";
import { Camera } from "lucide-react";

export function Gallery() {
  return (
    <div className="pt-16 min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <img
          src={photos[62].src}
          alt="Team photo"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) contrast(1.1) saturate(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-royal text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Photo Gallery</span>
          <h1 className="text-4xl sm:text-5xl text-white mt-4 mb-4" style={{ fontWeight: 800, lineHeight: '1.1' }}>
            Our Moments
          </h1>
          <p className="text-soft-gray text-lg max-w-xl mx-auto">
            Real moments from the field, the classroom, and the community. {photos.length} photos and counting.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 text-steel text-sm">
            <Camera className="w-4 h-4" />
            {photos.length} Photos
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid photos={photos} showFilters={true} />
        </div>
      </section>
    </div>
  );
}
