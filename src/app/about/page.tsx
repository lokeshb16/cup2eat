import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/data/brand";
import ProofGalleryModal from "@/components/ProofGalleryModal";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Heart,
  Truck,
  ArrowRight,
  Coffee,
  Award,
  Flame,
  Clock
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cup-ivory">
      {/* Editorial Hero Header */}
      <section className="bg-cup-forest text-cup-ivory py-20 sm:py-28 relative overflow-hidden border-b border-cup-gold/30">
        <div className="absolute top-0 right-10 w-96 h-96 bg-cup-emerald/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cup-gold font-bold bg-cup-emerald/60 px-4 py-1.5 rounded-full border border-cup-gold/30">
            <Heart className="w-3.5 h-3.5" /> The CUP2EAT Purpose
          </span>

          <h1 className="font-serif font-black text-4xl sm:text-6xl text-cup-ivory leading-tight">
            We Believe Even the Little Things <br />
            <span className="italic font-normal text-cup-goldLight">Can Create Big Change.</span>
          </h1>

          <p className="text-base sm:text-xl text-cup-ivory/80 max-w-2xl mx-auto font-light leading-relaxed">
            Reimagining how India serves hot coffee, cutting chai, and chilled desserts — one delicious, zero-waste bite at a time.
          </p>

          <div className="pt-2">
            <ProofGalleryModal />
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-cup-gold/40 shadow-2xl bg-white p-2">
              <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/cup-banner-embossed.jpg"
                  alt="CUP2EAT Embossed Edible Cups"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-cup-forest text-cup-ivory text-center rounded-xl mt-2">
                <p className="font-serif italic text-xs text-cup-goldLight">
                  &ldquo;Eat Your Drink — Say no to plastic, choose edible.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-cup-goldDark text-xs uppercase tracking-widest font-bold">
              <span className="w-8 h-px bg-cup-gold"></span>
              <span>Why CUP2EAT Exists</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-cup-forest">
              The Edible Cup Concept
            </h2>

            <p className="text-base text-cup-forest/80 leading-relaxed font-light">
              Walk into almost any cafe, street chai stall, food truck, or party across India, and you will see the same recurring scene: thousands of disposable paper cups discarded after just a few minutes. While marketed as &ldquo;paper,&rdquo; these cups are lined with a hidden thin polymer plastic film that renders them resistant to normal recycling.
            </p>

            <p className="text-base text-cup-forest/80 leading-relaxed font-light">
              Founder <strong>{BRAND.founder}</strong> envisioned an audacious alternative: What if the cup wasn&apos;t trash at all? What if it was a high-quality, delicious biscuit treat that naturally pairs with the drink inside?
            </p>

            <blockquote className="border-l-4 border-cup-gold pl-5 py-3 bg-cup-cream rounded-r-2xl text-cup-forest font-serif italic text-lg leading-relaxed">
              &ldquo;{BRAND.philosophy}&rdquo;
            </blockquote>

            <p className="text-sm text-cup-forest/80 leading-relaxed">
              That founding spark created <strong>CUP2EAT</strong> — an innovative brand crafting 100% edible, pure vegetarian wafer cups in irresistible flavours like roasted Chocolate, floral Vanilla, and fragrant green Elaichi (cardamom), as well as decadent chocolate-coated specialty cups and 150ml shake glasses.
            </p>
          </div>
        </div>
      </section>

      {/* The Science & Craft Section */}
      <section className="py-20 bg-cup-creamWarm border-y border-cup-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-cup-emerald font-bold">
              Culinary Engineering
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-cup-forest">
              How Can a Biscuit Hold Hot Coffee?
            </h2>
            <p className="text-sm sm:text-base text-cup-forest/75 leading-relaxed font-light">
              The secret lies in specialized high-density baking geometry and natural food-grade thermal barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-cup-gold/30 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cup-forest flex items-center justify-center">
                <Clock className="w-6 h-6 text-cup-gold" />
              </div>
              <h3 className="font-serif font-bold text-xl text-cup-forest">
                30–45 Mins Thermal Integrity
              </h3>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                Engineered with high-temperature resistance to comfortably withstand boiling hot beverages up to 85°C without melting, dissolving, or getting soggy before you are finished.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cup-gold/30 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cup-forest flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-cup-gold" />
              </div>
              <h3 className="font-serif font-bold text-xl text-cup-forest">
                100% Pure Vegetarian & Clean
              </h3>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                Made strictly with pure vegetarian food ingredients. Zero gelatin, zero animal derivatives, and verified vegan-friendly options for conscious diners and cafes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cup-gold/30 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cup-forest flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-cup-gold" />
              </div>
              <h3 className="font-serif font-bold text-xl text-cup-forest">
                FSSAI Licensed & Food-Safe
              </h3>
              <p className="text-xs sm:text-sm text-cup-forest/75 leading-relaxed">
                Officially licensed by the Food Safety and Standards Authority of India (FSSAI) for both wholesale distribution and retail supply nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight & Brand Values */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cup-forest text-cup-ivory rounded-3xl p-8 sm:p-14 border-2 border-cup-gold/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-widest text-cup-gold font-bold">
                Founder&apos;s Mission
              </span>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-cup-ivory">
                Varun Khera on the Future of Sustainable Hospitality
              </h2>

              <p className="text-sm sm:text-base text-cup-ivory/80 leading-relaxed font-light">
                &ldquo;Sustainability fails when it feels like a compromise or an inconvenience. But when being sustainable means getting a delicious roasted chocolate biscuit after your cappuccino, everyone embraces it gladly. That is the magic of CUP2EAT.&rdquo;
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <Link
                  href="/wholesale"
                  className="bg-cup-gold hover:bg-cup-goldLight text-cup-forest font-bold px-6 py-3 rounded-full transition shadow-md"
                >
                  Partner With CUP2EAT
                </Link>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cup-goldLight hover:text-white font-semibold flex items-center gap-1.5 transition"
                >
                  Follow {BRAND.instagramHandle} on Instagram
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-cup-emerald/40 rounded-2xl border border-cup-gold/30">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cup-gold mb-3 shadow-md">
                <Image
                  src="/images/cup2eat-logo.png"
                  alt="CUP2EAT Badge"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif font-bold text-lg text-cup-ivory">CUP2EAT</h4>
              <p className="text-xs text-cup-gold font-medium">Eat Your Drink!</p>
              <p className="text-[11px] text-cup-ivory/70 mt-2">
                Delivering edible cups all over India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

