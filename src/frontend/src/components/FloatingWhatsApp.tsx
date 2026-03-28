import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923064505433"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="home.button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-elegant text-white transition-transform hover:scale-110"
      style={{ backgroundColor: "oklch(0.78 0.045 20)" }}
    >
      <SiWhatsapp size={26} />
    </a>
  );
}
