// types/index.ts
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    department: string;
    bio: string;
    image: string;
    social: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  }
  
  export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  }
  
  export interface Milestone {
    year: string;
    title: string;
    description: string;
  }
  
  export interface CompanyValue {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    details: string;
    link?: string;
  }