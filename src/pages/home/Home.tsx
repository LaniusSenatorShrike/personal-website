import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { aboutContent as content } from './about-content';
import { homeContent } from './content';

export function Home() {
  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-[var(--color-accent)] opacity-10"></div>
              <div className="relative w-48 h-48 bg-gray-800 overflow-hidden">
                <ImageWithFallback
                  src={homeContent.profileImage}
                  alt={homeContent.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              {content.bio.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
