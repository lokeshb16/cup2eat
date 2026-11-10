"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { BRAND } from "@/data/brand";
import { X, CheckCircle2, ShieldCheck, Thermometer, Clock, Package, AlertCircle, MessageCircle, ArrowRight } from "lucide-react";

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) {
  if (!isOpen) return null;

  const whatsappMessage = `Hello CUP2EAT, I would like to order or request a quote for ${product.name} (${product.capacity}). Quantity details:`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-cup-ivory rounded-3xl shadow-2xl border-2 border-cup-gold/40 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header with close button */}
        <div className="p-4 sm:p-6 bg-cup-forest text-cup-ivory flex items-center justify-between border-b border-cup-gold/30">
          <div>
            <span className="text-xs uppercase tracking-widest text-cup-gold font-semibold">
              Product Specifications
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-cup-ivory">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-cup-emerald text-cup-ivory/80 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image & Highlights */}
            <div className="space-y-4">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-cup-gold/30 bg-cup-sand/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-cup-forest/90 text-cup-ivory text-xs font-bold px-3 py-1 rounded-full border border-cup-gold/40">
                  {product.capacity}
                </div>
              </div>

              {/* Best Beverage Pairings */}
              <div className="bg-cup-cream p-4 rounded-xl border border-cup-gold/20">
                <h4 className="text-xs font-bold text-cup-forest uppercase tracking-wider mb-2">
                  Best Suited For
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.bestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-cup-forest px-2.5 py-1 rounded-md border border-cup-gold/25 font-medium"
                    >
                      ☕ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications & Pricing */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-cup-goldDark uppercase tracking-wider">
                  Tasting & Experience
                </span>
                <p className="text-sm text-cup-forest/80 mt-1 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Specs Table */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-cup-gold/25 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-cup-forest/10">
                  <span className="text-cup-forest/60 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-cup-emerald" /> Hold Time
                  </span>
                  <span className="font-semibold text-cup-forest">{product.specs.holdingTime}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-cup-forest/10">
                  <span className="text-cup-forest/60 flex items-center gap-1.5 font-medium">
                    <Thermometer className="w-3.5 h-3.5 text-cup-emerald" /> Temperature
                  </span>
                  <span className="font-semibold text-cup-forest">{product.specs.temperatureRange}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-cup-forest/10">
                  <span className="text-cup-forest/60 flex items-center gap-1.5 font-medium">
                    <Package className="w-3.5 h-3.5 text-cup-emerald" /> Packaging
                  </span>
                  <span className="font-semibold text-cup-forest text-right max-w-[180px]">{product.specs.packaging}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-cup-forest/60 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-cup-emerald" /> Shelf Life
                  </span>
                  <span className="font-semibold text-cup-forest">{product.specs.shelfLife}</span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="bg-cup-forest text-cup-ivory p-4 rounded-xl border border-cup-gold/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-cup-gold font-semibold">
                    Wholesale Offer
                  </span>
                  {product.pricing.isConfirmed ? (
                    <span className="text-xs bg-emerald-700 text-white font-bold px-2 py-0.5 rounded">
                      Confirmed Rate
                    </span>
                  ) : (
                    <span className="text-xs bg-amber-600 text-white font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Business Verification
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif font-bold text-cup-goldLight">
                    ₹{product.pricing.amount.toLocaleString("en-IN")}
                  </span>
                  {product.pricing.amountMax && (
                    <span className="text-sm text-cup-ivory/70">
                      – ₹{product.pricing.amountMax.toLocaleString("en-IN")}
                    </span>
                  )}
                  {product.pricing.isConfirmed && (
                    <span className="text-xs text-cup-ivory/80">
                      / {product.pricing.pieces} cups ({product.pricing.unitPrice})
                    </span>
                  )}
                </div>

                <p className="text-xs text-cup-ivory/80 leading-snug">
                  {product.pricing.note}
                </p>

                {product.pricing.confirmationNote && (
                  <p className="text-[11px] text-amber-200 bg-amber-900/40 p-2 rounded border border-amber-500/30">
                    ℹ️ {product.pricing.confirmationNote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-6 bg-cup-cream border-t border-cup-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/wholesale"
            onClick={onClose}
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-cup-forest text-cup-forest hover:bg-cup-forest hover:text-cup-ivory font-semibold text-xs uppercase tracking-wider transition"
          >
            Custom Bulk Order Form
          </Link>

          <a
            href={BRAND.whatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}

