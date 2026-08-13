import React from 'react';
import { ShieldCheck, Users, Pill, HeartHandshake } from 'lucide-react';
import { TRUST_ITEMS } from '../data/clinicData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  Users: <Users className="w-6 h-6 text-emerald-600" />,
  Pill: <Pill className="w-6 h-6 text-emerald-600" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
};

export const TrustCards: React.FC = () => {
  return (
    <section id="trust-pillars" className="py-8 bg-slate-50 relative -mt-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`trust-card-${item.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                {iconMap[item.iconName]}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
