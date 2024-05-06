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
      title: "Transporte Aereo",
      subTitle: "Especialmente recomendado para productos de alto valor, como tecnolog\xEDa, insumos m\xE9dicos, maquinaria, repuestos y partes de autom\xF3viles.",
      img: transporteAereo,
      imgAlt: "tce import transporte Aereo",
      btnExists: true,
      btnTitle: "M\xE1s Informaci\xF3n",
      btnURL: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2C%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20transporte%20aereo."
    },
    {
      isRightSection: false,
      title: "Courier y Carga",
      subTitle: "\xA1Env\xEDos r\xE1pidos y seguros! Tu soluci\xF3n ideal para documentos urgentes y transporte de carga a cualquier destino.",
      img: courierCarga,
      imgAlt: "tce import Courier y Carga",
      btnExists: true,
      btnTitle: "M\xE1s Informaci\xF3n",
      btnURL: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2C%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20Courier%20y%20Carga."
    },
    {
      isRightSection: true,
      title: "Casillero Virtual",
      subTitle: "Es una direcci\xF3n f\xEDsica en Estados Unidos destinada a recibir los paquetes de nuestros clientes. No cobramos por el uso del casillero.",
      img: casilleroVirtual,
      imgAlt: "tce import Casillero Virtual",
      btnExists: true,
      btnTitle: "M\xE1s Informaci\xF3n",
      btnURL: "https://api.whatsapp.com/send?phone=573228553687&text=Hola%2C%20Quiero%20m\xE1s%20informaci\xF3n%20sobre%20Casillero%20Virtual."
    }
  ];
  const pageTitle = `Servicios | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.tceimports.com/services",
    "url": "https://www.tceimports.com/services",
    "name": "Servicios | TCE IMPORTS",
    "description": "Descubre c\xF3mo en TCE Imports convertimos tus deseos en realidad, importando los mejores productos desde Estados Unidos a Colombia.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.tceimports.com/",
      "name": "TCE IMPORTS",
      "description": "Descubre c\xF3mo en TCE Imports convertimos tus deseos en realidad, importando los mejores productos desde Estados Unidos a Colombia."
    },
    "inLanguage": "es-ES"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Estamos Para Ti", "subTitle": "Impulse din\xE1micamente el comercio electr\xF3nico innovador y los paradigmas distribuidos.", "btnExists": false, "btnTitle": "", "btnURL": "#" })} ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })}` })}`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/services.astro", void 0);

const $$file = "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
