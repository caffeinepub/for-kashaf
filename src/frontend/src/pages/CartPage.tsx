import { Minus, Phone, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleWhatsApp = () => {
    if (cartItems.length === 0) return;
    const lines = cartItems
      .map(
        (i) =>
          `• ${i.product.name} x${i.quantity} = Rs. ${(
            i.product.price * i.quantity
          ).toLocaleString()}`,
      )
      .join("%0A");
    const msg = `Hello Shamaaim Crochet!%0A%0AI would like to place an order:%0A${lines}%0A%0ATotal: Rs. ${cartTotal.toLocaleString()}%0A%0APlease confirm availability. Thank you!`;
    window.open(`https://wa.me/923064505433?text=${msg}`, "_blank");
  };

  return (
    <main
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12"
      data-ocid="cart.section"
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-serif text-4xl text-foreground text-center mb-10"
      >
        Your Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <div
          className="text-center py-20 text-muted-foreground"
          data-ocid="cart.empty_state"
        >
          <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-serif text-xl">Your cart is empty</p>
          <p className="font-sans text-sm mt-2">
            Add some beautiful items from our shop!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item, i) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-4 border border-border rounded-sm p-4 bg-white shadow-xs"
              data-ocid={`cart.item.${i + 1}`}
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base text-foreground">
                  {item.product.name}
                </h3>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  {item.product.description}
                </p>
                <p className="font-serif text-gold text-sm mt-1">
                  Rs. {item.product.price.toLocaleString()} each
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center border border-border rounded-sm">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    data-ocid={`cart.toggle.${i + 1}`}
                    className="px-2 py-1 hover:bg-cream transition-colors"
                    aria-label="Decrease"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="px-3 py-1 font-sans text-sm border-x border-border">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="px-2 py-1 hover:bg-cream transition-colors"
                    aria-label="Increase"
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <p className="font-serif text-xs text-foreground">
                  Rs. {(item.product.price * item.quantity).toLocaleString()}
                </p>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.product.id)}
                  data-ocid={`cart.delete_button.${i + 1}`}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Summary */}
          <div className="border-t border-border pt-6 mt-2">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-xl text-foreground">Total</span>
              <span className="font-serif text-2xl text-gold">
                Rs. {cartTotal.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                data-ocid="cart.primary_button"
                className="flex-1 flex items-center justify-center gap-2 bg-gold text-white rounded-sm px-6 py-3 font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Place Order via WhatsApp
              </button>
              <a
                href="tel:03064505433"
                data-ocid="cart.link"
                className="flex-1 flex items-center justify-center gap-2 border border-border rounded-sm px-6 py-3 font-sans text-sm tracking-widest uppercase text-foreground hover:bg-cream transition-colors"
              >
                <Phone size={14} />
                Call to Order
              </a>
            </div>
            <p className="text-center font-sans text-xs text-muted-foreground mt-3">
              03064505433
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
