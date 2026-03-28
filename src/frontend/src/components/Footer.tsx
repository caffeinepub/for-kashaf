import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-cream border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-4xl text-gold mb-2">SC</p>
            <p className="font-serif text-lg text-foreground">
              Shamaaim Crochet
            </p>
            <p className="font-sans text-xs text-muted-foreground mt-2 leading-relaxed">
              Luxury handmade crochet creations, crafted with love and care for
              you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {["Home", "Shop", "Cart", "Help"].map((l) => (
                <li key={l}>
                  <span className="font-sans text-xs text-muted-foreground cursor-default">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-foreground mb-4">
              Contact Us
            </h4>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              WhatsApp / Call:
            </p>
            <a
              href="https://wa.me/923064505433"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-gold text-base hover:underline"
            >
              03064505433
            </a>
            <p className="font-sans text-xs text-muted-foreground mt-3 leading-relaxed">
              Mon–Sat · 10am–8pm
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-muted-foreground">
            © {year} Shamaaim Crochet. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors flex items-center gap-1"
          >
            Built with <Heart size={10} className="text-blush fill-blush" />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
