"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/data/brand";
import WholesaleCalculator from "@/components/WholesaleCalculator";
import ProofGalleryModal from "@/components/ProofGalleryModal";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Truck,
  MessageCircle,
  Building2,
  Store,
  PartyPopper,
  Send,
  Phone,
  Check,
  HelpCircle,
  Clock
} from "lucide-react";

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "Cafe / Coffee Shop",
    productInterest: "100ml Standard Edible Cups (Trio)",
    estimatedQuantity: "2 - 5 Packs (Wholesale)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and contact phone number.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);

    // Prepare WhatsApp fallback message
    const formattedMsg = `*New Wholesale Inquiry - CUP2EAT*\n\n*Name:* ${formData.fullName}\n*Business:* ${formData.businessName || "N/A"}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || "N/A"}\n*Business Type:* ${formData.businessType}\n*Product:* ${formData.productInterest}\n*Estimated Quantity:* ${formData.estimatedQuantity}\n*Message:* ${formData.message || "Please share wholesale catalog and terms."}`;

    // Open WhatsApp in new tab with prefilled inquiry
    setTimeout(() => {
      window.open(BRAND.whatsappUrl(formattedMsg), "_blank");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-cup-ivory">
      {/* Hero Header */}
      <section className="bg-cup-forest text-cup-ivory py-16 sm:py-24 border-b border-cup-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cup-emerald/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cup-gold font-bold bg-cup-emerald/60 px-4 py-1.5 rounded-full border border-cup-gold/30">
            <Building2 className="w-3.5 h-3.5" /> B2B & Wholesale Partnerships
          </span>

          <h1 className="font-serif font-black text-4xl sm:text-6xl text-cup-ivory tracking-tight">
            LET&apos;S MAKE YOUR NEXT <br />
            <span className="gold-text-gradient italic font-normal">
              SERVING UNFORGETTABLE.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-cup-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
            From independent artisanal cafes to 5-star hotel chains and national distributors, CUP2EAT provides high-margin edible tableware with pan-India delivery included.
          </p>

          <div className="pt-2">
            <ProofGalleryModal />
          </div>
        </div>
      </section>

      {/* Main Form & Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Partner + Wholesale Perks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-cup-emerald font-bold">
                Why Partner With CUP2EAT?
              </span>
              <h2 className="font-serif font-bold text-3xl text-cup-forest leading-tight">
                Stand Out in a Crowded F&B Market
              </h2>
              <p className="text-sm text-cup-forest/80 leading-relaxed font-light">
                Today&apos;s coffee and dessert customers crave sensory experiences and shareable moments. Serving your signature beverages in edible cups creates instant word-of-mouth buzz.
              </p>
            </div>

            {/* Perks Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Direct Doorstep Pan-India Delivery",
                  desc: "Delivery is included in all listed wholesale offers across all Indian states and pin codes.",
                  icon: Truck,
                },
                {
                  title: "Sample Kits for Cafe Testing",
                  desc: "Order an initial tasting and performance evaluation batch before committing to large volumes.",
                  icon: Sparkles,
                },
                {
                  title: "FSSAI Licensed & Hygiene Certified",
                  desc: "Completely food-safe for commercial hospitality service and pure vegetarian compliance.",
                  icon: ShieldCheck,
                },
                {
                  title: "Distributor & Regional Exclusivity",
                  desc: "Attractive tier margins and dedicated accounts for regional food service distributors.",
                  icon: Store,
                },
              ].map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-cup-gold/30 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cup-sageLight flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-cup-forest" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-cup-forest">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-cup-forest/70 mt-1 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Box */}
            <div className="bg-cup-forest text-cup-ivory p-6 rounded-2xl border border-cup-gold/30 space-y-3">
              <h4 className="font-serif font-bold text-base text-cup-goldLight">
                Need Fast Pricing or Custom Pack Sizes?
              </h4>
              <p className="text-xs text-cup-ivory/80">
                Call our founder Varun Khera directly for urgent restaurant opening requirements or high-volume contracts.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-cup-gold text-cup-forest font-bold text-xs uppercase px-4 py-2 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Wholesale Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border-2 border-cup-gold/40 shadow-luxury">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold text-cup-emerald uppercase tracking-wider">
                Direct Inquiry Flow
              </span>
              <h3 className="font-serif font-bold text-2xl text-cup-forest">
                Wholesale Partnership Application
              </h3>
              <p className="text-xs text-cup-forest/70">
                Fill in your details below. You will receive an instant confirmation and direct WhatsApp routing.
              </p>
            </div>

            {submitted ? (
              <div className="bg-cup-ivory p-8 rounded-2xl border-2 border-emerald-500/50 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-cup-forest">
                  Enquiry Received!
                </h4>
                <p className="text-xs text-cup-forest/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We have logged your enquiry for <strong>{formData.businessName || "your business"}</strong>. Opening WhatsApp now to connect you directly with our founding team...
                </p>
                <div className="pt-2">
                  <a
                    href={BRAND.whatsappUrl(`Hello CUP2EAT, following up on my wholesale inquiry for ${formData.businessName || formData.fullName}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-md hover:bg-emerald-700 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Chat Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="bg-red-50 text-red-700 p-3 rounded-xl border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Varun Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                      Business / Cafe Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Blue Artisan Cafe"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                      Phone Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. cafe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Type */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                    >
                      <option>Cafe / Coffee Shop</option>
                      <option>Restaurant / Bistro</option>
                      <option>Ice Cream & Dessert Parlour</option>
                      <option>Hotel / Resort</option>
                      <option>Caterer / Wedding Planner</option>
                      <option>Wholesale Food Distributor</option>
                      <option>Individual / Bulk Gift</option>
                    </select>
                  </div>

                  {/* Product Interested In */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                      Product Interested In
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                    >
                      <option>100ml Standard Edible Cups (Trio Flavours)</option>
                      <option>100ml Chocolate-Coated Edible Cups</option>
                      <option>150ml Cold Coffee & Shake Glasses</option>
                      <option>Mixed Assortment / Sample Kit</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Quantity */}
                <div className="space-y-1.5">
                  <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                  >
                    <option>Sample Box for Tasting & Heat Testing</option>
                    <option>1 Pack (Starter Wholesale Batch)</option>
                    <option>2 - 5 Packs (Active Cafe Monthly Usage)</option>
                    <option>6 - 20 Packs (High Volume Restaurant)</option>
                    <option>20+ Packs / Distributor Master Pallet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-bold text-cup-forest/80 uppercase tracking-wider">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your serving plans, beverage menu, or city location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cup-forest/20 focus:outline-none focus:ring-2 focus:ring-cup-emerald bg-cup-ivory/40"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-cup-forest hover:bg-cup-emerald text-cup-ivory font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2 border border-cup-gold/30"
                  >
                    <Send className="w-4 h-4 text-cup-gold" />
                    <span>Submit Wholesale Enquiry & Open WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-cup-forest/60 mt-2">
                    🔒 No spam. Fast reply guaranteed within 2 hours. Delivery included across India.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Wholesale Calculator embedded */}
        <div className="mt-20">
          <WholesaleCalculator />
        </div>
      </section>
    </div>
  );
}

