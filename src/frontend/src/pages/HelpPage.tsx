import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const FAQS = [
  {
    id: "order",
    q: "How do I place an order?",
    a: "You can place an order by calling or sending a WhatsApp message to 03064505433. You can also use the Cart page to send a pre-filled WhatsApp order message.",
  },
  {
    id: "custom",
    q: "Do you accept custom orders?",
    a: "Absolutely! We love creating personalized pieces. Contact us on WhatsApp at 03064505433 with your design idea, preferred colors, and size requirements.",
  },
  {
    id: "delivery",
    q: "How long does delivery take?",
    a: "Standard delivery takes 3–5 business days within Pakistan. Custom orders may take 7–10 business days depending on complexity.",
  },
  {
    id: "payment",
    q: "What payment methods do you accept?",
    a: "We accept Cash on Delivery, Bank Transfer, EasyPaisa, and JazzCash. Payment details will be shared upon confirmation of your order.",
  },
  {
    id: "returns",
    q: "Can I return or exchange an item?",
    a: "We accept return or exchange requests within 24 hours of delivery if the item arrives damaged or is not as described. Please contact us immediately via WhatsApp.",
  },
  {
    id: "handmade",
    q: "Are your products handmade?",
    a: "Yes! Every single item is handcrafted with love and care. We use high-quality yarns and materials to ensure each piece is unique and durable.",
  },
];

export default function HelpPage() {
  return (
    <main
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12"
      data-ocid="help.section"
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-serif text-4xl text-foreground text-center mb-3"
      >
        Help &amp; FAQ
      </motion.h1>
      <p className="text-center font-sans text-sm text-muted-foreground tracking-widest uppercase mb-10">
        Everything you need to know
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        data-ocid="help.panel"
      >
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="border-border"
            data-ocid={`help.item.${i + 1}`}
          >
            <AccordionTrigger className="font-serif text-base text-left text-foreground hover:text-gold hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 bg-cream rounded-sm border border-border p-8 text-center"
      >
        <h2 className="font-serif text-2xl text-foreground mb-2">
          Still have questions?
        </h2>
        <p className="font-sans text-sm text-muted-foreground mb-4">
          We're always happy to help. Reach out anytime!
        </p>
        <a
          href="https://wa.me/923064505433"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="help.link"
          className="inline-block bg-gold text-white rounded-sm px-8 py-3 font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          WhatsApp Us
        </a>
        <p className="font-sans text-xs text-muted-foreground mt-3">
          03064505433
        </p>
      </motion.div>
    </main>
  );
}
