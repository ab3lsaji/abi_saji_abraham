// src/components/Experience.tsx
import { Award, Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900/20 border-y border-slate-900">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Professional Experience</h3>
        <p className="text-slate-400 mb-12 text-sm">A history of optimizing mission-critical backend systems.</p>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {/* IBS Software Role */}
          <div className="relative pl-8 md:pl-10">
            {/* Timeline Node Icon */}
            <span className="absolute -left-3.5 top-1.5 flex items-center justify-center w-7 h-7 bg-slate-950 rounded-full border border-teal-500 text-teal-400 shadow-md shadow-teal-500/10">
              <Briefcase className="w-3.5 h-3.5" />
            </span>

            <div>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-xl font-bold text-white">Senior Product Engineer</h4>
                  <p className="text-teal-400 font-medium text-sm">IBS Software</p>
                </div>
                <div className="text-xs text-slate-400 space-y-1 md:text-right">
                  <div className="flex items-center gap-1.5 md:justify-end"><Calendar className="w-3 h-3" /> Feb 2022 — Present</div>
                  <div className="flex items-center gap-1.5 md:justify-end"><MapPin className="w-3 h-3" /> Kochi, India</div>
                </div>
              </div>

              {/* Award Callout Box */}
              <div className="my-4 flex items-start gap-3 p-3 bg-teal-500/5 rounded-lg border border-teal-500/20 text-xs text-teal-300">
                <Award className="w-4 h-4 flex-shrink-0 text-teal-400 mt-0.5" />
                <div>
                  <strong className="text-teal-200">Excellence Award Recipient (2023):</strong> Awarded for stellar ownership of complex modules, high-quality deliverables with minimal supervision, and critical technical contributions.
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-slate-400 text-sm leading-relaxed list-disc list-outside ml-4">
                <li>
                  Engineered high-performance backend airline architectures using <span className="text-slate-200">Java and Spring Boot</span> to seamlessly process high-volume transaction workloads.
                </li>
                <li>
                  <strong className="text-emerald-400">Optimization Win:</strong> Parallelized heavy computations across crew data, slashing background execution times from <span className="text-emerald-400 font-medium">25 minutes down to under 5 seconds</span>.
                </li>
                <li>
                  Reduced heavy database overhead by batching lookup and persistence functions using optimized in-memory Map cache layers.
                </li>
                <li>
                  Led a 6-month hotfix team, spearheaded critical production support initiatives on-site in <span className="text-slate-200">South Korea</span>, and maintained legacy systems to improve system quality metrics by 20%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}