export default function manifest() {
  return {
    name: "Dr. Jefferson Reis | Clínica Inova",
    short_name: "Dr. Jefferson Reis",
    description: "Cartão digital do Dr. Jefferson Reis e da Clínica Inova.",
    start_url: "/cartao",
    display: "standalone",
    background_color: "#f7f7f3",
    theme_color: "#1f2d2b",
    icons: [{ src: "/assets/favicon.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }],
  };
}
