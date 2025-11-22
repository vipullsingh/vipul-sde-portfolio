import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Vipul Kumar",
  title: "Full Stack Web Developer",
  email: "vipul.kr.vks@gmail.com",
  phone: "7004606171",
  location: "Pune, Maharashtra",
  links: {
    github: "https://github.com/vipullsingh",
    linkedin: "https://www.linkedin.com/in/vipul-kumar-931a021b8/",
    portfolio: "https://vipul-portfolio.com", 
  },
  summary: "Full Stack Web Developer with experience building scalable SaaS applications using ReactJS, GoLang, NextJS, and MongoDB. Passionate about clean code, system design, integrations, and improving user experience.",
  skills: [
    "ReactJS", "GoLang", "NextJS", "NodeJS", "ExpressJS", "MongoDB", "JavaScript", "Socket.io", "Redux", "MUI", "TypeScript"
  ],
  experience: [
    {
      company: "TezMinds Software Pvt. Ltd",
      role: "Software Developer",
      duration: "09/2023 – Present",
      location: "Pune, Maharashtra",
      projects: [
        {
          title: "Location-Based Listing Platform",
          description: [
            "Built a dynamic 'Create Listing' form in ReactJS.",
            "Integrated Stripe for bookings.",
            "Used Mapbox for geolocation-based listings.",
            "Implemented Google & Apple OAuth.",
            "Redesigned UI with MUI.",
            "Optimized state with Redux & Context."
          ],
          techStack: ["ReactJS", "MUI", "Mapbox", "Stripe", "OAuth"]
        },
        {
          title: "SaaS Marketing Automation Tool",
          description: [
            "Built scalable GoLang REST APIs for CRM imports (HubSpot, Salesforce, Monday, Klaviyo).",
            "Implemented CRON-based scheduled syncs & Webhooks.",
            "Developed full auth system with RBAC.",
            "Built Next.js Frontend with RTK Query.",
            "Integrated Gmail/Outlook sync & custom ticketing system.",
            "Used Ollama + Llama 3.2 for AI insights & Action Flows."
          ],
          techStack: ["GoLang", "NextJS", "MongoDB", "Redux", "RTK Query", "Ollama"]
        },
        {
          title: "Training Period",
          description: [
             "Built real-time chat using GoLang + WebSockets."
          ],
          techStack: ["GoLang", "WebSockets"]
        }
      ]
    },
    {
      company: "Coding Ninjas",
      role: "Teaching Assistant (Internship)",
      duration: "08/2023 – 12/2023",
      location: "Delhi, India",
      details: [
        "Resolved 500+ React queries.",
        "Code reviews for 120+ students.",
        "Guided debugging and deployment."
      ],
      projects: []
    }
  ],
  education: [
    {
      degree: "Full Stack Development",
      institution: "Masai School",
      duration: "2022 – 2023",
      location: "Bangalore"
    },
    {
      degree: "Master of Computer Application",
      institution: "Vinoba Bhave University",
      duration: "2020 – 2022",
      location: "Jharkhand"
    },
    {
      degree: "Bachelors of Computer Application",
      institution: "Vinoba Bhave University",
      duration: "2017 – 2020",
      location: "Jharkhand"
    }
  ],
  certificates: [
    "C++ (CodingNinjas)",
    "NodeJs (CodingNinjas)",
    "DSA (CodingNinjas)",
    "ReactJS (CodingNinjas)",
    "Frontend Using JS (CodingNinjas)",
    "Full Stack Web Developer (Masai School)"
  ]
};

export const SOCIAL_LINKS = {
    leetcode: "https://leetcode.com/u/vipullsingh/",
    resume: "https://drive.google.com/file/d/1lgPpMka2pOXBelkg-6iiUn90VdGzSRLp/view?usp=sharing"
};

export const AI_SYSTEM_INSTRUCTION = `
You are an AI assistant representing Vipul Kumar.
Answer strictly based on this resume data:
${JSON.stringify(RESUME_DATA, null, 2)}
Tone: Helpful, tech-savvy barista.
`;