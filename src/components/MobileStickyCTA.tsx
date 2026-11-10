"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { BRAND } from "@/data/brand";

export default function MobileStickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-cup-forest/95 backdrop-blur-md border-t border-cup-gold/30 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call */}
        <a
          href={`tel:${BRAND.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-cup-emerald/60 text-cup-ivory text-[11px] font-medium border border-cup-gold/20"
        >
          <Phone className="w-4 h-4 text-cup-gold mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={BRAND.whatsappUrl("Hello CUP2EAT, I would like to inquire about edible cups.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Wholesale Quote */}
        <Link
          href="/wholesale"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-cup-gold text-cup-forest text-[11px] font-bold shadow-sm"
        >
          <FileText className="w-4 h-4 text-cup-forest mb-0.5" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}

