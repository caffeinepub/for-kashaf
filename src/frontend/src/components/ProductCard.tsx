import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="bg-white border border-border rounded-sm shadow-elegant overflow-hidden flex flex-col group"
      data-ocid={`shop.item.${index}`}
    >
      <div className="overflow-hidden aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 items-center text-center gap-2">
        <h3 className="font-serif text-base text-foreground">{product.name}</h3>
        <p className="text-xs text-muted-foreground font-sans">
          {product.description}
        </p>
        <p className="font-serif text-gold text-base mt-auto">
          Rs. {product.price.toLocaleString()}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          data-ocid={`shop.add_button.${index}`}
          className={`mt-2 w-full flex items-center justify-center gap-2 border border-border rounded-sm px-4 py-2 text-xs tracking-widest uppercase font-sans transition-all ${
            added
              ? "bg-gold text-white border-gold"
              : "bg-white text-foreground hover:bg-cream"
          }`}
        >
          {added ? <Check size={14} /> : <ShoppingBag size={14} />}
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
