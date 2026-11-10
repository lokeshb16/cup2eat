"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { BRAND } from "@/data/brand";
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, Info } from "lucide-react";
import ProductDetailModal from "./ProductDetailModal";

interface ProductCardProps {
  product: Product;
  onExplore?: (product: Product) => void;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappMessage = `Hello CUP2EAT, I would like to order or enquire about the ${product.name} (${product.capacity}).`;

  return (
    <>
      <div className="group bg-cup-cream rounded-2xl overflow-hidden border border-cup-gold/30 hover:border-cup-gold transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex flex-col h-full">
        {/* Product Image Area */}
        <div className="relative h-64 w-full overflow-hidden bg-cup-sand/30 flex items-center justify-center p-2">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Capacity Badge */}
          <div className="absolute top-3 left-3 bg-cup-forest/90 backdrop-blur-md text-cup-ivory text-xs font-bold px-3 py-1 rounded-full border border-cup-gold/40 shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cup-gold"></span>
            {product.capacity}
          </div>

          {/* Pure Veg Green Dot */}
          <div className="absolute top-3 right-3 bg-white/95 p-1 rounded-md shadow-sm border border-emerald-600/30 flex items-center justify-center" title="100% Pure Vegetarian">
            <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center rounded-sm">
              <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
            </div>
          </div>

          {/* Category Pill */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-cup-forest text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-cup-gold/20">
            {product.flavour}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-serif font-bold text-xl text-cup-forest group-hover:text-cup-emerald transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-cup-goldDark font-semibold uppercase tracking-wider mt-0.5">
              {product.tagline}
            </p>
            <p className="text-xs text-cup-forest/75 mt-2.5 leading-relaxed line-clamp-3">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Highlight Pill */}
          <div className="bg-cup-ivory p-3 rounded-xl border border-cup-gold/25 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-cup-forest/60 font-semibold">
                Wholesale Rate
              </span>
              {product.pricing.isConfirmed ? (
                <span className="text-xs font-bold text-cup-forest bg-cup-gold/20 px-2 py-0.5 rounded">
                  ₹{product.pricing.amount.toLocaleString("en-IN")}
                  <span className="text-[10px] text-cup-forest/70 font-normal"> / {product.pricing.pieces} pcs</span>
                </span>
              ) : (
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  ₹{product.pricing.amount.toLocaleString("en-IN")} – ₹{product.pricing.amountMax?.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <p className="text-[10px] text-cup-forest/60 truncate">
              {product.pricing.note}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full text-center bg-white hover:bg-cup-ivory text-cup-forest text-xs font-semibold py-2.5 px-3 rounded-xl border border-cup-gold/30 hover:border-cup-gold transition flex items-center justify-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5 text-cup-emerald" />
              <span>Explore</span>
            </button>

            <a
              href={BRAND.whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-cup-forest hover:bg-cup-emerald text-cup-ivory text-xs font-semibold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-cup-gold" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ProductDetailModal
          product={product}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

