// Required props are the ones the page is guaranteed to show; the rest are optional
// because we routinely omit them (e.g. workLength is never used; internship had no logo).
export interface Experience {
  img?: string;
  jobTitle: string;
  company?: string;
  date: string;
  workLength?: string;
  location?: string;
  tasks?: Array<string>;
  techstack?: Array<string>;
}

export interface Education {
  img?: string;
  school: string;
  city?: string;
  study: string;
  date: string;
}
