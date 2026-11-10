import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, MessageCircle, ShieldCheck, CheckCircle2, Heart, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/data/brand";
import { PRODUCTS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-cup-forest text-cup-ivory relative border-t-2 border-cup-gold/30 overflow-hidden">
      {/* Decorative luxury gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cup-emerald/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cup-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cup-gold shadow-lg">
                <Image
                  src="/images/cup2eat-logo.png"
                  alt="CUP2EAT Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-3xl tracking-wider text-cup-ivory block leading-none">
                  CUP<span className="text-cup-gold">2</span>EAT
                </span>
                <span className="text-xs uppercase tracking-widest text-cup-gold block mt-1 font-semibold">
                  Eat Your Drink!
                </span>
              </div>
            </div>

            <p className="text-cup-ivory/80 text-sm leading-relaxed max-w-md">
              &ldquo;{BRAND.philosophy}&rdquo; — CUP2EAT is revolutionizing beverage and dessert service across India with 100% edible, eco-friendly, and delicious biscuit cups. Say no to plastic; choose edible.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-cup-ivory/90 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-cup-emerald/60 px-3 py-1 rounded-full border border-cup-gold/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Pure Vegetarian
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cup-emerald/60 px-3 py-1 rounded-full border border-cup-gold/20">
                <ShieldCheck className="w-3.5 h-3.5 text-cup-gold" /> FSSAI Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cup-emerald/60 px-3 py-1 rounded-full border border-cup-gold/20">
                Pan-India Delivery
              </span>
            </div>

            <div className="text-xs text-cup-ivory/60">
              Founder: <strong className="text-cup-goldLight">{BRAND.founder}</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-cup-gold font-semibold tracking-wide">Explore</h4>
            <ul className="space-y-2.5 text-sm text-cup-ivory/80">
              <li>
                <Link href="/" className="hover:text-cup-gold transition flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cup-gold transition flex items-center gap-1">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cup-gold transition flex items-center gap-1">
                  About Us & Story
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-cup-gold transition flex items-center gap-1">
                  For Businesses & Cafes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cup-gold transition flex items-center gap-1">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-cup-gold font-semibold tracking-wide">Signature Cups</h4>
            <ul className="space-y-2.5 text-sm text-cup-ivory/80">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products#${prod.id}`}
                    className="hover:text-cup-gold transition block truncate"
                  >
                    {prod.name}
                    <span className="text-cup-gold/60 text-xs ml-1.5">({prod.capacity})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Orders */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-cup-gold font-semibold tracking-wide">Get In Touch</h4>
            <div className="space-y-3 text-sm text-cup-ivory/80">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-cup-gold transition group"
              >
                <div className="w-8 h-8 rounded-full bg-cup-emerald flex items-center justify-center border border-cup-gold/30 group-hover:border-cup-gold">
                  <Phone className="w-4 h-4 text-cup-gold" />
                </div>
                <span>{BRAND.phoneDisplay}</span>
              </a>

              <a
                href={BRAND.whatsappUrl("Hello CUP2EAT, I would like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-cup-gold transition group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center border border-emerald-500/40 group-hover:border-emerald-400">
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                </div>
                <span>Direct WhatsApp Chat</span>
              </a>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-cup-gold transition group"
              >
                <div className="w-8 h-8 rounded-full bg-cup-emerald flex items-center justify-center border border-cup-gold/30 group-hover:border-cup-gold">
                  <Instagram className="w-4 h-4 text-cup-gold" />
                </div>
                <span>{BRAND.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cup-gold/60" />
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/wholesale"
                className="inline-block w-full text-center bg-cup-gold hover:bg-cup-goldLight text-cup-forest font-semibold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition duration-300 shadow-md"
              >
                Request Wholesale Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-cup-ivory/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cup-ivory/60 gap-4">
          <p>© {new Date().getFullYear()} CUP2EAT. All rights reserved. &ldquo;Eat Your Drink!&rdquo;</p>
          <p className="flex items-center gap-1.5">
            Designed with excellence for sustainable food innovation <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}

