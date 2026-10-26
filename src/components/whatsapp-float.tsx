import { whatsappLink, BOOKING_MESSAGE } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site-header";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(BOOKING_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
