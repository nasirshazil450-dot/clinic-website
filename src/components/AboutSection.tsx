import React from 'react';
import { Heart, ShieldCheck, MapPin, Users } from 'lucide-react';
import { CLINIC_INFO, ABOUT_BADGES } from '../data/clinicData';
import { IMAGES } from '../data/images';

const badgeIcons: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5 text-emerald-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  MapPin: <MapPin className="w-5 h-5 text-emerald-600" />,
  Users: <Users className="w-5 h-5 text-emerald-600" />,
};

interface AboutSectionProps {
  onNavigateHome?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              About Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] leading-tight">
              About Complete Care <br />
              <span className="text-[#10B981]">Clinics &amp; Pharmacy</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {CLINIC_INFO.aboutStory}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-600 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold">
                ✓
              </div>
              <p className="pt-0.5">
                Conveniently located at <strong>Daniyal Plaza, Satellite Town</strong> near Chandni Chowk, offering integrated clinic consultations and pharmacy supplies in one comfortable setting.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/80 aspect-[4/3] bg-slate-100 relative group">
              <img
                src={IMAGES.stethoscopeDesk}
                alt="Medical stethoscope and desk at Complete Care Clinics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* 4 Feature Badges in Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {ABOUT_BADGES.map((badge) => (
            <div
              key={badge.id}
              id={`about-badge-${badge.id}`}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 group-hover:bg-emerald-100 group-hover:scale-110 transition-all">
                {badgeIcons[badge.iconName]}
              </div>
              <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                {badge.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
