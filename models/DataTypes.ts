export interface map {
  [key: string]: string;
}

export interface Experience {
  title: string;
  company: string;
  company_url: string;
  duration: string;
}

export type Data = {
  intro: String;
  picture: string;
  about: string;
  email: string;
  tagline: String[];
  experience: Experience[];
  additionalExperience?: {
    title: string;
    experience: Experience[];
  };
  githubUserID: string;
  repos: string[];
  socials: map;
  resume: string;
};

export type ProjectCardProps = {
  name?: string;
  description?: string | null;
  star_gazers?: number;
  forks_count?: number;
  html_url?: string;
  homepage?: string | URL | undefined;
  language?: string;
  open_issues?: number;
  topics?: string[] | null;
};

export type ProjectDataArr = {
  name?: string;
  description?: string | null;
  star_gazers?: number;
  forks_count?: number;
  html_url?: string;
  homepage?: string | URL | undefined;
  language?: string;
  open_issues?: number;
  topics?: string[] | null;
};

export interface AddAnimationClassParameters {
  elements?: HTMLCollectionOf<Element>;
  animate?: number;
}

export interface RemoveAnimationClassParameters {
  elements?: HTMLCollectionOf<Element>;
  index: number;
}

export interface AddAnimationClassReturnType {
  // TODO: fix datatype of setinterval variable
  interval: any;
  index: number[];
}
