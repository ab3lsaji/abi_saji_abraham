// src/components/Skills.tsx
import { Code2, Server, Database, Cloud, ShieldCheck, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Core Development",
    icon: <Code2 className="w-5 h-5 text-teal-400" />,
    skills: ["Java", "Spring Framework", "Spring Boot", "Microservices", "RESTful APIs"]
  },
  {
    title: "Data & Persistence",
    icon: <Database className="w-5 h-5 text-teal-400" />,
    skills: ["PostgreSQL", "DynamoDB", "JPA", "Hibernate"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-teal-400" />,
    skills: ["AWS (EC2, S3, RDS, Lambda)", "Jenkins CI/CD", "Maven"]
  },
  {
    title: "Testing & Quality",
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    skills: ["JUnit", "Mockito", "End-to-End Testing"]
  },
  {
    title: "Tools & Workflow",
    icon: <Terminal className="w-5 h-5 text-teal-400" />,
    skills: ["Git / Bitbucket", "Agile / Scrum", "JIRA", "Confluence"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto md:px-12">
      <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Technical Expertise</h3>
      <p className="text-slate-400 mb-10 text-sm">Architecting scalable backend ecosystems with modern tech stacks.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h4 className="font-semibold text-slate-200">{category.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-2.5 py-1 text-xs bg-slate-950 text-slate-300 rounded border border-slate-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}