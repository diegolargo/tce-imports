/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_YHXcNZuR.mjs';
import { $ as $$HeroSection, h as heroImage, M as MyModal, a as ModalCotizar, b as $$SliderHome, c as $$FeaturesGeneral, d as $$FeaturesNavs, e as entregaRapida, s as soporte, f as seguridad, R as ReviewSection, g as $$FAQ, i as $$HeroSectionAlt } from './ModalCotizar_CdV8HipE.mjs';

const subTitle = "Get objective answers from our brand and products.";
const faqs = [
	{
		question: "How long does it take for a shipment to be delivered?",
		answer: "Delivery time may vary depending on the service selected and the recipient's location. We offer express delivery options for urgent shipments, as well as standard services that may take a few additional days to arrive. Estimated delivery times are provided at the time of shipment."
	},
	{
		question: "What are the shipping costs?",
		answer: "Shipping costs may vary depending on weight, size, distance, and service selected. We offer competitive and transparent rates, and customers can get a shipping quote online or by contacting our customer support team."
	},
	{
		question: "What should I do if my package is lost or arrives damaged?",
		answer: "In case any issues occur with your shipment, we recommend contacting our customer service team immediately. We'll be happy to help you resolve any issues and take the necessary steps to locate or replace your package."
	},
	{
		question: "What security measures are in place to protect shipments?",
		answer: "We implement strict security protocols to ensure the integrity and safety of all shipments. This includes the use of tracking and monitoring systems, identity verification procedures, and training our staff in security practices."
	},
	{
		question: "Do you offer shipping services for heavy cargo or dangerous goods?",
		answer: "Yes, we offer heavy cargo and dangerous goods shipping services, complying with all applicable regulations and regulations. Our team is trained and equipped to handle a wide variety of products and ensure their safe and timely delivery."
	},
	{
		question: "What services does your shipping company offer?",
		answer: "We offer a wide range of shipping and delivery services, including domestic and international shipping, express delivery, last-mile logistics, warehousing, and inventory management, among others."
	}
];
const faqs$1 = {
	subTitle: subTitle,
	faqs: faqs
};

const features = [
	{
		heading: "Transparent Pricing",
		content: "With no surprises or hidden costs, we give you clarity and honesty in every offer",
		svg: "price"
	},
	{
		heading: "Priority Transportation",
		content: "If you have urgent shipments or tight deadlines, this service is ideal. Your goods move quickly and efficiently. ",
		svg: "priority"
	},
	{
		heading: "Locker",
		content: "We value our customers and want to provide them with exceptional service. That's why we offer free virtual lockers",
		svg: "home"
	}
];

