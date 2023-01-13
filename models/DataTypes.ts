export interface keyable {
  [key: string]: any;
}

export interface map {
  [key: string]: string;
}

export type ProjectCardProps = {
  name?: string;
  description?: string | null;
  star_gazers?: number;
  forks?: number;
  forks_count?: number;
  html_url?: string;
  homepage?: string | URL | undefined;
  language?: string;
  open_issues?: number;
  topics?: any[] | null;
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
