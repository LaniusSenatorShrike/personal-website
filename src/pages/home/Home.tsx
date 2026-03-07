import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { aboutContent as content } from './about-content';
import { homeContent } from './content';
import { latestNewsContent } from './latest-news-content';

export function Home() {
  return (
    <section className="pb-12 px-6" style={{ marginTop: '7rem' }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 md:items-stretch">
          {/* Profile Image - Left Column */}
          <div className="md:w-5/12 flex">
            <div className="border-2 border-[var(--color-accent)] overflow-hidden w-full">
              <ImageWithFallback
                src={homeContent.profileImage}
                alt={homeContent.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column - About Me + Latest News */}
          <div className="md:w-7/12 flex flex-col gap-6">
            {/* About Me */}
            <div className="relative flex-1" style={{ border: '2px solid var(--color-accent)', padding: '1.5rem' }}>
              <span style={{ position: 'absolute', top: '-0.85em', left: '1rem', backgroundColor: '#0a0a0a', padding: '0 0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>About Me</span>
              <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                {content.bio.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Latest News */}
            <div className="relative flex-1" style={{ border: '2px solid var(--color-accent)', padding: '1.5rem' }}>
              <span style={{ position: 'absolute', top: '-0.85em', left: '1rem', backgroundColor: '#0a0a0a', padding: '0 0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>Latest News</span>
              <ul className="space-y-3 text-gray-300 text-base leading-relaxed" style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
                {latestNewsContent.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.date}:</strong>{' '}
                    {item.text}
                    {item.link && item.linkText && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                        {item.linkText}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
