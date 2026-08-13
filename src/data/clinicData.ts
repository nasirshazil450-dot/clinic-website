import { ServiceItem, TrustItem, FeatureBadge } from '../types';

export const CLINIC_INFO = {
  name: 'Complete Care Clinics & Pharmacy',
  shortName: 'Complete Care',
  tagline: 'Complete Care for You & Your Family',
  subtitle: 'We are committed to providing quality medical care and convenient pharmacy services under one roof for you and your family.',
  aboutStory: 'Complete Care Clinics & Pharmacy is dedicated to providing reliable, accessible and quality healthcare services to individuals and families in Rawalpindi. We aim to make healthcare simple, convenient and trustworthy for everyone.',
  pharmacyStory: 'Our pharmacy is committed to providing genuine medicines, healthcare products and professional guidance for you and your family.',
  phone: '0334 0800738',
  rawPhone: '03340800738',
  formattedPhoneInternational: '+92 334 0800738',
  address: '20-B-1, Ground Floor, Daniyal Plaza, Satellite Town, near Chandni Chowk, Rawalpindi, 46300, Pakistan',
  shortAddress: '20-B-1, Daniyal Plaza, Satellite Town, Rawalpindi',
  cityPostal: 'Rawalpindi, 46300, Pakistan',
  landmark: 'Near Chandni Chowk, Satellite Town',
  mapsUrl: 'https://maps.google.com/?q=20-B-1,+Ground+Floor,+Daniyal+Plaza,+Satellite+Town,+near+Chandni+Chowk,+Rawalpindi,+46300,+Pakistan',
  whatsappUrl: 'https://wa.me/923340800738?text=Hello%20Complete%20Care%20Clinics%20%26%20Pharmacy,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20consultations.',
  hours: 'Monday – Saturday: 9:00 AM – 10:00 PM | Sunday: On Call / Emergency'
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: 'professional-healthcare',
    title: 'Professional Healthcare',
    description: 'Quality care by experienced staff',
    iconName: 'ShieldCheck'
  },
  {
    id: 'family-care',
    title: 'Family Care',
    description: 'Compassionate care for the whole family',
    iconName: 'Users'
  },
  {
    id: 'convenient-pharmacy',
    title: 'Convenient Pharmacy',
    description: 'Medicines at your convenience',
    iconName: 'Pill'
  },
  {
    id: 'patient-focused',
    title: 'Patient-Focused Service',
    description: 'Your health is our top priority',
    iconName: 'HeartHandshake'
  }
];

export const ABOUT_BADGES: FeatureBadge[] = [
  {
    id: 'quality-care',
    title: 'Quality Care',
    iconName: 'Heart'
  },
  {
    id: 'trusted-service',
    title: 'Trusted Service',
    iconName: 'ShieldCheck'
  },
  {
    id: 'convenient-location',
    title: 'Convenient Location',
    iconName: 'MapPin'
  },
  {
    id: 'patient-first',
    title: 'Patient First',
    iconName: 'Users'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'general-consultation',
    title: 'General Consultation',
    description: 'Professional consultation for various health concerns and diagnostic guidance.',
    iconName: 'Stethoscope'
  },
  {
    id: 'family-healthcare',
    title: 'Family Healthcare',
    description: 'Complete healthcare solutions tailored for all family members and age groups.',
    iconName: 'Users'
  },
  {
    id: 'routine-checkups',
    title: 'Routine Checkups',
    description: 'Regular checkups and vital monitoring for a healthier tomorrow and peace of mind.',
    iconName: 'Activity'
  },
  {
    id: 'basic-health-guidance',
    title: 'Basic Health Guidance',
    description: 'Expert advice and lifestyle recommendations for maintaining everyday wellness.',
    iconName: 'HeartPulse'
  },
  {
    id: 'pharmacy-services',
    title: 'Pharmacy Services',
    description: 'Genuine prescription medicines, over-the-counter essentials, and health products.',
    iconName: 'Pill'
  },
  {
    id: 'health-support',
    title: 'Health Support',
    description: 'We are here to support your health journey every step of the way with dedicated care.',
    iconName: 'UserCheck'
  }
];

export const PHARMACY_PERKS = [
  'Genuine & Quality Medicines',
  'Wide Range of Healthcare Products',
  'Professional Guidance',
  'Convenient & Reliable Service'
];
