import React from 'react';
import { Stethoscope, Users, Activity, HeartPulse, Pill, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';

interface HomeServicesOverviewProps {
  onLearnMore: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  'general-consultation': <Stethoscope className="w-6 h-6 text-emerald-600" />,
  'family-healthcare': <Users className="w-6 h-6 text-emerald-600" />,
  'routine-checkups': <Activity className="w-6 h-6 text-emerald-600" />,
  'basic-health-guidance': <HeartPulse className="w-6 h-6 text-emerald-600" />,
  'pharmacy-services': <Pill className="w-6 h-6 text-emerald-600" />,
};

export const HomeServicesOverview: React.FC<HomeServicesOverviewProps> = ({ onLearnMore }) => {
  // Show top 5 services as in the Home mockup
  const previewServices = SERVICES_LIST.slice(0, 5);

  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative background curve */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We combine quality healthcare with convenience to serve you better every day.
          </p>
        </div>

        {/* Services We Offer Section */}
        <div className="mt-8">
          <div className="flex flex-col items-center mb-10 text-center space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              Services We Offer
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Services
            </h3>
          </div>

          {/* Grid of 5 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {previewServices.map((service) => (
              <div
                key={service.id}
                id={`home-service-card-${service.id}`}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:scale-110 transition-all duration-300">
                    {iconMap[service.id]}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Action Button */}
          <div className="mt-12 text-center">
            <button
              id="home-services-learn-more-btn"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-slate-800 active:bg-slate-950 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
