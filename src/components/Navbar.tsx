import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081322]/95 backdrop-blur-md shadow-lg shadow-black/15 py-3'
          : 'bg-[#081322] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {/* Custom Cross Logo from Reference */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* White outer medical cross contour */}
                <path
                  d="M19 4C19 2.89543 19.8954 2 21 2H27C28.1046 2 29 2.89543 29 4V19H44C45.1046 19 46 19.8954 46 21V27C46 28.1046 45.1046 29 44 29H29V44C29 45.1046 28.1046 46 27 46H21C19.8954 46 19 45.1046 19 44V29H4C2.89543 29 2 28.1046 2 27V21C2 19.8954 2.89543 19 4 19H19V4Z"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  fill="#081322"
                />
                {/* Green leaf / health cross motif inside */}
                <path
                  d="M24 14C24 14 18 20 18 27C18 31 21 34 24 34C27 34 30 31 30 27C30 20 24 14 24 14Z"
                  fill="#10B981"
                />
                <path
                  d="M15 24C15 24 20 20 24 20C28 20 33 24 33 24"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <span className="block text-lg font-bold text-white tracking-tight leading-tight">
                Complete Care
              </span>
              <span className="block text-xs font-medium text-slate-300 tracking-wide">
                Clinics &amp; Pharmacy
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with active underline */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-500 rounded-full animate-in fade-in duration-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call Now Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] active:bg-[#047857] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-emerald-900/20 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="p-2.5 rounded-xl bg-[#10B981] text-white active:bg-emerald-700"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="sm:hidden bg-[#081322] border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-white bg-slate-800/80 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              id="mobile-menu-call-cta"
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CLINIC_INFO.phone}</span>
            </a>
            <a
              id="mobile-menu-whatsapp-cta"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
