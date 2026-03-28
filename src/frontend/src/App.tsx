import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import HelpPage from "./pages/HelpPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

type Page = "home" | "shop" | "cart" | "help";

function AppContent() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentPage={page} onNavigate={setPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          {page === "home" && <HomePage onShopClick={() => setPage("shop")} />}
          {page === "shop" && <ShopPage />}
          {page === "cart" && <CartPage />}
          {page === "help" && <HelpPage />}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
