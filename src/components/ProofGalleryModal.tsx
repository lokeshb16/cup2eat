"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, ShieldCheck, Award } from "lucide-react";
import { BRAND } from "@/data/brand";

const PROOF_ITEMS = [
  {
    title: "100ml Trio Offer (Chocolate, Vanilla & Elaichi)",
    description: "Official wholesale offer: ₹3,999 for 396 cups with delivery included all over India.",
    src: "/images/ref-wholesale-trio-offer.jpg",
  },
  {
    title: "100% Edible Chocolate-Coated Cups",
    description: "Official promotional offer: ₹4,499 for 200 pcs single pouch packing, FSSAI licensed.",
    src: "/images/ref-chocolate-coated-offer.jpg",
  },
  {
    title: "150ml Cold Coffee & Shake Glasses",
    description: "Official announcement for 150ml cold coffee and shake glasses.",
    src: "/images/ref-cold-coffee-offer.jpg",
  },
  {
    title: "Official Brand Rollup Standee",
    description: "Brand values: 100% Edible, Pure Veg, Vegan Friendly, Greener Planet. @cup2eat.",
    src: "/images/ref-standee.jpg",
  },
  {
    title: "Official CUP2EAT Instagram Profile",
    description: "Varun Khera (Founder) • Zero Waste • Threads @cup2eat • Delhi, India.",
    src: "/images/ref-insta-profile.jpg",
  },
];

export default function ProofGalleryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-cup-goldDark hover:text-cup-forest bg-cup-sand/30 hover:bg-cup-sand/50 px-3.5 py-1.5 rounded-full border border-cup-gold/30 transition shadow-sm"
      >
        <Award className="w-3.5 h-3.5 text-cup-gold" />
        <span>View Verified Brand Releases & FSSAI Badges</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-cup-ivory rounded-3xl shadow-2xl border-2 border-cup-gold/40 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-5 bg-cup-forest text-cup-ivory flex items-center justify-between border-b border-cup-gold/30">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cup-gold" />
                <h3 className="font-serif font-bold text-lg text-cup-ivory">
                  Official Brand Assets & Verified Releases
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-cup-emerald text-cup-ivory transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Main Showcase Item */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white p-4 rounded-2xl border border-cup-gold/25 shadow-sm">
                <div className="md:col-span-7 relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black/5 flex items-center justify-center">
                  <Image
                    src={PROOF_ITEMS[activeIdx].src}
                    alt={PROOF_ITEMS[activeIdx].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="md:col-span-5 space-y-3">
                  <span className="text-[11px] font-bold text-cup-emerald uppercase tracking-wider bg-cup-sageLight px-2.5 py-0.5 rounded-full">
                    Release Document {activeIdx + 1} of {PROOF_ITEMS.length}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-cup-forest">
                    {PROOF_ITEMS[activeIdx].title}
                  </h4>
                  <p className="text-xs text-cup-forest/80 leading-relaxed">
                    {PROOF_ITEMS[activeIdx].description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={BRAND.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cup-forest font-semibold hover:text-cup-emerald"
                    >
                      <span>Check on Instagram @cup2eat</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cup-gold" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-5 gap-2 sm:gap-4">
                {PROOF_ITEMS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition ${
                      activeIdx === idx
                        ? "border-cup-gold scale-95 shadow-md"
                        : "border-cup-gold/20 hover:border-cup-gold/50 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-cup-cream border-t border-cup-gold/20 text-center text-xs text-cup-forest/70">
              Founder: <strong>{BRAND.founder}</strong> • FSSAI Registered • Order Hotline: <strong>{BRAND.phoneDisplay}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

