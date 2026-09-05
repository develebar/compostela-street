export type ProgramDay = "viernes" | "sábado" | "domingo";

export type ProgramEventType =
  | "discipline"
  | "area"
  | "special";

export interface ProgramEvent {
  id: string;
  day: ProgramDay;
  startTime: string;
  endTime: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  href: string;
  type: ProgramEventType;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface Discipline {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  links?: ExternalLink[];
}

export interface Area {
  slug: string;
  title: string;
  image: string;
  description?: string;
}

export interface Sponsor {
  name: string;
  image: string;
  url?: string;
}

export interface MarketPartner {
  name: string;
  image: string;
  url: string;
}