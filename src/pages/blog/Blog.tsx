import { useState } from 'react';
import { Badge } from '../../components/ui/badge';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { blogContent as content } from './content';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = content.posts.filter((post) => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mt-20 mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2>{content.title}</h2>
            {content.mediumProfile && (
              <a
                href={content.mediumProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                View on Medium
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {content.categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 cursor-pointer transition-colors ${
                selectedCategory === category
                  ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                  : 'text-gray-400 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        <div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <a
                  key={post.id}
                  href={post.url || "#"}
                  target={post.url ? "_blank" : undefined}
                  rel={post.url ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <article
                    className="border border-gray-700 p-6 hover:border-[var(--color-accent)] transition-colors cursor-pointer h-full"
                  >
                  <h4 className="mb-3">{post.title}</h4>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  </article>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
