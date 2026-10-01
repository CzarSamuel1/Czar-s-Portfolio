/** Single source of truth for contact details. Edit here and the whole site updates. */
export const CONTACT = {
  email: "samuelmonday857@gmail.com",
  phoneDisplay: "0802 063 1277",
  phoneTel: "+2348020631277",
  // WhatsApp needs the international format (no leading 0, no +)
  whatsapp:
    "https://wa.me/2348020631277?text=" +
    encodeURIComponent("Hi Samuel, I saw your portfolio and I'd like to talk about a project."),
  x: "https://x.com/czar_design",
  xHandle: "@czar_design",
  linkedin: "https://www.linkedin.com/in/samuel-monday-28a178235",
} as const;
