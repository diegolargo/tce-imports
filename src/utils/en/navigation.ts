
const navBarLinks = [
  { name: "Home", url: "/en" },
  { name: "Who are we?", url: "/en/#about" },
  { name: "Services", url: "/en/services" },
  { name: "Blog", url: "/en/blog" },
  { name: "Contact", url: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2Ctengo%20una%20consulta." },
];

const footerLinks = [
  {
    section: "office",
    links: [
      { name: "Bogotá, Colombia", url: "#" },
    ]
  },
  {
    section: "Hours of Operation:",
    links: [
      { name: "Monday to Friday: 8am-7pm", url: "#" }
    ]
  },
  {
    section: "Contact us",
    links: [
      { name: "tucargaexpress2020@outlook.com", url: "mailto:tucargaexpress2020@outlook.com" },
      { name: "+57 3228553687", url: "tel:+573228553687" }
    ]
  }
];
const socialLinks = {
  facebook: "https://www.facebook.com/people/Tucarga-Express/100063773003174/",
  instagram: "https://www.instagram.com/tceimports13/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};