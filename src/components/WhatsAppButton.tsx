import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923172138835?text=Hello%20Bizwise%20Consultants%2C%20I%27d%20like%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-[oklch(0.66_0.18_145)] px-4 py-3 text-white shadow-elegant transition-smooth hover:scale-110 animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp Us</span>
    </a>
  );
}
