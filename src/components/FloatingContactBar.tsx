import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex sm:hidden flex-col gap-2.5">
      <a
        id="floating-whatsapp-btn"
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        id="floating-phone-btn"
        href={`tel:${CLINIC_INFO.rawPhone}`}
        className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
