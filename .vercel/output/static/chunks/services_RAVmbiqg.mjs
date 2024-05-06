/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, S as SITE } from './MainLayout_YHXcNZuR.mjs';
import { $ as $$MainSection, a as $$RightSection, b as $$LeftSection, t as transporteAereo, c as courierCarga, d as casilleroVirtual } from './casilleroVirtual_BXZAdoEs.mjs';

const $$Astro = createAstro("https://www.tceimports.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const articles = [
    {
      isRightSection: true,
      title: "Air Transport",
      subTitle: "Especially recommended for high-value products, such as technology, medical supplies, machinery, spare parts, and auto parts.",
      img: transporteAereo,
      imgAlt: "tce import Air Transport",
      btnExists: true,
      btnTitle: "Learn More",
      btnURL: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2C%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20transporte%20aereo."
    },
    {
      isRightSection: false,
      title: "Courier & Cargo",
      subTitle: "Fast & Secure Shipping! Your ideal solution for urgent documents and cargo transport to any destination.",
      img: courierCarga,
      imgAlt: "tce import Courier & Cargo",
      btnExists: true,
      btnTitle: "Learn More",
      btnURL: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2C%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20Courier%20y%20Carga."
    },
    {
      isRightSection: true,
      title: "Virtual Locker",
      subTitle: "Es una direcci\xF3n f\xEDsica en Estados Unidos destinada a recibir los paquetes de nuestros clientes. No cobramos por el uso del casillero.",
      img: casilleroVirtual,
      imgAlt: "tce import Virtual Locker",
      btnExists: true,
      btnTitle: "Learn More",
      btnURL: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2C%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20Casillero%20Virtual."
    }
  ];
  const pageTitle = `Servicios | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.tceimports.com/services",
    "url": "https://www.tceimports.com/services",
    "name": "Services | TCE IMPORTS",
    "description": "Discover how at TCE Imports we turn your wishes into reality, importing the best products from the United States to Colombia.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.tceimports.com/",
      "name": "TCE IMPORTS",
      "description": "Discover how at TCE Imports we turn your wishes into reality, importing the best products from the United States to Colombia."
    },
    "inLanguage": "en-EN"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "We're here for you", "subTitle": "Dynamically drive innovative e-commerce and distributed paradigms.", "btnExists": false, "btnTitle": "", "btnURL": "#" })} ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })}` })}`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/en/services.astro", void 0);

const $$file = "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/en/services.astro";
const $$url = "/en/services";

export { $$Services as default, $$file as file, $$url as url };
