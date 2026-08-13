import React, { useState } from 'react';
import {
  Stethoscope,
  Users,
  Activity,
  HeartPulse,
  Pill,
  UserCheck,
  Phone,
  MessageCircle,
  X,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_LIST, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem } from '../types';
import { IMAGES } from '../data/images';

const serviceIcons: Record<string, React.ReactNode> = {
  'general-consultation': <Stethoscope className="w-7 h-7 text-emerald-600" />,
  'family-healthcare': <Users className="w-7 h-7 text-emerald-600" />,
  'routine-checkups': <Activity className="w-7 h-7 text-emerald-600" />,
  'basic-health-guidance': <HeartPulse className="w-7 h-7 text-emerald-600" />,
  'pharmacy-services': <Pill className="w-7 h-7 text-emerald-600" />,
  'health-support': <UserCheck className="w-7 h-7 text-emerald-600" />,
};

interface ServicesSectionProps {
  onNavigateHome?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subheading Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Our Healthcare Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] leading-tight">
            We offer a range of general healthcare services for <span className="text-[#10B981]">you and your family</span>.
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Visit our clinic in Satellite Town, Rawalpindi for trustworthy consultations and direct access to essential medications.
          </p>
        </div>

        {/* 6 Services Cards Grid (2x3 or 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-100 group-hover:scale-105 transition-all">
                  {serviceIcons[service.id] || <Activity className="w-7 h-7 text-emerald-600" />}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h4>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                <span>Inquire details</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
              {serviceIcons[selectedService.id]}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {selectedService.title}
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Available at Daniyal Plaza, Satellite Town</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Immediate walk-in &amp; call inquiries welcome</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl shadow-sm text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/923340800738?text=Hello%20Complete%20Care%2C%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(selectedService.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-xl shadow-sm text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
