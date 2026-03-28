import { motion } from "motion/react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function ShopPage() {
  return (
    <main
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
      data-ocid="shop.section"
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-serif text-4xl text-foreground text-center mb-3"
      >
        Our Collection
      </motion.h1>
      <p className="text-center font-sans text-sm text-muted-foreground tracking-widest uppercase mb-10">
        Handcrafted with love · Made to order
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProductCard product={product} index={i + 1} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
