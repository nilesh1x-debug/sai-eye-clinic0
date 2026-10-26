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
    "https://maps.app.goo.gl/vDg6KvhiNVXYsxmx6",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BOOKING_MESSAGE =
  "Hi Sai Drishti Eye Care, I'd like to book an appointment for an eye test.";
