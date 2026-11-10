"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { BRAND } from "@/data/brand";
import ProductCard from "@/components/ProductCard";
import WholesaleCalculator from "@/components/WholesaleCalculator";
import ProofGalleryModal from "@/components/ProofGalleryModal";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Thermometer,
  Package,
  AlertCircle,
  Truck,
  MessageCircle,
  ArrowRight,
  Filter,
  Check
} from "lucide-react";

export default function ProductsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "100ml") return p.capacity === "100 ml";
    if (filter === "150ml") return p.capacity === "150 ml";
    if (filter === "specialty") return p.category === "specialty";
    return true;
  });

  return (
    <div className="min-h-screen bg-cup-ivory">
      {/* Page Header */}
      <section className="bg-cup-forest text-cup-ivory py-16 sm:py-24 border-b border-cup-gold/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cup-emerald/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cup-gold font-bold bg-cup-emerald/60 px-4 py-1 rounded-full border border-cup-gold/30">
            <Sparkles className="w-3.5 h-3.5" /> 100% Edible Product Range
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-cup-ivory tracking-tight">
            Our Handcrafted Edible Cups
          </h1>
          <p className="text-sm sm:text-base text-cup-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
            Engineered from premium wholesome grains to hold hot and cold beverages for 30+ minutes, then enjoyed as a delicious, crisp biscuit dessert.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <ProofGalleryModal />
          </div>
        </div>
      </section>

      {/* Main Catalogue Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-cup-gold/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-cup-forest uppercase tracking-wider">
            <Filter className="w-4 h-4 text-cup-emerald" />
            <span>Filter Catalogue:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Cups (5)" },
              { id: "100ml", label: "100 ml Cups" },
              { id: "150ml", label: "150 ml Cold & Shakes" },
              { id: "specialty", label: "Chocolate-Coated" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`text-xs px-4 py-2 rounded-full font-semibold transition ${
                  filter === btn.id
                    ? "bg-cup-forest text-cup-ivory shadow-md"
                    : "bg-white text-cup-forest/80 hover:bg-cup-cream border border-cup-gold/30"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Important Verified Specification Matrix */}
        <div className="mt-20 bg-white rounded-3xl p-6 sm:p-10 border border-cup-gold/30 shadow-luxury space-y-8">
          <div className="border-b border-cup-forest/10 pb-6 space-y-2">
            <span className="text-xs font-bold text-cup-emerald uppercase tracking-wider">
              Transparency & Business Verification
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cup-forest">
              Central Specifications & Wholesale Matrix
            </h3>
            <p className="text-xs sm:text-sm text-cup-forest/70">
              Clear distinction between verified business offers and rates requiring custom order confirmation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b-2 border-cup-gold/30 text-cup-forest font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Product Variant</th>
                  <th className="py-3 px-4">Capacity</th>
                  <th className="py-3 px-4">Packaging Type</th>
                  <th className="py-3 px-4">Wholesale Offer Shown</th>
                  <th className="py-3 px-4">Hold Time</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cup-forest/10 text-cup-forest/80">
                <tr className="hover:bg-cup-sand/10">
                  <td className="py-3.5 px-4 font-bold text-cup-forest">
                    Standard Edible Cups (Chocolate, Vanilla, Elaichi)
                  </td>
                  <td className="py-3.5 px-4 font-semibold">100 ml</td>
                  <td className="py-3.5 px-4">Bulk master pack (396 cups)</td>
                  <td className="py-3.5 px-4 font-bold text-cup-forest">₹3,999 for 396 cups (~₹10.10 / cup)</td>
                  <td className="py-3.5 px-4">30–45 mins</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">
                      <Check className="w-3 h-3" /> Confirmed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-cup-sand/10">
                  <td className="py-3.5 px-4 font-bold text-cup-forest">
                    Chocolate-Coated Edible Cups
                  </td>
                  <td className="py-3.5 px-4 font-semibold">100 ml</td>
                  <td className="py-3.5 px-4">Single pouch packing (200 pieces)</td>
                  <td className="py-3.5 px-4 font-bold text-cup-forest">₹4,499 for 200 pcs (₹22.50 / piece)</td>
                  <td className="py-3.5 px-4">40+ mins</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">
                      <Check className="w-3 h-3" /> Confirmed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-cup-sand/10">
                  <td className="py-3.5 px-4 font-bold text-cup-forest">
                    Cold Coffee & Shake Glasses
                  </td>
                  <td className="py-3.5 px-4 font-semibold">150 ml</td>
                  <td className="py-3.5 px-4">Reinforced corrugated carton</td>
                  <td className="py-3.5 px-4 font-bold text-amber-700">₹4,326 – ₹6,500 listed range</td>
                  <td className="py-3.5 px-4">45+ mins (chilled)</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold text-[10px]">
                      <AlertCircle className="w-3 h-3" /> Verify with Founder
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-cup-ivory p-4 rounded-xl border border-cup-gold/30 text-xs text-cup-forest/75 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-cup-gold shrink-0 mt-0.5" />
            <p>
              <strong>Wholesale Guarantee:</strong> Delivery is included all over India on verified wholesale bundles. To confirm custom bulk quotes or specific pack quantities for 150ml shake glasses, please contact our team directly.
            </p>
          </div>
        </div>

        {/* Wholesale Calculator Component */}
        <div className="mt-20">
          <WholesaleCalculator />
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-16 bg-cup-forest text-cup-ivory p-8 sm:p-12 rounded-3xl border-2 border-cup-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-cup-gold font-bold">
              Looking for Custom Branding or Event Packs?
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cup-ivory">
              Need a Custom Quantity or Starter Tasting Box?
            </h3>
            <p className="text-xs sm:text-sm text-cup-ivory/80 max-w-xl">
              We ship sample test kits to cafes, restaurants, caterers, and ice cream parlours so you can test heat retention and taste with your signature brews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/wholesale"
              className="text-center bg-cup-gold hover:bg-cup-goldLight text-cup-forest font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition shadow-md whitespace-nowrap"
            >
              Order Sample Box
            </Link>
            <a
              href={BRAND.whatsappUrl("Hello CUP2EAT, I would like to order a sample box to test at my cafe.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

