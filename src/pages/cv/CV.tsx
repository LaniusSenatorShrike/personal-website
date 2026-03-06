import { Badge } from '../../components/ui/badge';
import { Award, Briefcase, Code2 } from 'lucide-react';
import { cvContent as content } from './content';
import { SECTION_SPACING_PX } from '../../constants/spacing';

export function CV() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)]"></div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: `${SECTION_SPACING_PX}px` }}>
          <div className="space-y-8">
            {content.experience.map((job) => (
              <div
                key={job.id}
                className="border-l-4 border-[var(--color-accent)] pl-8"
              >
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3 text-gray-400">
                    {job.period}
                  </Badge>
                  <h4 className="mb-1">{job.role}</h4>
                  <p className="text-[var(--color-accent)] mb-1">{job.company}</p>
                  <p className="text-sm text-gray-400">{job.location}</p>
                </div>

                <ul className="space-y-2 mb-6 text-gray-400">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--color-accent)] mt-1">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-[var(--color-accent)]" />
            <h3>Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {content.certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-gray-700 p-6"
              >
                <div className="flex flex-col gap-3">
                  <h6 className="text-base font-semibold">{cert.name}</h6>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <Badge variant="outline" className="text-gray-400 w-fit text-xs">{cert.year}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
