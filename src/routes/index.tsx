import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Truck, BadgePoundSterling, Globe2, ShieldCheck, Search, ShoppingBag, Menu, Star, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-wardrobe.jpg";
import catMirrored from "@/assets/cat-mirrored.jpg";
import catDrawers from "@/assets/cat-drawers.jpg";
import catHinged from "@/assets/cat-hinged.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { title: "Mirrored wardrobes", img: catMirrored },
  { title: "Wardrobes with drawers", img: catDrawers },
  { title: "Hinged & 4-door", img: catHinged },
];

const products = [
  { name: "Berlin 150 Sliding", tag: "Pebble Grey · Mirror", price: 899, was: 1049, img: prod1 },
  { name: "Kansas 200 Bi-Fold", tag: "Champagne Glass · Drawers", price: 1299, was: 1499, img: prod2 },
  { name: "Graphite 180 LED", tag: "Matte Black · Interior Lights", price: 1149, was: 1349, img: prod3 },
  { name: "Nordic 160 Oak", tag: "Natural Oak · 3-Door", price: 979, was: 1129, img: prod4 },
];

const features = [
  { icon: Truck, label: "Free UK delivery" },
  { icon: BadgePoundSterling, label: "Price match guarantee" },
  { icon: Globe2, label: "Made in EU" },
  { icon: ShieldCheck, label: "Secure payments" },
];

const newsItems = [
  " FREE Home Delivery & Room-of-Choice Service on all orders over £500",
  " Complimentary White-Glove Assembly by Certified Carpenters",
  " 10-Year Comprehensive Structural & Mechanism Warranty",
  "🇪🇺 Precision Handcrafted in the European Union with Soft-Close Tracks"
];

