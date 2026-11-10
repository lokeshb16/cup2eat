import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { BRAND } from "@/data/brand";
import ProductCard from "@/components/ProductCard";
import WholesaleCalculator from "@/components/WholesaleCalculator";
import ProofGalleryModal from "@/components/ProofGalleryModal";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Coffee,
  Heart,
  Truck,
  MessageCircle,
  Clock,
  Award,
  ChevronRight,
  Store,
  Building2,
  PartyPopper,
  Flame,
  HelpCircle
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ========================================================
          1. HERO SECTION — CINEMATIC PREMIUM BRAND EXPERIENCE
         ======================================================== */}
      <section className="relative min-h-[90vh] bg-cup-cream flex items-center overflow-hidden border-b border-cup-gold/30">
        {/* Subtle background ambient lights */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-cup-sage/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cup-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cup-forest text-cup-ivory px-4 py-1.5 rounded-full border border-cup-gold/40 shadow-sm">
                <Sparkles className="w-4 h-4 text-cup-gold animate-spin" style={{ animationDuration: "6s" }} />
                <span className="text-xs uppercase tracking-widest font-semibold text-cup-goldLight">
                  The Sustainable Food Revolution
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="font-serif font-black text-4xl sm:text-6xl xl:text-7xl text-cup-forest leading-[1.08] tracking-tight">
                  WHY JUST DRINK IT,
                  <br />
                  <span className="gold-text-gradient italic font-normal block sm:inline">
                    WHEN YOU CAN EAT IT?
                  </span>
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-xl text-cup-forest/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Meet the cup that makes every sip a little more sustainable. Delicious, innovative, and completely edible biscuit cups crafted for coffee, tea, cold shakes, and desserts.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cup-forest hover:bg-cup-emerald text-cup-ivory px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider shadow-luxury hover:shadow-luxury-hover border border-cup-gold/40 transition-all duration-300 group"
                >
                  <span>Explore Our Cups</span>
                  <ArrowRight className="w-4 h-4 text-cup-gold transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/wholesale"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cup-ivory hover:bg-white text-cup-forest px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider border-2 border-cup-gold/50 hover:border-cup-gold shadow-sm transition-all duration-300"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-4 border-t border-cup-forest/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-cup-forest/75">
                <span className="flex items-center gap-1.5 font-medium">
                  <div className="w-3 h-3 border border-emerald-600 flex items-center justify-center rounded-xs">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  </div>
                  100% Pure Veg
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-cup-emerald" />
                  30+ Mins Leak-Proof
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-3.5 h-3.5 text-cup-goldDark" />
                  All-India Free Shipping
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-cup-forest" />
                  FSSAI Licensed
                </span>
              </div>
            </div>

            {/* Right Visual Hero */}
            <div className="lg:col-span-5 relative">
              {/* Luxury Frame Container */}
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Gold Rim Card */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-cup-gold/50 shadow-2xl bg-white p-2">
                  <div className="relative h-80 sm:h-96 md:h-[460px] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/cup-chocolate-coated-marble.jpg"
                      alt="CUP2EAT Edible Cups on Marble Slab"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Highlight Card on Hero Image */}
                  <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-cup-forest text-cup-ivory p-4 rounded-2xl border border-cup-gold/40 shadow-xl max-w-[240px] hidden sm:block animate-in slide-in-from-bottom duration-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[10px] uppercase tracking-widest text-cup-gold font-bold">
                        Zero Waste Innovation
                      </span>
                    </div>
                    <p className="text-xs font-serif italic text-cup-ivory/90">
                      &ldquo;Drink your beverage, eat your cup — zero plastic in the bin.&rdquo;
                    </p>
                  </div>

                  {/* Floating Price Tag */}
                  <div className="absolute top-6 right-6 bg-cup-gold text-cup-forest px-4 py-2 rounded-xl shadow-lg border border-white font-bold text-xs uppercase tracking-wider">
                    From ₹10.10 / cup
                  </div>
                </div>

                {/* Proof release button below image */}
                <div className="mt-4 text-center">
                  <ProofGalleryModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BRAND INTRODUCTION — "Not Just a Cup. It's an Experience."
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-cup-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual side */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-cup-gold/30 shadow-luxury bg-cup-sand/20">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/trio-cups-wood.jpg"
                    alt="Three flavours of CUP2EAT edible cups"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-cup-forest text-cup-ivory flex items-center justify-between text-xs">
                  <span className="font-serif italic text-cup-gold">Available in Chocolate, Vanilla & Elaichi</span>
                  <span className="bg-cup-emerald px-2 py-0.5 rounded text-[10px] font-bold">100 ml Capacity</span>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-cup-goldDark text-xs uppercase tracking-widest font-bold">
                <span className="w-8 h-px bg-cup-gold"></span>
                <span>The Brand Philosophy</span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-forest leading-tight">
                Not Just a Cup. <br />
                <span className="italic font-normal text-cup-emerald">
                  It&apos;s an Unforgettable Experience.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-cup-forest/80 leading-relaxed font-light">
                Every year, billions of single-use paper cups lined with non-recyclable plastic end up in Indian landfills after just five minutes of use.
              </p>

              <blockquote className="border-l-4 border-cup-gold pl-4 py-2 italic text-lg sm:text-xl font-serif text-cup-forest">
                &ldquo;{BRAND.philosophy}&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-cup-forest/80 leading-relaxed">
                Founded by <strong>{BRAND.founder}</strong>, <strong>CUP2EAT</strong> was born from a simple yet revolutionary question: Why discard a cup when it could be the tastiest part of your drink? Our edible cups are baked with wholesome ingredients, creating a delightfully crisp wafer that holds piping hot tea, artisan coffee, or ice-cold shakes for over 30 minutes without leaking or getting soggy.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cup-forest hover:text-cup-emerald bg-white px-5 py-3 rounded-xl border border-cup-gold/30 hover:border-cup-gold transition shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cup-gold" />
                </Link>
                <Link
                  href="/wholesale"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cup-ivory bg-cup-forest hover:bg-cup-emerald px-5 py-3 rounded-xl transition shadow-sm"
                >
                  <span>Request Samples for Cafes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. HOW IT WORKS — ELEGANT 4-STEP SENSORY JOURNEY
         ======================================================== */}
      <section className="py-20 bg-cup-forest text-cup-ivory relative overflow-hidden border-y border-cup-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-cup-gold font-bold">
              The Ritual
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-ivory">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-cup-ivory/70">
              Transforming ordinary beverage consumption into a four-step delight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Beverage",
                desc: "Pick your favourite hot espresso, spiced masala chai, iced frappe, or gelato sundae.",
                icon: Coffee,
              },
              {
                step: "02",
                title: "Pour into Cup",
                desc: "Pour directly into a CUP2EAT edible cup. Baked to safely hold hot liquids up to 85°C.",
                icon: Flame,
              },
              {
                step: "03",
                title: "Enjoy Your Drink",
                desc: "Sip comfortably. The cup stays crisp and leak-proof for 30 to 45 minutes of relaxed enjoyment.",
                icon: Heart,
              },
              {
                step: "04",
                title: "Eat the Cup Too!",
                desc: "Finish your drink and crunch down on a delicious, oven-baked biscuit dessert. Zero trash left!",
                icon: Sparkles,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-cup-emerald/40 rounded-2xl p-6 sm:p-8 border border-cup-gold/25 relative group hover:border-cup-gold transition duration-300 flex flex-col justify-between"
                >
                  <span className="font-serif font-bold text-4xl text-cup-gold/40 group-hover:text-cup-gold transition">
                    {item.step}
                  </span>
                  <div className="my-6">
                    <div className="w-12 h-12 rounded-xl bg-cup-forest border border-cup-gold/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cup-gold" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-cup-ivory mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cup-ivory/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full h-1 bg-cup-gold/20 rounded-full overflow-hidden">
                    <div className="h-full bg-cup-gold w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PRODUCT SHOWCASE — ALL 5 SIGNATURE CUPS
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-cup-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-cup-emerald text-xs uppercase tracking-widest font-bold">
                <span className="w-8 h-px bg-cup-emerald"></span>
                <span>Handcrafted Menu</span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-forest">
                Our Signature Edible Cups
              </h2>
              <p className="text-sm sm:text-base text-cup-forest/70 max-w-xl">
                Every cup is pure vegetarian, delicious, and rigorously tested for heat and liquid retention.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-cup-forest hover:text-cup-emerald py-2 border-b-2 border-cup-gold"
            >
              <span>View Detailed Catalogue</span>
              <ArrowRight className="w-4 h-4 text-cup-gold" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Special note on pricing and central data */}
          <div className="mt-12 bg-cup-ivory p-6 rounded-2xl border border-cup-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cup-forest/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cup-sand/50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-cup-forest" />
              </div>
              <p>
                <strong>Central Data Guarantee:</strong> All wholesale pricing, offers, and specifications are centrally updated and verified with brand management.
              </p>
            </div>
            <Link
              href="/wholesale"
              className="shrink-0 bg-cup-forest text-cup-ivory px-4 py-2 rounded-xl font-semibold text-xs hover:bg-cup-emerald transition"
            >
              Inquire Wholesale Terms
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHY CUP2EAT? — PREMIUM FEATURE PILLARS
         ======================================================== */}
      <section className="py-20 bg-cup-ivory border-t border-cup-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-cup-goldDark font-bold">
              The CUP2EAT Advantage
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-forest">
              Why Forward-Thinking Cafes Choose Us
            </h2>
            <p className="text-sm sm:text-base text-cup-forest/70">
              Designed to create viral customer buzz while reducing your business&apos;s ecological footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Edible & Delicious",
                desc: "Baked with food-grade grains and real natural flavours. Crisp, crunchy, and a treat on its own.",
                icon: Sparkles,
                badge: "Taste First",
              },
              {
                title: "Eco-Friendly Alternative",
                desc: "Replaces traditional wax-coated paper and plastic disposable cups that take years to break down.",
                icon: Leaf,
                badge: "Zero Plastic",
              },
              {
                title: "Innovative Experience",
                desc: "Gives your customers a memorable talking point and Instagram-worthy experience they will share.",
                icon: Heart,
                badge: "Customer Delight",
              },
              {
                title: "Premium Food-Grade Quality",
                desc: "FSSAI registered, pure vegetarian, and produced under strict food safety hygiene protocols.",
                icon: ShieldCheck,
                badge: "FSSAI Licensed",
              },
              {
                title: "Ideal for Businesses",
                desc: "Perfect for cafes, restaurants, gelato bars, caterers, and luxury events with scalable bulk packs.",
                icon: Store,
                badge: "B2B Ready",
              },
              {
                title: "Sustainable Serving Concept",
                desc: "Delivered directly across all pin codes in India with dedicated founder service and fast support.",
                icon: Truck,
                badge: "Pan-India",
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-cup-gold/30 hover:border-cup-gold transition shadow-sm hover:shadow-luxury flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-cup-sageLight flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cup-forest" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold bg-cup-sand/30 text-cup-forest px-2.5 py-1 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-cup-forest">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. INTERACTIVE WHOLESALE CALCULATOR SECTION
         ======================================================== */}
      <section className="py-20 bg-cup-creamWarm border-t border-cup-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WholesaleCalculator />
        </div>
      </section>

      {/* ========================================================
          7. BUSINESS & WHOLESALE PARTNERSHIP SECTION
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-cup-forest text-cup-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-cup-gold font-bold">
                B2B Opportunities
              </span>

              <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-ivory leading-tight">
                Your Business Deserves a <br />
                <span className="text-cup-goldLight italic font-normal">
                  Better Way to Serve.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-cup-ivory/80 leading-relaxed font-light">
                Upgrade your serving experience with edible cups that make your brand memorable. Whether you run a bustling cafe, an artisanal ice cream parlour, a 5-star hotel, or a high-end wedding catering business, CUP2EAT sets you apart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Cafes & Coffee Bars",
                    desc: "Feature 'Drink & Eat' signature espresso and cappuccino on your menu at premium margins.",
                  },
                  {
                    title: "Ice Cream & Parlours",
                    desc: "Eliminate plastic cups for sundae scoops and thick shakes with our 150ml edible glasses.",
                  },
                  {
                    title: "Hotels & Restaurants",
                    desc: "Elevate your welcome drinks, dessert shooters, and banquets with luxury novelty cups.",
                  },
                  {
                    title: "Event Organisers",
                    desc: "Host 100% zero-waste weddings, corporate galas, and exhibitions with edible tableware.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-cup-emerald/40 p-4 rounded-xl border border-cup-gold/20">
                    <h4 className="font-serif font-bold text-sm text-cup-goldLight">{item.title}</h4>
                    <p className="text-xs text-cup-ivory/70 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/wholesale"
                  className="w-full sm:w-auto text-center bg-cup-gold hover:bg-cup-goldLight text-cup-forest font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition"
                >
                  Become a Business Partner
                </Link>

                <a
                  href={BRAND.whatsappUrl("Hello Varun, I run a business and want to partner with CUP2EAT.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with Founder
                </a>
              </div>
            </div>

            {/* Standee Showcase Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-cup-gold/40 shadow-2xl bg-cup-forest p-2">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ref-standee.jpg"
                    alt="CUP2EAT Rollup Standee"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center text-xs text-cup-goldLight">
                  CUP2EAT Exhibition Banner • FSSAI Licensed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. SUSTAINABILITY SECTION — "Small Cup. Big Change."
         ======================================================== */}
      <section id="sustainability" className="py-20 sm:py-28 bg-cup-ivory relative border-b border-cup-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-cup-emerald font-bold">
              Environmental Stewardship
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-forest leading-tight">
              Small Cup. Big Change.
            </h2>
            <p className="text-sm sm:text-base text-cup-forest/75 leading-relaxed font-light">
              Conventional disposable cups are lined with polyethylene plastic film, making them virtually impossible to recycle in standard municipal facilities. CUP2EAT offers an elegant answer: turn the container into delicious food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-cup-gold/30 space-y-3">
              <div className="w-12 h-12 rounded-full bg-cup-sageLight flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-lg text-cup-forest">Zero Landfill Residue</h3>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                When you eat your cup, 100% of the serving vessel is consumed as calories. There is literally nothing left to throw away.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cup-gold/30 space-y-3">
              <div className="w-12 h-12 rounded-full bg-cup-sageLight flex items-center justify-center">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-lg text-cup-forest">Pure Natural Grains</h3>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                Crafted from high-grade natural grain flours and vegetable extracts. Even if discarded, it breaks down naturally like any baked biscuit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cup-gold/30 space-y-3">
              <div className="w-12 h-12 rounded-full bg-cup-sageLight flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-lg text-cup-forest">Conscious Dining</h3>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                Empowering mindful consumers and green-certified hospitality brands to eliminate single-use plastics from everyday coffee routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. HOSPITALITY PARTNER SOCIAL PROOF (CLEARLY MARKED PLACEHOLDERS)
         ======================================================== */}
      <section className="py-20 bg-cup-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-cup-goldDark font-bold">
              Hospitality Spotlight
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-cup-forest">
              What Cafes & Partners Love About Edible Cups
            </h2>
            <p className="text-xs text-cup-forest/60">
              [Representative hospitality scenarios for illustrative and presentation purposes]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                concept: "Artisan Coffee Roasters",
                location: "Delhi NCR",
                quote:
                  "Introducing the Chocolate-Coated CUP2EAT for our mocha menu created an immediate viral storm on social media. Customers film themselves taking the first bite after drinking!",
                focus: "100ml Chocolate-Coated Cup",
              },
              {
                concept: "Heritage Tea & Chai Bar",
                location: "Mumbai",
                quote:
                  "The Elaichi flavoured cup is a game-changer for authentic cutting chai. The cardamom notes blend right into the tea, leaving a spiced biscuit treat at the end.",
                focus: "100ml Elaichi Cup",
              },
              {
                concept: "Gourmet Gelato & Sundae Parlour",
                location: "Bangalore",
                quote:
                  "We switched our single-use dessert cups to the 150ml shake cups. The crunch holds up against cold whipped cream and hot fudge toppings perfectly.",
                focus: "150ml Shake & Sundae Cup",
              },
            ].map((sample, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-cup-gold/30 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-cup-gold">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-xs sm:text-sm text-cup-forest/80 italic leading-relaxed">
                    &ldquo;{sample.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-cup-forest/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-serif font-bold text-cup-forest block">
                      {sample.concept}
                    </span>
                    <span className="text-cup-forest/60">{sample.location}</span>
                  </div>
                  <span className="bg-cup-sand/30 text-cup-forest font-semibold px-2.5 py-1 rounded-md text-[10px]">
                    {sample.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. FINAL HIGH-CONVERSION CTA BANNER
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-cup-forest text-cup-ivory relative overflow-hidden border-t-2 border-cup-gold/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cup-gold font-bold bg-cup-emerald/60 px-4 py-1.5 rounded-full border border-cup-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-cup-gold" /> Make Your Brand Memorable
          </span>

          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-cup-ivory leading-tight">
            READY TO MAKE EVERY SIP UNFORGETTABLE?
          </h2>

          <p className="text-base sm:text-xl text-cup-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
            Order a sample pack today or discuss customized bulk supply for your cafe, restaurant, or next event.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/wholesale"
              className="w-full sm:w-auto bg-cup-gold hover:bg-cup-goldLight text-cup-forest font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition"
            >
              Talk to Our Team
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto bg-cup-emerald hover:bg-cup-emeraldLight text-cup-ivory font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full border border-cup-gold/40 transition"
            >
              Explore Products
            </Link>

            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="w-full sm:w-auto text-center text-xs font-semibold text-cup-goldLight hover:text-white py-3 px-4 transition flex items-center justify-center gap-1.5"
            >
              <span>Or Call {BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

