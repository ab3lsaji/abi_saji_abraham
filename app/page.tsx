// src/app/page.tsx
import Link from "next/link";
import { SKILLS, STATS, EXPERIENCE, EDUCATION } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="flex min-h-[80vh] flex-col justify-center px-6 max-w-5xl mx-auto md:px-12 pt-20">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            Senior Product Engineer @ IBS Software
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Abi Saji Abraham
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400">
            Building High-Performance Backend Architectures
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed pt-2">
            Specializing in **Java, Spring Boot, and Microservices**. I design scalable systems, optimize mission-critical enterprise applications, and transform bottlenecked processing times from minutes to seconds.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="mailto:abisajiabraham@gmail.com" className="px-6 py-3 text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-md transition-all duration-200 shadow-lg shadow-teal-500/10">
              Contact Abi
            </Link>
            <Link href="#experience" className="px-6 py-3 text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-md transition-all duration-200">
              View Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS / IMPACT SECTION */}
      <section className="border-y border-slate-900 bg-slate-900/30 py-12 px-6">
        <div className="max-w-5xl mx-auto md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">{stat.metric}</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto md:px-12">
        <h3 className="text-2xl font-bold tracking-tight text-white mb-10 border-b border-slate-900 pb-4">
          Professional Experience
        </h3>
        
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-0 md:pl-6 border-l-0 md:border-l md:border-teal-500/20 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                  <p className="text-sm text-teal-400 font-medium">{exp.company} — <span className="text-slate-400 font-normal">{exp.location}</span></p>
                </div>
                <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2.5 text-slate-400 text-sm sm:text-base">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1.5 shrink-0 text-xs">▪</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECH MATRIX SECTION */}
      <section id="tech" className="py-20 px-6 max-w-5xl mx-auto md:px-12 bg-slate-900/10 rounded-2xl border border-slate-900/50">
        <h3 className="text-2xl font-bold tracking-tight text-white mb-10 text-center md:text-left">
          Technical Expertise
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/50 border border-slate-900 hover:border-slate-800 transition-colors">
              <h4 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-4">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="text-xs bg-slate-950 text-slate-300 border border-slate-800/80 px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDUCATION SECTION */}
      <section id="education" className="py-20 px-6 max-w-5xl mx-auto md:px-12">
        <h3 className="text-2xl font-bold tracking-tight text-white mb-10 border-b border-slate-900 pb-4">
          Education
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="border border-slate-900 bg-slate-900/20 p-6 rounded-lg space-y-2">
              <span className="text-xs font-mono text-teal-400">{edu.period}</span>
              <h4 className="text-lg font-semibold text-white leading-snug">{edu.degree}</h4>
              <p className="text-sm text-slate-400">{edu.institution} — <span className="text-slate-500">{edu.location}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT & FOOTER SECTION */}
      <section id="contact" className="border-t border-slate-900 bg-slate-950 py-16 px-6">
        <div className="max-w-5xl mx-auto md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Let's Connect</h3>
            <p className="text-sm text-slate-400 mt-1">Interested in high-throughput architectures or backend scale optimization?</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="mailto:abisajiabraham@gmail.com" 
              className="text-sm font-medium text-teal-400 hover:text-teal-300 border border-teal-500/20 bg-teal-500/5 px-4 py-2 rounded-md transition-colors"
            >
              abisajiabraham@gmail.com
            </Link>
            <Link 
              href="https://www.linkedin.com/in/abi-saji-abraham-87642" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-slate-400 hover:text-white border border-slate-800 bg-slate-900 px-4 py-2 rounded-md transition-colors"
            >
              LinkedIn Profile
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto md:px-12 text-center text-xs text-slate-600 mt-12 pt-6 border-t border-slate-900/50">
          © {new Date().getFullYear()} Abi Saji Abraham. Built with Next.js & Tailwind CSS.
        </div>
      </section>

    </main>
  );
}