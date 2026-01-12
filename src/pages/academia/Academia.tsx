import { ExternalLink, FileText, Calendar } from 'lucide-react';
import { academiaContent as content } from './content';

export function Academia() {
  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2>{content.title}</h2>
            <a
              href={content.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              View on Google Scholar
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {content.papers.map((paper) => (
            <a
              key={paper.id}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 flex items-center justify-center rounded">
                    <FileText className="h-6 w-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-medium text-gray-100 hover:text-[var(--color-accent)] transition-colors">
                      {paper.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">{paper.authors}</p>
                    <p className="text-gray-500 text-sm mb-3">{paper.journal}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{paper.year}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-500 flex-shrink-0" />
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
