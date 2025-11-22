export interface Project {
  title: string;
  description: string[];
  techStack: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  projects?: Project[];
  details?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
    portfolio?: string;
  };
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  certificates: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