function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide border-b border-neutral-800 flex items-center justify-center gap-2.5 shadow-sm overflow-hidden min-h-[40px]">
      {/* <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-extrabold text-black uppercase tracking-wider shrink-0">
        ⚡ NEWS
      </span> */}
      <div className="relative overflow-hidden flex items-center justify-center">
        <p
          key={currentIndex}
          className="animate-in fade-in slide-in-from-bottom-2 duration-500 font-medium text-neutral-200"
        >
          {newsItems[currentIndex]}
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top bar */}
      {/* <div className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[11px] uppercase tracking-[0.14em]">
          <nav className="flex items-center gap-5 overflow-x-auto">
            <a href="#delivery" className="opacity-70 hover:text-accent hover:opacity-100 transition">Delivery</a>
            <span className="opacity-30">/</span>
            <a href="#assembly" className="opacity-70 hover:text-accent hover:opacity-100 transition">Assembly</a>
            <span className="opacity-30">/</span>
            <a href="#projects" className="opacity-70 hover:text-accent hover:opacity-100 transition">Completed projects</a>
            <span className="opacity-30">/</span>
            <a href="#blog" className="opacity-70 hover:text-accent hover:opacity-100 transition">Blog</a>
          </nav>
          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-1.5 opacity-70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Free UK delivery over £500
            </span>
            <span className="opacity-30">·</span>
            <a href="#about" className="opacity-70 hover:text-accent hover:opacity-100 transition">About</a>
            <a href="#contact" className="opacity-70 hover:text-accent hover:opacity-100 transition">Contact</a>
          </div>
        </div>
      </div> */}

      {/* News Announcement Rotator Above Navbar */}
      <NewsTicker />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <a href="#" className="font-display text-2xl font-bold tracking-tight">
            The Furniture <span className="text-accent">Genie</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="hover:text-accent transition">All wardrobes</a>
            <a href="#shop" className="hover:text-accent transition">Sliding</a>
            <a href="#shop" className="hover:text-accent transition">Hinged</a>
            <a href="#shop" className="hover:text-accent transition">Mirrored</a>
            <a href="#shop" className="hover:text-accent transition">Drawers</a>
            <a href="#shop" className="hover:text-accent transition">By Size</a>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden sm:block hover:text-accent"><Search className="h-5 w-5" /></button>
            <button aria-label="Cart" className="relative hover:text-accent">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 rounded-full bg-accent px-1.5 text-[10px] font-bold text-accent-foreground">0</span>
            </button>
            <button aria-label="Menu" className="lg:hidden"><Menu className="h-6 w-6" /></button>
          </div>
        </div>
      </header>

      {/* Promo strip */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center">
          <span className="font-display font-bold text-accent">SALE 15%</span>
          <span className="ml-3 text-sm opacity-90">Summer deal on all premium wardrobes — ends soon</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden group">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-in-out scale-105 group-hover:scale-100"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent transition-opacity duration-1000 ease-in-out" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:py-40 lg:py-48">
          <div className="max-w-2xl text-white">
            <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-medium tracking-wider uppercase">
              Most Trusted Wardrobe Experts in the UK
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Sliding Door Wardrobes<br />for Modern Bedrooms.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              Handcrafted in the EU, delivered free across the UK. Discover 300+ configurations tailored to your space.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold px-8 h-12">
                Shop all wardrobes <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-4">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center">
              <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="shop" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Shop by category</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Find your perfect fit</h2>
          </div>
          <a href="#" className="hidden text-sm font-medium hover:text-accent sm:flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <a key={c.title} href="#" className="group relative overflow-hidden rounded-2xl bg-muted">
              <img src={c.img} alt={c.title} width={900} height={700} loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6 text-white">
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                <span className="rounded-full bg-accent p-2 text-accent-foreground transition group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Bestsellers</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Loved by 12,000+ homes</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.name} className="group">
                <div className="relative overflow-hidden rounded-xl bg-card">
                  <img src={p.img} alt={p.name} width={800} height={900} loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
                    −15%
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.tag}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl font-bold">£{p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">£{p.was}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Reviews</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Rated 4.9 / 5 by real customers</h2>
            <p className="mt-4 text-muted-foreground">
              We take pride in the detail — from the whisper-quiet runners to the fully-assembled delivery service.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { name: "Sarah M.", city: "London", text: "Absolutely stunning wardrobe. The team assembled it in under 2 hours and left the room spotless." },
              { name: "James R.", city: "Manchester", text: "Better quality than I expected for the price. The mirror doors transformed our small bedroom." },
              { name: "Priya K.", city: "Bristol", text: "Great communication throughout. The champagne glass finish is even nicer in person." },
              { name: "Tom D.", city: "Edinburgh", text: "Second wardrobe from The Furniture Genie. Consistent quality, quick delivery, price-matched no fuss." },
            ].map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed">"{r.text}"</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {r.name} · {r.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Not sure what fits your space?</h2>
            <p className="mt-4 max-w-md opacity-80">
              Send us your dimensions and one of our designers will send back a bespoke layout — free of charge.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold px-8 h-12">
              Get a free quote
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              Talk to a designer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-bold">The Furniture <span className="text-accent">Genie</span></div>
            <p className="mt-3 text-sm opacity-70">Premium sliding wardrobes handmade in the European Union.</p>
            <div className="mt-5 flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-accent"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          {[
            { title: "Shop", links: ["All wardrobes", "Sliding", "Hinged", "Mirrored", "By size"] },
            { title: "Company", links: ["About us", "Completed projects", "Blog", "Contact"] },
            { title: "Support", links: ["Delivery", "Assembly", "Returns", "Warranty", "FAQ"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2 text-sm opacity-70">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-accent hover:opacity-100">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-sidebar-border">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-6 text-xs opacity-60 sm:flex-row">
            <p>© {new Date().getFullYear()} The Furniture Genie — All rights reserved.</p>
            <p>Free UK delivery · Price match · Made in EU</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Icon Button */}
      <a
        // href="https://wa.me/448001234567?text=Hi%2C%20I'm%20interested%20in%20your%20sliding%20wardrobes!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M11.996 0C5.372 0 0 5.373 0 11.998c0 2.118.552 4.185 1.602 6.002L.051 24l6.19-1.624a11.944 11.944 0 0 0 5.755 1.478h.005c6.623 0 11.996-5.373 11.996-11.998 0-3.21-1.25-6.227-3.52-8.497A11.922 11.922 0 0 0 11.996 0zM12 21.821h-.005a9.907 9.907 0 0 1-5.043-1.385l-.362-.214-3.743.982.998-3.648-.235-.374a9.924 9.924 0 0 1-1.517-5.184c0-5.469 4.451-9.92 9.923-9.92 2.65 0 5.14.1032 7.013 2.905 1.874 1.872 2.906 4.363 2.906 7.014 0 5.47-4.451 9.92-9.92 9.92zm5.441-7.414c-.298-.149-1.764-.87-2.037-.969-.274-.1-.473-.149-.672.149-.199.299-.771.969-.945 1.169-.174.199-.348.224-.647.075-.298-.149-1.258-.464-2.396-1.478-.886-.79-1.484-1.767-1.658-2.066-.174-.299-.019-.461.13-.61.135-.134.298-.348.447-.522.149-.174.199-.299.298-.498.1-.199.05-.373-.025-.522-.075-.149-.672-1.62-.921-2.22-.242-.584-.487-.504-.672-.513-.174-.008-.373-.01-.572-.01-.199 0-.522.075-.796.373-.274.299-1.045 1.021-1.045 2.49 0 1.47 1.07 2.891 1.219 3.09.149.199 2.104 3.212 5.097 4.505.712.308 1.268.492 1.7.63.715.227 1.365.195 1.88.118.577-.086 1.764-.721 2.013-1.418.249-.697.249-1.295.174-1.418-.075-.124-.274-.199-.572-.348z" />
        </svg>
      </a>
    </div>
  );
}
