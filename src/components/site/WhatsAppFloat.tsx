import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site-config";

export function WhatsAppFloat() {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowLabel(true), 1800);

    const hideOnScroll = () => setShowLabel(false);
    window.addEventListener("scroll", hideOnScroll, { once: true, passive: true });

    const hideTimer = setTimeout(() => setShowLabel(false), 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", hideOnScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 md:bottom-7 md:right-7">
      <AnimatePresence>
        {showLabel && (
          <motion.span
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-elegant"
          >
            Fale com a gente
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 180, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] ring-4 ring-white/40 md:h-16 md:w-16"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.6.14-.18.27-.69.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 6.4c-5.32 0-9.65 4.33-9.65 9.65 0 1.7.45 3.36 1.3 4.83L6 26l5.31-1.39c1.41.77 3 1.17 4.7 1.17h.01c5.32 0 9.65-4.33 9.65-9.65 0-2.58-1.01-5-2.83-6.83A9.6 9.6 0 0 0 16.02 6.4zm0 17.62c-1.51 0-3-.41-4.29-1.18l-.31-.18-3.18.83.85-3.1-.2-.32a8.05 8.05 0 0 1-1.24-4.31c0-4.45 3.62-8.07 8.08-8.07 2.16 0 4.18.84 5.71 2.37a8 8 0 0 1 2.36 5.71c0 4.45-3.62 8.07-8.08 8.07z" />
        </svg>
      </motion.a>
    </div>
  );
}
