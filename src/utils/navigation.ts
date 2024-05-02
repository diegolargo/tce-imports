// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "¿Quiénes somos?", url: "/#about" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Oficina",
    links: [
      { name: "Bogotá, Colombia", url: "/welcome-to-docs/" },
    ]
  },
  {
    section: "Horario de Atención:",
    links: [
      { name: "Lunes a Viernes: 8am-7pm", url: "#" }
    ]
  },
  {
    section: "Contactenos",
    links: [
      { name: "tucargaexpress2020@outlook.com", url: "mailto:tucargaexpress2020@outlook.com" },
      { name: "+57 3228553687", url: "tel:+573228553687" }
    ]
  }
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/people/Tucarga-Express/100063773003174/",
  instagram: "https://www.instagram.com/tceimports13/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};