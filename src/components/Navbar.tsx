"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { BRAND } from "@/data/brand";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Sustainability", href: "/#sustainability" },
  { name: "For Businesses", href: "/wholesale" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-cup-forest text-cup-ivory text-xs py-2 px-4 border-b border-cup-gold/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-cup-goldLight">
            <span className="inline-block w-2 h-2 rounded-full bg-cup-gold animate-pulse"></span>
            <span className="font-medium tracking-wide">Pan-India Delivery Included on Wholesale Orders</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-xs text-cup-ivory/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              100% Pure Vegetarian & FSSAI Registered
            </span>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="hover:text-cup-gold transition flex items-center gap-1 font-medium text-cup-ivory"
            >
              <Phone className="w-3 h-3 text-cup-gold" /> {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cup-cream/95 backdrop-blur-md shadow-luxury py-3 border-b border-cup-gold/20"
            : "bg-cup-cream py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cup-gold shadow-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/cup2eat-logo.png"
                  alt="CUP2EAT Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-wider text-cup-forest block leading-none">
                  CUP<span className="text-cup-gold font-normal">2</span>EAT
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-cup-emerald/80 block mt-0.5">
                  Eat Your Drink!
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors tracking-wide relative py-1 ${
                      isActive
                        ? "text-cup-forest font-semibold"
                        : "text-cup-forest/80 hover:text-cup-emerald"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cup-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={BRAND.whatsappUrl("Hello CUP2EAT! I would like to inquire about edible cups for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-cup-forest hover:text-cup-emerald px-3 py-2 rounded-full hover:bg-cup-forest/5 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/wholesale"
                className="inline-flex items-center gap-2 bg-cup-forest hover:bg-cup-emerald text-cup-ivory text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-cup-gold/30 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-cup-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-cup-forest hover:bg-cup-forest/5 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cup-ivory border-b border-cup-gold/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-cup-forest/10 flex items-center justify-between ${
                    pathname === link.href ? "text-cup-forest font-bold" : "text-cup-forest/80"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-cup-gold" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/wholesale"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-cup-forest text-cup-ivory font-semibold text-sm py-3 rounded-xl border border-cup-gold/40 shadow-md"
              >
                Get Wholesale Quote
              </Link>
              <a
                href={BRAND.whatsappUrl("Hello CUP2EAT, I would like to inquire about edible cups.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Quick Enquiry
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="text-center text-xs text-cup-forest font-semibold py-1 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-cup-gold" /> Call Founder: {BRAND.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

