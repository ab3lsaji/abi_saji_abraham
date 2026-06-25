// src/app/page.tsx
import Link from "next/link";
import { SKILLS, STATS, EXPERIENCE, EDUCATION } from "./data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
      
      {/* Ambient background glow elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-teal-500/5 via-teal-500/0 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[120vh] right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[85vh] flex-col justify-center px-6 max-w-5xl mx-auto md:px-12 pt-28 z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20 w-fit backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            Senior Product Engineer @ IBS Software
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
            Abi Saji Abraham
          </h1>
          
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-200 via-slate-400 to-teal-400 bg-clip-text text-transparent">
            Building High-Performance Backend Architectures
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed pt-2">
            Specializing in <span className="text-teal-300 font-medium">Java, Spring Boot, and Microservices</span>. I engineer highly available distributed systems, optimize mission-critical airline software ecosystems, and compress pipeline execution delays from minutes to milliseconds.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="mailto:abisajiabraham@gmail.com" className="px-6 py-3 text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-md transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-teal-500/20">
              Contact Abi
            </Link>
            <a 
              href="/Abi_Saji_Abraham_Resume.pdf" 
              download="Abi_Saji_Abraham_Resume.pdf"
              className="px-6 py-3 text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-md transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS / IMPACT SECTION */}
      <section className="relative border-y border-slate-900 bg-slate-900/20 backdrop-blur-md py-12 px-6 z-10">
        <div className="max-w-5xl mx-auto md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left group">
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-teal-400 transition-colors duration-300">{stat.metric}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION WITH REVEAL EFFECT */}
      <ScrollReveal>
        <section id="experience" className="relative py-24 px-6 max-w-5xl mx-auto md:px-12 z-10">
          <h3 className="text-2xl font-bold tracking-tight text-white mb-12 border-b border-slate-900 pb-4 flex items-center gap-2">
            <span className="text-teal-400 font-mono text-xl">//</span> Professional Experience
          </h3>
          
          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-0 md:pl-8 border-l-0 md:border-l md:border-slate-800 hover:md:border-teal-500/40 transition-colors duration-300 space-y-4 group">
                <div className="hidden md:block absolute w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 left-[-6px] top-2 group-hover:bg-teal-400 group-hover:border-teal-300 transition-all duration-300 shadow-md" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-2xl font-semibold text-white tracking-tight group-hover:text-teal-300 transition-colors duration-300">{exp.role}</h4>
                    <p className="text-sm text-slate-400 font-medium mt-0.5">
                      <span className="text-teal-400 font-semibold">{exp.company}</span> — {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1.5 rounded-md w-fit h-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                  {exp.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-teal-400/70 mt-2 shrink-0 text-[10px]">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 4. TECH MATRIX SECTION WITH REVEAL EFFECT */}
      <ScrollReveal>
        <section id="tech" className="relative py-24 px-6 max-w-5xl mx-auto md:px-12 z-10">
          <div className="bg-gradient-to-b from-slate-900/40 to-slate-900/10 backdrop-blur-sm rounded-2xl border border-slate-900 p-8 sm:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-10 flex items-center gap-2">
              <span className="text-teal-400 font-mono text-xl">//</span> Technical Expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-950/40 border border-slate-900/60 hover:border-slate-800/80 hover:bg-slate-900/20 transition-all duration-300">
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800/60 px-3 py-1.5 rounded-md hover:text-white hover:border-teal-500/30 transition-colors duration-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. EDUCATION SECTION WITH REVEAL EFFECT */}
      <ScrollReveal>
        <section id="education" className="relative py-24 px-6 max-w-5xl mx-auto md:px-12 z-10">
          <h3 className="text-2xl font-bold tracking-tight text-white mb-12 border-b border-slate-900 pb-4 flex items-center gap-2">
            <span className="text-teal-400 font-mono text-xl">//</span> Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="border border-slate-900 bg-slate-900/10 backdrop-blur-sm p-6 rounded-xl space-y-3 hover:border-slate-800 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-semibold text-teal-400/90 bg-teal-400/5 px-2.5 py-1 rounded-md border border-teal-500/10">{edu.period}</span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight leading-snug">{edu.degree}</h4>
                <p className="text-sm text-slate-400 font-medium">{edu.institution} <span className="text-slate-600 block sm:inline sm:ml-1">— {edu.location}</span></p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 6. CONTACT & FOOTER SECTION */}
      <section id="contact" className="relative border-t border-slate-900 bg-slate-950/40 backdrop-blur-md py-20 px-6 z-10">
        <div className="max-w-5xl mx-auto md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Let's Connect</h3>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-md leading-relaxed">Interested in enterprise scale engineering, high-throughput backend services, or architecture optimization?</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link 
              href="mailto:abisajiabraham@gmail.com" 
              className="text-sm font-semibold text-teal-400 hover:text-teal-300 border border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/10 px-5 py-3 rounded-md transition-all duration-200"
            >
              abisajiabraham@gmail.com
            </Link>
            <Link 
              href="https://www.linkedin.com/in/abi-saji-abraham-87642" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold text-slate-300 hover:text-white border border-slate-800 bg-slate-900/50 hover:bg-slate-900 px-5 py-3 rounded-md transition-all duration-200"
            >
              LinkedIn Profile
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto md:px-12 text-center text-xs text-slate-600 mt-16 pt-6 border-t border-slate-900/40 tracking-wider font-mono">
          © {new Date().getFullYear()} ABI SAJI ABRAHAM. DEPLOYED AT PRODUCTION SPEC.
        </div>
      </section>

    </main>
  );
}