"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { BRAND } from "@/data/brand";

const PRESET_MESSAGES = [
  "Hi! I run a cafe/restaurant and want wholesale pricing for CUP2EAT edible cups.",
  "Hello, I would like to order a sample box of CUP2EAT cups.",
  "Hi, what are the available flavours and delivery options?",
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const handleSend = (text: string) => {
    const url = BRAND.whatsappUrl(text || "Hello CUP2EAT team, I would like to inquire about edible cups.");
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-6 z-40">
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-cup-ivory rounded-2xl shadow-2xl border-2 border-cup-gold/40 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-cup-forest text-cup-ivory p-4 flex items-center justify-between border-b border-cup-gold/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-cup-forest rounded-full"></span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-cup-goldLight">CUP2EAT Support</h4>
                <p className="text-[11px] text-cup-ivory/80">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cup-ivory/70 hover:text-white p-1 rounded-full hover:bg-cup-forest/50 transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-cup-cream/60 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-cup-gold/20 text-xs text-cup-forest shadow-sm">
              <p className="font-medium">
                👋 Hello! Looking to bring edible cups to your cafe, event, or menu?
              </p>
              <p className="text-cup-forest/70 mt-1">
                Tap a quick topic below or type your enquiry:
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              {PRESET_MESSAGES.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left text-xs bg-white hover:bg-cup-sageLight/50 text-cup-forest p-2.5 rounded-lg border border-cup-gold/25 transition flex items-center justify-between group"
                >
                  <span className="line-clamp-2">{msg}</span>
                  <Send className="w-3.5 h-3.5 text-cup-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(customMsg)}
                className="flex-1 text-xs px-3 py-2.5 rounded-lg border border-cup-gold/30 bg-white text-cup-forest focus:outline-none focus:ring-2 focus:ring-cup-emerald"
              />
              <button
                onClick={() => handleSend(customMsg)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg transition"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-5 rounded-full shadow-2xl hover:shadow-emerald-600/40 border-2 border-cup-gold transition-all duration-300 hover:scale-105 group"
        aria-label="Open WhatsApp conversation"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cup-gold rounded-full animate-ping"></span>
        </div>
        <span className="text-xs uppercase tracking-wider hidden sm:inline-block font-bold">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
}

