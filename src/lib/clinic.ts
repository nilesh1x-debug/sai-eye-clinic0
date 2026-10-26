// Central clinic data for Sai Drishti Eye Care & Optics.
//
// PLACEHOLDER — the WhatsApp/phone number below is NOT the clinic's real
// number. Replace WHATSAPP_NUMBER with the real number (country code, no
// "+", no spaces, e.g. "919876543210") as soon as it is provided.

export const WHATSAPP_NUMBER = "919736001159";

export const CLINIC = {
  name: "Sai Drishti Eye Care & Optics",
  shortName: "Sai Drishti",
  tagline: "Clear vision, honest prices — serving Mohali since 2012",
  established: 2012,
  address: "Sector 123, Sunny Enclave, Kharar (Mohali)",
  doctor: "Dr. Umesh Dada",
  rating: "4.9",
  reviewCount: 260,
  hours: "Open daily — call or WhatsApp to confirm today's timings",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4437.129109063274!2d76.67166387647335!3d30.76658337456794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff10072125691%3A0xbdee64f495a16517!2sSAI%20DRISHTI%20EYE%20CARE%20%26%20OPTICS!5e1!3m2!1sen!2sin!4v1792986484613!5m2!1sen!2sin",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BOOKING_MESSAGE =
  "Hi Sai Drishti Eye Care, I'd like to book an appointment for an eye test.";
