import React from 'react';
import { Check, ArrowRight, Pill, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO, PHARMACY_PERKS } from '../data/clinicData';
import { IMAGES } from '../data/images';

interface PharmacySectionProps {
  onContactClick: () => void;
  onNavigateHome?: () => void;
}

export const PharmacySection: React.FC<PharmacySectionProps> = ({
  onContactClick,
}) => {
  return (
    <section id="pharmacy" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Description & Perks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <Pill className="w-3.5 h-3.5" />
              <span>In-House Pharmacy</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Complete Care <span className="text-emerald-600">Pharmacy</span>
            </h3>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {CLINIC_INFO.pharmacyStory}
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {PHARMACY_PERKS.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 font-medium text-base">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask for Medicine Availability</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Pharmacy Bottles Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/80 aspect-[4/3] bg-slate-100 group">
              <img
                src={IMAGES.pharmacyBottles}
                alt="Prescription medications and healthcare products at Complete Care Pharmacy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* Green CTA Banner matching bottom of mockup 4 */}
        <div className="mt-10 bg-emerald-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-700/15">
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              Need a Medicine or Have a Question?
            </h4>
            <p className="text-emerald-100 text-sm sm:text-base mt-1">
              We are here to help you get genuine medicines quickly and safely.
            </p>
          </div>

          <button
            id="pharmacy-contact-cta-btn"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-emerald-800 hover:text-emerald-900 font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group flex-shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
