export interface ResumeContentHeader {
  text: string;
}

export interface AboutSection {
  description: string;
}

export interface ExperienceSection {
  company: string;
  duration: string;
  role: string;
  achievements: string[];
}

export interface EducationSection {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface ResumeContentDataProps {
  header: ResumeContentHeader;
  about: Array<AboutSection>;
  experience: Array<ExperienceSection>;
  education: Array<EducationSection>;
  skills: string[];
  interests: string[];
}
