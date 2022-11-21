export interface TechItem {
  icon: string;
  title: string;
  url: string;
}

export interface ServiceItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface CallToAction {
  title: string;
  url: string;
  icon: string;
  fileName?: string;
  target?: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