const $$Astro = createAstro("https://www.tceimports.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Fast & Secure Service with <span
        class="text-orange">TCE IMPORTS</span>`, "subTitle": "We prioritize efficiency and safety in every delivery, ensuring you a fast and reliable service for your peace of mind.", "primaryBtn": "Contact Us", "primaryBtnURL": "https://api.whatsapp.com/send?phone=573228553687&text=Hello%2CI%20have%20a%20query.", "secondaryBtn": "More Details", "secondaryBtnURL": "/services", "src": heroImage, "alt": "TCE Imports Delivery Drivers" })} ${renderComponent($$result2, "ModalHome", MyModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/modal/ModalHome.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "ModalCotizar", ModalCotizar, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/modal/ModalCotizar.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "SliderHome", $$SliderHome, {})} ${maybeRenderHead()}<div class="fixed bottom-20 right-10"> <div class="flex flex-col gap-4 animate-upDown"> <a href="https://instagram.com" target="_blank" class="cursor-pointer hover:scale-110 transition-transform duration-300"> <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M40 10c0-5.522-4.478-10-10-10H10C4.478 0 0 4.478 0 10v20c0 5.522 4.478 10 10 10h20c5.522 0 10-4.478 10-10V10Z" fill="url(#a)"></path><path d="M25.916 6.01c4.182.04 8.032 3.63 8.074 8.075.014 3.944.014 7.887 0 11.831-.04 4.166-3.63 8.033-8.074 8.074-3.944.014-7.888.014-11.832 0-4.184-.04-8.032-3.63-8.074-8.074-.014-3.944-.014-7.887 0-11.832.038-4.185 3.62-8.031 8.074-8.073 3.944-.014 7.888-.014 11.832 0ZM14.138 7.9c-3.246.01-6.206 2.825-6.238 6.197-.012 3.935-.012 7.871 0 11.807.03 3.21 2.776 6.165 6.196 6.196 3.936.012 7.872.012 11.808 0 3.218-.03 6.164-2.776 6.196-6.196.012-3.936.012-7.872 0-11.807-.03-3.232-2.83-6.164-6.196-6.196-3.922-.013-7.844 0-11.766 0Z" fill="#fff"></path><path d="M20.048 13c3.236.03 6.252 2.526 6.844 5.724.422 2.28-.374 4.752-2.054 6.356-1.87 1.78-4.764 2.416-7.244 1.508-2.772-1.014-4.722-3.936-4.592-6.896.158-3.536 3.282-6.68 6.998-6.692h.048Zm-.08 1.894c-2.31.022-4.488 1.774-4.968 4.05-.486 2.302.838 4.856 3.012 5.774 2.374 1.004 5.44-.122 6.586-2.466 1.186-2.422.068-5.712-2.436-6.882a5.184 5.184 0 0 0-2.194-.476Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29 12.454A1.455 1.455 0 0 0 27.546 11h-.092A1.455 1.455 0 0 0 26 12.454v.046c0 .398.158.78.44 1.06A1.5 1.5 0 0 0 29 12.5v-.046Z" fill="#fff"></path><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 39) scale(55.866)"><stop stop-color="#FF8100"></stop><stop offset=".19" stop-color="#FF7209"></stop><stop offset=".32" stop-color="#F55E16"></stop><stop offset=".48" stop-color="#D92938"></stop><stop offset="1" stop-color="#9100FF"></stop></radialGradient></defs></svg> </a> <a href="https://api.whatsapp.com/send?phone=573228553687&text=Hello%2CI%20have%20a%20query." target="_blank" class="cursor-pointer hover:scale-110 transition-transform duration-300"> <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m12.37 36.015-9.495 3.022L0 39.952l4.039-11.93a18.88 18.88 0 0 1-2.295-9.027c0-5.067 2.016-9.871 5.61-13.436A19.15 19.15 0 0 1 20.878 0a19.13 19.13 0 0 1 13.516 5.562A18.886 18.886 0 0 1 40 19.002c0 5.066-2.016 9.87-5.609 13.434a19.142 19.142 0 0 1-13.52 5.559 19.063 19.063 0 0 1-8.502-1.98h.001Z" fill="#EEE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.474 19.001c0-4.825-1.97-9.194-5.155-12.357a17.603 17.603 0 0 0-12.442-5.119A17.622 17.622 0 0 0 8.428 6.642C5.24 9.804 3.27 14.172 3.27 18.995a17.359 17.359 0 0 0 2.434 8.868l-3.05 9.008-.24.712.716-.228 9.38-2.985a17.532 17.532 0 0 0 3.965 1.549c1.405.36 2.878.55 4.398.55 4.86 0 9.26-1.955 12.445-5.116 3.187-3.162 5.157-7.53 5.157-12.352Z" fill="#54CC61"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.015 14.23a110.41 110.41 0 0 1-.934-2.227l-.563-1.357c-.463-1.104-.975-1.07-1.367-1.045-.026.002-.05.003-.084.003-.137 0-.272-.008-.411-.017a8.48 8.48 0 0 0-.527-.023 2.07 2.07 0 0 0-.863.2 2.273 2.273 0 0 0-.72.535 7.36 7.36 0 0 1-.086.091c-.543.571-1.728 1.816-1.728 4.208 0 2.509 1.81 4.894 2.075 5.245l.002.004.003.003.105.152c.668.978 3.74 5.47 8.409 7.293 4.236 1.653 5.002 1.468 5.687 1.302.117-.028.23-.056.353-.067.555-.052 1.462-.432 2.225-.965.633-.442 1.186-1 1.398-1.589a6.662 6.662 0 0 0 .345-1.417c.072-.584.015-1.044-.092-1.222l-.001-.001c-.162-.266-.442-.398-.86-.596l-.23-.11c-.289-.147-1.29-.636-2.145-1.04-.553-.262-1.044-.486-1.238-.556-.274-.098-.512-.173-.768-.144-.29.033-.542.182-.776.537h-.001c-.118.176-.325.441-.551.719-.36.44-.787.933-.97 1.14v.002c-.078.088-.145.136-.21.145-.092.01-.218-.027-.392-.112a6.79 6.79 0 0 0-.353-.16c-.676-.292-1.994-.86-3.495-2.19a12.447 12.447 0 0 1-1.405-1.483 14.604 14.604 0 0 1-1.242-1.788c-.136-.233.015-.383.154-.522.153-.154.327-.363.501-.573.08-.095.16-.191.256-.302l.001-.002c.236-.273.333-.473.465-.742l.07-.144.002-.001c.116-.233.146-.455.124-.663a1.473 1.473 0 0 0-.164-.521Z" fill="#FFFFFE"></path></svg> </a> </div> </div> ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "What do we offer?", "subTitle": "At TCE IMPORTS, we are dedicated to simplifying the import process for you. Our mission is to give you access to quality products from around the world, without the hassle or stress.", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `\xBFWhy Choose <span class="text-orange dark:text-orange">TCE IMPORTS</span>?`, "tabs": [
    {
      heading: "Fast Delivery",
      content: "Speed and punctuality define our imports. Your products, in record time, crossing borders without setbacks.",
      svg: "priority",
      src: entregaRapida,
      alt: "tce imports fast delivery",
      first: true
    },
    {
      heading: "24/7 Support",
      content: "Always available, we answer your questions and ensure a smooth import experience. We're with you every step of the way.",
      svg: "tools",
      src: soporte,
      alt: "TCE Imports 24/7 Support",
      second: true
    },
    {
      heading: "Security & Trust",
      content: "Your products in safe hands. With strict protocols and detailed tracking, we guarantee perfect and reliable deliveries.",
      svg: "segury",
      src: seguridad,
      alt: "TCE Imports Security & Trust"
    }
  ] })} ${renderComponent($$result2, "ReviewSection", ReviewSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/sections/testimonials/ReviewSection.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently asked questions", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Get to know our blog", "subTitle": "Discover essential tips, market trends, and strategies for successful imports. Learn how to import hassle-free and grow your business!", "url": "/blog" })} ` })}`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/en/index.astro";
const $$url = "/en";

export { $$Index as default, $$file as file, $$url as url };
