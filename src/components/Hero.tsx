import React from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../data/images';

interface HeroProps {
  onGetDirections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetDirections }) => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white min-h-[560px] lg:min-h-[640px] flex items-center"
    >
      {/* Right Background Image with Seamless Gradient Blend */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] pointer-events-none select-none overflow-hidden z-0">
        <img
          src={IMAGES.clinicReception}
          alt="Complete Care Clinics & Pharmacy Reception Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center sm:object-right-center"
        />

        {/* Multi-layered soft gradient overlays for seamless feather fade to white */}
        {/* Horizontal blend from pure white on the left into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 lg:via-white/20 to-transparent" />
        
        {/* Extra strong white mask on extreme left edge for large screens */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-white to-transparent" />

        {/* Vertical subtle edge smoothing */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl lg:max-w-2xl py-4 sm:py-8 space-y-6">
          
          {/* Pill Tag */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EAEFF4] text-[#475569] text-xs font-bold uppercase tracking-wider shadow-2xs">
              YOUR HEALTH, OUR PRIORITY
            </span>
          </div>

          {/* Main Headline matching reference */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold text-[#0A1628] tracking-tight leading-[1.12]">
            Complete Care <br />
            for <span className="text-[#10B981]">You &amp; Your</span> <br />
            <span className="text-[#10B981]">Family</span>
          </h1>

          {/* Description Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
            We are committed to providing quality medical care and convenient pharmacy services under one roof for you and your family.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Call Now Button */}
            <a
              id="hero-call-now-btn"
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0A1628] hover:bg-[#16253b] active:bg-[#060e1a] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 group text-sm sm:text-base cursor-pointer"
            >
              <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Call Now</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Get Directions Button */}
            <button
              id="hero-get-directions-btn"
              onClick={onGetDirections}
              className="inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#059669] active:bg-[#047857] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 group text-sm sm:text-base cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Get Directions</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
