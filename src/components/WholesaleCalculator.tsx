"use client";

import { useState } from "react";
import { BRAND } from "@/data/brand";
import { Calculator, MessageCircle, Truck, Sparkles, CheckCircle2, TrendingUp, ShieldAlert } from "lucide-react";

interface Option {
  id: string;
  name: string;
  capacity: string;
  packSize: number;
  packPrice: number;
  unitPrice: number;
  flavours: string;
  isConfirmed: boolean;
}

const OPTIONS: Option[] = [
  {
    id: "standard-100ml",
    name: "Standard Edible Cups (100 ml)",
    capacity: "100 ml",
    packSize: 396,
    packPrice: 3999,
    unitPrice: 10.10,
    flavours: "Chocolate, Vanilla & Elaichi",
    isConfirmed: true,
  },
  {
    id: "coated-100ml",
    name: "Chocolate-Coated Cups (100 ml)",
    capacity: "100 ml",
    packSize: 200,
    packPrice: 4499,
    unitPrice: 22.50,
    flavours: "Chocolate Glazed (Single Pouch Packing)",
    isConfirmed: true,
  },
  {
    id: "shake-150ml",
    name: "Cold Coffee & Shake Glasses (150 ml)",
    capacity: "150 ml",
    packSize: 150,
    packPrice: 4950, // median indicative rate within 4326-6500 range
    unitPrice: 33.00,
    flavours: "Reinforced Waffle Cookie Glass",
    isConfirmed: false,
  },
];

export default function WholesaleCalculator() {
  const [selectedOptionId, setSelectedOptionId] = useState<string>("standard-100ml");
  const [packQuantity, setPackQuantity] = useState<number>(2);

  const selectedOption = OPTIONS.find((o) => o.id === selectedOptionId) || OPTIONS[0];

  const totalCups = selectedOption.packSize * packQuantity;
  const totalPrice = selectedOption.packPrice * packQuantity;
  const plasticSaved = totalCups;

  const whatsappMessage = `Hello CUP2EAT! I calculated a wholesale order on your website:\n- Product: ${selectedOption.name}\n- Quantity: ${packQuantity} pack(s) (${totalCups} cups)\n- Total Amount: ₹${totalPrice.toLocaleString("en-IN")}\n- Delivery: Pan-India\nPlease confirm availability and payment details.`;

  return (
    <div className="bg-cup-ivory rounded-3xl p-6 sm:p-10 border-2 border-cup-gold/40 shadow-luxury">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-cup-gold/20">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cup-emerald uppercase tracking-wider bg-cup-sageLight px-3 py-1 rounded-full mb-2">
            <Calculator className="w-3.5 h-3.5 text-cup-emerald" /> Interactive B2B Estimator
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cup-forest">
            Wholesale Order & Impact Calculator
          </h3>
          <p className="text-xs sm:text-sm text-cup-forest/70 mt-1">
            Calculate your batch volume, cost per serving, and plastic cups eliminated.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-cup-forest bg-cup-sand/30 px-3.5 py-2 rounded-xl border border-cup-gold/20">
          <Truck className="w-4 h-4 text-cup-gold" />
          <span>Delivery Included Across India</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Options Selection */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cup-forest/70 mb-3">
              1. Select Cup Variant
            </label>
            <div className="space-y-3">
              {OPTIONS.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOptionId(opt.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    selectedOptionId === opt.id
                      ? "border-cup-gold bg-white shadow-md"
                      : "border-cup-gold/20 bg-cup-cream/60 hover:bg-white"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-cup-forest">
                        {opt.name}
                      </span>
                      {opt.isConfirmed ? (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                          Confirmed
                        </span>
                      ) : (
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                          Pending confirmation
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-cup-forest/70">{opt.flavours}</p>
                    <p className="text-xs text-cup-goldDark font-semibold">
                      Pack of {opt.packSize} cups @ ₹{opt.packPrice.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-bold text-cup-forest block">
                      ~₹{opt.unitPrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-cup-forest/60">per cup</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-cup-forest/70">
                2. Number of Wholesale Packs
              </label>
              <span className="text-sm font-bold text-cup-forest bg-cup-gold/20 px-3 py-1 rounded-full">
                {packQuantity} {packQuantity === 1 ? "Pack" : "Packs"} ({totalCups} Cups)
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              value={packQuantity}
              onChange={(e) => setPackQuantity(parseInt(e.target.value) || 1)}
              className="w-full accent-cup-emerald h-2 bg-cup-sand/50 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-cup-forest/60 mt-1 font-medium">
              <span>1 pack ({selectedOption.packSize} cups)</span>
              <span>5 packs</span>
              <span>10 packs</span>
              <span>20 packs ({selectedOption.packSize * 20} cups)</span>
            </div>
          </div>
        </div>

        {/* Right Summary Card */}
        <div className="lg:col-span-5 bg-cup-forest text-cup-ivory p-6 sm:p-8 rounded-2xl border-2 border-cup-gold/40 shadow-xl space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-cup-gold font-bold">
              Order Summary
            </span>
            <h4 className="font-serif font-bold text-2xl text-cup-ivory mt-1">
              Estimated Total
            </h4>
          </div>

          <div className="space-y-3 border-y border-cup-ivory/15 py-4 text-xs">
            <div className="flex justify-between items-center text-cup-ivory/80">
              <span>Selected Option</span>
              <span className="font-semibold text-cup-ivory">{selectedOption.capacity} ({selectedOption.packSize} pcs/pack)</span>
            </div>
            <div className="flex justify-between items-center text-cup-ivory/80">
              <span>Quantity</span>
              <span className="font-semibold text-cup-ivory">{packQuantity} pack(s) = {totalCups} cups</span>
            </div>
            <div className="flex justify-between items-center text-cup-ivory/80">
              <span>Unit Rate</span>
              <span className="font-semibold text-cup-goldLight">~₹{selectedOption.unitPrice.toFixed(2)} / cup</span>
            </div>
            <div className="flex justify-between items-center text-cup-ivory/80">
              <span>Pan-India Shipping</span>
              <span className="font-bold text-emerald-400">FREE / INCLUDED</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-cup-gold uppercase tracking-wider font-semibold">Total Price</div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-cup-goldLight mt-1">
              ₹{totalPrice.toLocaleString("en-IN")}
            </div>
            <p className="text-[11px] text-cup-ivory/70 mt-1">
              All prices include door delivery across all Indian states.
            </p>
          </div>

          {/* Environmental Impact Counter */}
          <div className="bg-cup-emerald/60 p-3 rounded-xl border border-cup-gold/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cup-forest flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-cup-gold" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-cup-goldLight block">
                {plasticSaved.toLocaleString("en-IN")} Plastic/Wax Cups Saved!
              </span>
              <span className="text-cup-ivory/70 text-[11px]">
                Zero single-use landfill waste generated.
              </span>
            </div>
          </div>

          {/* Order Action */}
          <div className="space-y-2">
            <a
              href={BRAND.whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Order This Batch on WhatsApp</span>
            </a>
            <p className="text-[10px] text-center text-cup-ivory/60">
              Fast dispatch • Direct founder support • Invoice available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

