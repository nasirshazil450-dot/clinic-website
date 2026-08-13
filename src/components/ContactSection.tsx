import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../data/images';

interface ContactSectionProps {
  onNavigateHome?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your inquiry message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate prompt client-side message preparation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Complete Care Clinics & Pharmacy,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = `https://wa.me/923340800738?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Get In Touch */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
                Get In Touch
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                We're Here For You
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Have questions about our clinic consultations or pharmacy availability? Contact us directly by phone or WhatsApp.
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-4">
              
              {/* Phone item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </div>
                  <a
                    href={`tel:${CLINIC_INFO.rawPhone}`}
                    className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Clinic &amp; Pharmacy Address
                  </div>
                  <p className="text-sm font-medium text-slate-800 mt-0.5 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Timings
                  </div>
                  <p className="text-sm text-slate-700 mt-0.5">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                id="contact-call-btn"
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-slate-800 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-whatsapp-btn"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Send Us a Message Form */}
          <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
            
            <div className="mb-6">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                Send Us a Message
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the form below and we will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h5 className="text-xl font-bold text-slate-900">
                  Message Prepared Successfully!
                </h5>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been structured. You can also send it directly via WhatsApp for an immediate response.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0334 0800738"
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your health concern or medicine inquiry..."
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-70 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all cursor-pointer text-sm group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
