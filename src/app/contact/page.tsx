"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/data/brand";
import ProofGalleryModal from "@/components/ProofGalleryModal";
import {
  Phone,
  Instagram,
  MessageCircle,
  Clock,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Send,
  Check,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    subject: "Order Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name.trim() || !contactData.phone.trim()) return;

    setSubmitted(true);
    const msg = `*Contact Request - CUP2EAT*\n\n*Name:* ${contactData.name}\n*Phone:* ${contactData.phone}\n*Subject:* ${contactData.subject}\n*Message:* ${contactData.message || "Hello, I want to connect with the CUP2EAT team."}`;

    setTimeout(() => {
      window.open(BRAND.whatsappUrl(msg), "_blank");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cup-ivory">
      {/* Header */}
      <section className="bg-cup-forest text-cup-ivory py-16 sm:py-24 border-b border-cup-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cup-emerald/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cup-gold font-bold bg-cup-emerald/60 px-4 py-1.5 rounded-full border border-cup-gold/30">
            <Phone className="w-3.5 h-3.5" /> Direct Communications
          </span>

          <h1 className="font-serif font-black text-4xl sm:text-6xl text-cup-ivory tracking-tight">
            Connect With CUP2EAT
          </h1>

          <p className="text-sm sm:text-base text-cup-ivory/80 max-w-xl mx-auto font-light leading-relaxed">
            Have questions about placing a wholesale order, requesting a sample pack, or bringing edible cups to your upcoming event? We are here to help.
          </p>

          <div className="pt-2">
            <ProofGalleryModal />
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-cup-emerald font-bold">
                Official Channels
              </span>
              <h2 className="font-serif font-bold text-3xl text-cup-forest">
                Reach Our Founding Team
              </h2>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                Connect directly with founder Varun Khera and our customer relations team for prompt assistance.
              </p>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-cup-gold/30 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cup-forest flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-cup-gold" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-cup-forest/60">
                  Call or WhatsApp Directly
                </span>
                <h4 className="font-serif font-bold text-lg text-cup-forest">
                  <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-cup-emerald transition">
                    {BRAND.phoneDisplay}
                  </a>
                </h4>
                <p className="text-xs text-cup-forest/70">
                  Available Monday to Sunday for cafe enquiries and orders.
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-300 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-800">
                  Instant Messaging
                </span>
                <h4 className="font-serif font-bold text-base text-emerald-950">
                  WhatsApp Hotline
                </h4>
                <p className="text-xs text-emerald-800/80">
                  Quickest way to check real-time stock, get sample dispatches, and share delivery addresses.
                </p>
                <a
                  href={BRAND.whatsappUrl("Hello CUP2EAT, I would like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 pt-1"
                >
                  <span>Launch WhatsApp Chat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white p-6 rounded-2xl border border-cup-gold/30 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cup-sand/40 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-cup-forest" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-cup-forest/60">
                  Official Instagram
                </span>
                <h4 className="font-serif font-bold text-base text-cup-forest">
                  {BRAND.instagramHandle}
                </h4>
                <p className="text-xs text-cup-forest/70">
                  Follow customer reels, event activations, and cafe showcase stories.
                </p>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cup-forest hover:text-cup-emerald pt-1"
                >
                  <span>Visit Instagram Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cup-gold" />
                </a>
              </div>
            </div>

            {/* Trust and Safety */}
            <div className="bg-cup-cream p-5 rounded-2xl border border-cup-gold/20 text-xs text-cup-forest/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cup-forest">
                <ShieldCheck className="w-4 h-4 text-cup-emerald" />
                <span>{BRAND.fssaiStatus}</span>
              </div>
              <p className="text-[11px] text-cup-forest/70">
                Founder: <strong>{BRAND.founder}</strong> • Pure Vegetarian • Delivery all over India.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border-2 border-cup-gold/40 shadow-luxury">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold text-cup-emerald uppercase tracking-wider">
                Send a Message
              </span>
              <h3 className="font-serif font-bold text-2xl text-cup-forest">
                Leave a Note for Our Team
              </h3>
              <p className="text-xs text-cup-forest/70">
                We respond to all verified customer inquiries within 2 hours during business operations.
              </p>
            </div>

            {submitted ? (
              <div className="bg-cup-ivory p-8 rounded-2xl border-2 border-emerald-500/50 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-cup-forest">
                  Message Sent!
                </h4>
                <p className="text-xs text-cup-forest/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactData.name}</strong>. Opening WhatsApp to ensure immediate response from our team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Varun Khera"
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98181 92575"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <select
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                  >
                    <option>Wholesale Order Inquiry (Cafes / Restaurants)</option>
                    <option>Sample Box Request</option>
                    <option>Event or Wedding Catering</option>
                    <option>Distributor / Franchise Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help your business today?"
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-cup-forest hover:bg-cup-emerald text-cup-ivory font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2 border border-cup-gold/30"
                  >
                    <Send className="w-4 h-4 text-cup-gold" />
                    <span>Send Message & Launch WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

