// src/app/data.ts

export const SKILLS = [
  { category: "Languages & Frameworks", items: ["Java", "Spring Framework", "Spring Boot", "JPA", "Hibernate"] },
  { category: "Cloud & Databases", items: ["AWS (EC2, S3, RDS, Lambda)", "PostgreSQL", "DynamoDB", "Maven"] },
  { category: "Architecture & Tools", items: ["Microservices", "RESTful APIs", "Git", "Bitbucket", "Jenkins CI/CD"] },
  { category: "Testing & Collaboration", items: ["JUnit", "Mockito", "JIRA", "Confluence", "Agile/Scrum"] }
];

export const STATS = [
  { metric: "4.5+", label: "Years Experience" },
  { metric: "25m to <5s", label: "Performance Optimization" },
  { metric: "90%", label: "Defect Resolution Accuracy" },
  { metric: "2023", label: "Excellence Award Winner" }
];

export const EXPERIENCE = [
  {
    role: "Senior Product Engineer",
    company: "IBS Software",
    location: "Kochi, India",
    period: "02/2022 - Present",
    highlights: [
      "Designed and developed scalable Java/Spring Boot backend systems for high-volume enterprise airline solutions.",
      "Optimized crew recency computation using parallel processing, drastically dropping execution time from 25 minutes to under 5 seconds.",
      "Consolidated individual DB operations into batch queries utilizing in-memory Map structures, cutting redundant calls.",
      "Awarded the Excellence Award (2023) for outstanding technical ownership of complex migrated modules.",
      "Deployed onsite in South Korea for production support, interfacing directly with international clients."
    ]
  }
];


export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Mar Athanasios College for Advanced Studies Tiruvalla (MACFAST)",
    location: "Tiruvalla, India",
    period: "Graduated 01/2022",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kristu Jyoti College of Management and Technology (KCMT)",
    location: "Changanassery, India",
    period: "Graduated 04/2019",
  },
];