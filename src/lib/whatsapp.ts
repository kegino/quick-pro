export const WHATSAPP_PHONE = "5511933821957";

export function formatPhone(phone: string): string {
  if (phone.length === 13 && phone.startsWith("55")) {
    const ddd = phone.slice(2, 4);
    const part1 = phone.slice(4, 9);
    const part2 = phone.slice(9);
    return `+55 (${ddd}) ${part1}-${part2}`;
  }
  return phone;
}

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function whatsappLink(suffix?: string): string {
  const base = "Olá, gostaria de falar sobre o Quick Pro";
  const text = suffix ? `${base} ${suffix}` : base;
  return buildWhatsAppUrl(text);
}

export const WA = {
  home: whatsappLink(),
  assinar: whatsappLink(),
  teste: whatsappLink("- teste grátis"),
  suporte: whatsappLink("- suporte"),
  planos: whatsappLink("- planos"),
  mensal: whatsappLink("plano mensal"),
  trimestral: whatsappLink("plano trimestral"),
  semestral: whatsappLink("plano semestral"),
  anual: whatsappLink("plano anual"),
  dispositivos: whatsappLink("- dispositivos"),
  contato: whatsappLink("- contato"),
  faq: whatsappLink("- dúvidas"),
  blog: whatsappLink("- blog"),
};
