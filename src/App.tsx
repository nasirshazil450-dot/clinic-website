/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustCards } from './components/TrustCards';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PharmacySection } from './components/PharmacySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Smooth scroll to target section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'pharmacy', 'location', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Combined Landing Page */}
      <main className="flex-grow">
        {/* 1. Hero Section matching reference image */}
        <Hero onGetDirections={() => handleNavigate('location')} />

        {/* 2. Key Trust Pillars / Highlights */}
        <TrustCards />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Pharmacy Section */}
        <PharmacySection onContactClick={() => handleNavigate('contact')} />

        {/* 6. Location Section */}
        <LocationSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Floating Direct Action Bar */}
      <FloatingContactBar />
    </div>
  );
}
