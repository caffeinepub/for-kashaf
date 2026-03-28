import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type Page = "home" | "shop" | "cart" | "help";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Shop", page: "shop" },
    { label: "Cart", page: "cart" },
    { label: "Help", page: "help" },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="bg-cream sticky top-0 z-50 shadow-xs border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="font-serif text-2xl sm:text-3xl text-foreground tracking-wide hover:text-gold transition-colors"
          data-ocid="nav.link"
        >
          Shamaaim Crochet
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map(({ label, page }) => (
            <button
              type="button"
              key={page}
              onClick={() => handleNav(page)}
              data-ocid={`nav.${page}.link`}
              className={`font-sans text-sm tracking-widest uppercase transition-colors ${
                currentPage === page
                  ? "text-gold border-b border-gold"
                  : "text-foreground hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Cart icon + mobile menu */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNav("cart")}
            data-ocid="nav.cart.button"
            className="relative p-2 hover:text-gold transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blush text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, page }) => (
            <button
              type="button"
              key={page}
              onClick={() => handleNav(page)}
              className={`font-sans text-sm tracking-widest uppercase text-left ${
                currentPage === page ? "text-gold" : "text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
