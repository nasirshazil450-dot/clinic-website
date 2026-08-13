export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details?: string[];
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureBadge {
  id: string;
  title: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}
