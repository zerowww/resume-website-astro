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
  url: stricompanyIcon
}

export interface CallToAction {
  title: string;
  url: string;
  icon: string;
  badge?: string;
  fileName?: string;
  target?: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}

export interface Referral {
  content: string;
  author: ReferralAuthor;
}

export interface ReferralAuthor {
  name: string;
  company: string;
  position: string;
  companyUrlIcon: string;
}
