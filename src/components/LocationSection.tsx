import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LocationSectionProps {
  onNavigateHome?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Our Clinic</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Visit Us
              </h3>
            </div>

            {/* Address Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">
                    Complete Care Clinics &amp; Pharmacy
                  </p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Landmark: {CLINIC_INFO.landmark}
                </span>
                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                id="location-get-directions-btn"
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3.5 px-5 rounded-xl shadow-md transition-all text-sm group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                id="location-call-now-btn"
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-slate-800 active:bg-slate-950 text-white font-semibold py-3.5 px-5 rounded-xl shadow-md transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="text-xs text-slate-500 pt-1">
              Serving Satellite Town, Chandni Chowk, Murree Road, and surrounding Rawalpindi areas.
            </div>
          </div>

          {/* Right: Map Simulation & Visual Preview */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-[16/11] sm:aspect-[16/10]">
              
              {/* Map Canvas Background Design */}
              <div className="w-full h-full bg-[#e5ecef] relative p-4 flex items-center justify-center overflow-hidden">
                
                {/* SVG Stylized Roads / City Blocks for Satellite Town / Chandni Chowk */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                      <rect width="60" height="60" fill="#f1f5f9" />
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  {/* Murree Road / Main artery */}
                  <path d="M -50 80 Q 200 120 600 90 T 1200 110" fill="none" stroke="#cbd5e1" strokeWidth="24" />
                  <path d="M -50 80 Q 200 120 600 90 T 1200 110" fill="none" stroke="#f8fafc" strokeWidth="18" />
                  
                  {/* Commercial / 5th Road */}
                  <path d="M 220 -50 L 300 500" fill="none" stroke="#cbd5e1" strokeWidth="18" />
                  <path d="M 220 -50 L 300 500" fill="none" stroke="#f8fafc" strokeWidth="12" />
                  
                  {/* Satellite Town Blocks */}
                  <path d="M 100 240 L 800 240" fill="none" stroke="#cbd5e1" strokeWidth="12" />
                  <path d="M 100 240 L 800 240" fill="none" stroke="#ffffff" strokeWidth="8" />
                  
                  <path d="M 450 -50 L 450 500" fill="none" stroke="#cbd5e1" strokeWidth="14" />
                  <path d="M 450 -50 L 450 500" fill="none" stroke="#ffffff" strokeWidth="10" />

                  {/* Satellite Town Green park zone */}
                  <rect x="80" y="140" width="90" height="60" rx="8" fill="#dcfce7" />
                  <rect x="520" y="160" width="120" height="80" rx="10" fill="#dcfce7" />
                </svg>

                {/* Road Labels */}
                <span className="absolute top-16 left-6 text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-white/70 px-1.5 py-0.5 rounded">
                  Murree Road
                </span>
                <span className="absolute bottom-16 right-10 text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-white/70 px-1.5 py-0.5 rounded">
                  Chandni Chowk
                </span>
                <span className="absolute top-6 right-20 text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-white/70 px-1.5 py-0.5 rounded">
                  Satellite Town Block B
                </span>

                {/* Center Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center animate-bounce">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white shadow-xl flex items-center justify-center ring-4 ring-white">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="w-3 h-1.5 bg-black/20 rounded-full blur-xs mt-1" />
                </div>

                {/* Floating Information Overlay on Map */}
                <div className="absolute bottom-4 right-4 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-xl z-20">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Complete Care Clinics &amp; Pharmacy
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        20-B-1, Daniyal Plaza, Satellite Town, near Chandni Chowk, Rawalpindi
                      </p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1" />
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-700 font-semibold">
                      Open Mon – Sat
                    </span>
                    <a
                      href={CLINIC_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
