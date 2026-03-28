import { Phone } from "lucide-react";
import { motion } from "motion/react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

interface HomePageProps {
  onShopClick: () => void;
}

export default function HomePage({ onShopClick }: HomePageProps) {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[420px] md:min-h-[480px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('/assets/uploads/places-to-sell-crochet-items-featured-019d3454-d9c1-7398-8454-e3174c9f10c4-2.jpg')",
        }}
        data-ocid="home.section"
      >
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg"
          >
            <h1 className="font-serif text-5xl sm:text-6xl text-gold leading-tight mb-3">
              Shamaaim Crochet
            </h1>
            <p className="font-sans text-base text-foreground tracking-widest uppercase mb-8">
              Luxury Handmade Creations
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button
                type="button"
                onClick={onShopClick}
                data-ocid="home.primary_button"
                className="bg-white border border-border rounded-sm px-8 py-3 font-sans text-sm tracking-widest uppercase text-foreground shadow-elegant hover:bg-cream transition-colors"
              >
                Shop the Collection
              </button>
              <span className="flex items-center gap-2 font-sans text-sm text-foreground">
                <Phone size={14} className="text-gold" />
                Order: 03064505433
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16"
        data-ocid="home.card"
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-foreground text-center mb-10"
        >
          Featured Collections
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard product={product} index={i + 1} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact banner */}
      <section className="bg-cream border-y border-border py-10 text-center">
        <p className="font-serif text-xl text-foreground mb-2">
          Have a custom order in mind?
        </p>
        <p className="font-sans text-sm text-muted-foreground tracking-wide">
          Call or WhatsApp us at{" "}
          <a
            href="https://wa.me/923064505433"
            className="text-gold font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="home.link"
          >
            03064505433
          </a>
        </p>
      </section>
    </main>
  );
}
