import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, e as renderComponent, u as unescapeHTML, F as Fragment, h as renderSlot } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_B0EJAZJm.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_oMYiWkU8.mjs';
import 'clsx';
import { a as $$Icon } from './MainLayout_YHXcNZuR.mjs';
import { jsx, Fragment as Fragment$1, jsxs } from 'react/jsx-runtime';
import { Transition, Dialog } from '@headlessui/react';
import { useState, useEffect, Fragment as Fragment$2, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
/* empty css                         */
import emailjs from '@emailjs/browser';

const $$Astro$b = createAstro("https://www.tceimports.com");
const $$SecondaryCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-blue";
  const bgColorClasses = "bg-zinc-200";
  const hoverClasses = "hover:-translate-y-1";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$a = createAstro("https://www.tceimports.com");
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <div> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> </div> <div class="flex w-full"> <div class="overflow-hidden animate-upDown"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "webp" })}`} </div> </div> </section>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$9 = createAstro("https://www.tceimports.com");
const $$GithubBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-white ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-orange";
  const hoverClasses = "hover:shadow-xl hover:shadow-orange/50 hover:scale-105";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${title} </a>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/buttons/GithubBtn.astro", void 0);

const $$Astro$8 = createAstro("https://www.tceimports.com");
const $$HeroSectionAlt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = Astro2.currentLocale === "en" ? "Go to the blog" : "Ir al Blog";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro$7 = createAstro("https://www.tceimports.com");
const $$IconBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5 shadow-xl p-4 rounded-lg border border-zinc-200 dark:border-zinc-700"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro$6 = createAstro("https://www.tceimports.com");
const $$FeaturesGeneral = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1"> <!-- Rendering title --> <h2 class="text-balance text-2xl font-bold text-orange md:text-3xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4"> ${subTitle} </p>`} </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.svg })} ` })}`)} </div> </div> </div> </section>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$Astro$5 = createAstro("https://www.tceimports.com");
const $$TabNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS} border border-zinc-200 dark:border-zinc-700`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-orange-400 dark:text-neutral-200 dark:hs-tab-active:text-orange-300">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$4 = createAstro("https://www.tceimports.com");
const $$TabContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/TabContent.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://www.tceimports.com");
const $$FeaturesNavs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> `, ` </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> `, ` </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> `, ' </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl shadow-2xl bg-zinc-200 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> <script src="/scripts/vendor/preline/tabs/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg })} ` })}`), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`));
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$Astro$2 = createAstro("https://www.tceimports.com");
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/AccordionItem.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://www.tceimports.com");
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main container that holds all content. Customized for different viewport sizes. -->", '<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ', ' </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ', ' </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ', ' </div> </div> </div> </section> <!--Import the necessary Accordion plugin--> <!--https://preline.co/plugins/html/accordion.html--> <script src="/scripts/vendor/preline/accordion/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), faqs.subTitle, faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  }));
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/sections/FAQ.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.C2Nr20St.webp","width":1500,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/hero-image.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/hero-image.webp");
							return target[name];
						}
					});

const seguridad = new Proxy({"src":"/_astro/seguridad.C12N8zLn.webp","width":1000,"height":1500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/seguridad.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/seguridad.webp");
							return target[name];
						}
					});

const entregaRapida = new Proxy({"src":"/_astro/entrega-rapida.Cbx8fo5w.webp","width":1071,"height":1500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/entrega-rapida.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/entrega-rapida.webp");
							return target[name];
						}
					});

const soporte = new Proxy({"src":"/_astro/soporte.CK2K0K1u.webp","width":1000,"height":1500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/soporte.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/soporte.webp");
							return target[name];
						}
					});

function MyModal() {
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("");
  let [image, setImage] = useState("");
  function closeModal() {
    setModal(false);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tce-cms-strapi-192i.onrender.com/api/modal-homes?populate[anuncio][fields][0]=url");
        const data = await response.json();
        if (data.data.length > 0) {
          const title2 = data.data[0].attributes.title;
          const image2 = data.data[0].attributes.anuncio.data.attributes.url;
          setTitle(title2);
          setImage(image2);
          setModal(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Transition, { appear: true, show: modal, as: Fragment$2, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: closeModal, children: [
    /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment$2,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/25" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment$2,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all", children: [
          /* @__PURE__ */ jsx(
            Dialog.Title,
            {
              as: "h3",
              className: "text-2xl font-bold leading-6 text-zinc-800 text-center mb-6",
              children: title
            }
          ),
          /* @__PURE__ */ jsx("img", { className: "rounded-xl", src: `https://tce-cms-strapi-192i.onrender.com${image}`, alt: title }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "inline-flex text-zinc-800 justify-center rounded-lg border border-zinc-800 bg-zinc-100 px-4 py-2 text-sm font-medium hover:bg-blue hover:text-white transition-all duration-300",
              onClick: closeModal,
              children: "Cerrar"
            }
          ) })
        ] })
      }
    ) }) })
  ] }) }) });
}

const banderaSpain = new Proxy({"src":"/_astro/banderaSpain.DTQxYa4H.webp","width":350,"height":248,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaSpain.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaSpain.webp");
							return target[name];
						}
					});

const banderaCanada = new Proxy({"src":"/_astro/banderaCanada.CM_FZ59B.webp","width":382,"height":231,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaCanada.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaCanada.webp");
							return target[name];
						}
					});

const banderaUsa = new Proxy({"src":"/_astro/banderaUsa.CklaWw2A.webp","width":350,"height":193,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaUsa.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaUsa.webp");
							return target[name];
						}
					});

const banderaChina = new Proxy({"src":"/_astro/banderaChina.WXgw9JzL.webp","width":350,"height":248,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaChina.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/banderaChina.webp");
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.tceimports.com");
const $$SliderHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SliderHome;
  return renderTemplate(_a || (_a = __template(["", '<section class="relative"> <div class="swiper sliderHome w-full max-w-96 my-10"> <div class="swiper-wrapper"> <div class="swiper-slide overflow-hidden flex justify-between items-center gap-4 px-6 py-4 rounded-md shadow-2xl mx-auto border bg-white/70 dark:bg-neutral-800 border-zinc-200 dark:border-zinc-700"> <h2 class="text-orange font-bold text-2xl md:text-4xl">\nAutopartes\n</h2> <div class="dark:text-white"> <svg width="100" height="92" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24.483 51.453 8.162-14.136-8.162-14.135H8.162l-3.11 5.388 2.258 1.303 2.358-4.084h13.311l6.656 11.528-6.656 11.529H9.667L3.01 37.317l2.635-4.564-2.258-1.303L0 37.317l8.161 14.136h16.322Z" fill="currentColor"></path><path d="M16.323 44.776c4.113 0 7.459-3.345 7.459-7.458 0-4.113-3.346-7.459-7.459-7.459-4.112 0-7.458 3.346-7.458 7.459 0 4.112 3.345 7.458 7.458 7.458Zm4.851-7.458a4.859 4.859 0 0 1-3.181 4.555 4.87 4.87 0 0 1-3.183-4.555 4.87 4.87 0 0 1 3.182-4.555 4.86 4.86 0 0 1 3.182 4.555Zm-7.981-3.702a7.431 7.431 0 0 0-.991 3.702c0 1.33.358 2.599.99 3.702a4.841 4.841 0 0 1 0-7.404ZM11.984 55.117.175 70.835 7.882 88.92 27.4 91.288 39.208 75.57 31.5 57.486l-19.517-2.369ZM26.218 88.52 9.691 86.513 3.164 71.197l10-13.31 16.528 2.006 6.527 15.315-10 13.31Z" fill="currentColor"></path><path d="M22.995 65a8.785 8.785 0 0 0-6.77.068 8.786 8.786 0 0 0-4.737 4.835 8.787 8.787 0 0 0 .069 6.77 8.786 8.786 0 0 0 4.834 4.737 8.828 8.828 0 0 0 3.303.645 8.827 8.827 0 0 0 3.466-.713 8.787 8.787 0 0 0 4.738-4.835 8.786 8.786 0 0 0-.068-6.77A8.786 8.786 0 0 0 22.995 65Zm-5.747 2.467a6.23 6.23 0 0 1 2.444-.502c.788 0 1.577.15 2.33.454.583.234 1.118.55 1.594.933a8.966 8.966 0 0 0-5.794.431 8.947 8.947 0 0 0-4.348 3.924 6.26 6.26 0 0 1 .433-1.83 6.197 6.197 0 0 1 3.341-3.41Zm8.231 8.066a6.196 6.196 0 0 1-3.34 3.41 6.197 6.197 0 0 1-4.774.048 6.207 6.207 0 0 1-2.38-1.694 6.33 6.33 0 0 1 3.859-6.115 6.335 6.335 0 0 1 7.06 1.427 6.207 6.207 0 0 1-.425 2.924ZM55.537 48.372l1.708-.505-.739-2.5-.97.286v-3.08l1.71-.506-.74-2.5-.97.286v-3.08l1.71-.506-.74-2.5-.97.286v-3.04l1.844-.545-.739-2.501-1.104.326v-3.08l1.843-.545-.739-2.5-1.104.326v-3.081l1.843-.545-.739-2.5-1.104.326v-2.046h7.462V0h-31.46v14.648h7.462v6.934l-1.843.545.739 2.501 1.104-.326v3.08l-1.843.545.739 2.5 1.104-.326v3.081l-1.843.545.739 2.5 1.104-.326v3.041l-1.978.585.74 2.5L39 41.662v3.08l-1.978.586.739 2.5 1.239-.366v3.08l-1.978.585.739 2.501L39 53.261v3.722h16.536v-8.61Zm-21.39-36.331V2.608H60.39v9.433H34.147Zm7.462 2.607h11.32v2.816l-11.32 3.347v-6.163Zm0 8.883 11.32-3.347v3.08l-11.32 3.347v-3.08Zm0 5.8 11.32-3.347v3.08l-11.32 3.347v-3.08Zm0 5.8 11.32-3.348v3.041l-11.32 3.348V35.13Zm0 5.76 11.32-3.348v3.08l-11.32 3.348v-3.08Zm0 5.8 11.32-3.348v3.08l-11.32 3.348v-3.08Zm0 7.685V52.49l11.32-3.347v5.233H41.61ZM89.642 63.613 100 53.255 77.755 31.01 67.397 41.368l5.276 5.276-4.903 4.903-1.689-.918-1.245 2.29 1.011.55-2.178 2.18-1.689-.92-1.245 2.292 1.011.55-2.178 2.178-1.689-.918-1.245 2.29 1.011.55-2.15 2.15-1.812-.984-1.245 2.29 1.135.618-2.179 2.178-1.812-.985-1.245 2.29 1.134.618-2.178 2.178-1.812-.985-1.245 2.29 1.135.618-2.632 2.631 11.693 11.693 6.089-6.088 1.565.85 1.245-2.29-.888-.483 2.178-2.179 1.566.851 1.245-2.29-.888-.483 2.178-2.179 1.566.851 1.245-2.29-.888-.483 2.15-2.15 1.689.918 1.245-2.291-1.011-.55 2.178-2.179 1.689.919 1.245-2.291-1.011-.55 2.178-2.178 1.689.918 1.245-2.291-1.011-.55 1.446-1.446 5.276 5.276ZM77.755 34.697l18.557 18.558-6.67 6.67-3.432-3.432-5.847-5.847-9.278-9.279 6.67-6.67ZM54.43 84.584l-8.005-8.005 1.333-1.333 10.372 5.638-3.7 3.7Zm5.622-5.623-10.371-5.638 2.178-2.178 10.372 5.638-2.179 2.178Zm4.102-4.1-10.372-5.639 2.178-2.178 10.372 5.638-2.178 2.178Zm4.1-4.102-10.371-5.638 2.15-2.15 10.372 5.638-2.15 2.15Zm4.074-4.073-10.372-5.638 2.178-2.178 10.372 5.638-2.178 2.178Zm4.1-4.1-10.371-5.639 2.178-2.178 10.372 5.638-2.178 2.178Zm4.102-4.102-10.372-5.638 4.358-4.358 4.002 4.002 4.003 4.003-1.991 1.991Z" fill="currentColor"></path></svg> </div> </div> <div class="swiper-slide overflow-hidden flex justify-between items-center gap-4 px-6 py-4 rounded-md shadow-2xl mx-auto border bg-white/70 dark:bg-neutral-800 border-zinc-200 dark:border-zinc-700"> <h2 class="text-orange font-bold text-2xl md:text-4xl">\nTecnologia\n</h2> <div class="dark:text-white"> <svg width="100" height="96" viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M99.8734 9.52502C99.7193 3.73714 95.2005 0.0326032 89.6254 0.0326032C85.9722 0.0326032 82.3117 0.0326032 78.6585 0.0326032C65.1681 0.0326032 51.6777 0.0326032 38.1946 0.0326032C28.7609 0.0326032 19.3272 -0.040754 9.89344 0.0326032C4.27428 0.0766175 0.070912 4.18462 0.0195619 9.83312C-0.0244524 14.1465 0.0195619 18.4599 0.0195619 22.766C0.0195619 34.8112 0.0195619 46.8638 0.0195619 58.9091C0.0195619 64.5796 3.43067 69.3918 9.48998 69.5459C12.1675 69.6119 14.8524 69.5459 17.5299 69.5459C21.8873 69.5459 26.2448 69.5459 30.5948 69.5459C30.5948 73.0597 30.5948 76.5808 30.5948 80.0946C29.5312 80.0946 28.4601 80.0946 27.3965 80.0946C24.961 80.0946 22.5182 80.0946 20.0828 80.0946C18.7403 80.0946 18.733 82.1853 20.0828 82.1853C23.934 82.1853 27.7853 82.1853 31.6365 82.1853C42.3247 82.1853 53.0128 82.1853 63.7009 82.1853C65.2121 82.1853 66.7233 82.1853 68.2344 82.1853C69.6502 82.1853 71.066 82.1853 72.4818 82.1853C74.9173 82.1853 77.36 82.1853 79.7955 82.1853C81.1379 82.1853 81.1453 80.0946 79.7955 80.0946C76.289 80.0946 72.7826 80.0946 69.2834 80.0946C69.2834 76.5808 69.2834 73.0597 69.2834 69.5459C75.7609 69.5459 82.231 69.5459 88.7011 69.5459C89.2879 69.5459 89.8748 69.5459 90.4616 69.5459C94.8337 69.3992 98.7363 66.4795 99.6533 62.1001C99.9247 60.7944 99.8587 59.4446 99.8587 58.1242C99.8587 52.6737 99.8587 47.2306 99.8587 41.7802C99.8734 31.0407 100.159 20.2572 99.8734 9.52502ZM36.1847 80.0946C35.0183 80.0946 33.8592 80.0946 32.6929 80.0946C32.6929 76.6175 32.6929 73.1404 32.6929 69.6633C43.0362 69.6633 53.3723 69.6633 63.7156 69.6633C64.8747 69.6633 66.041 69.6633 67.2074 69.6633C67.2074 73.1404 67.2074 76.6175 67.2074 80.0946C56.8641 80.0946 46.528 80.0946 36.1847 80.0946ZM97.79 59.9801C97.658 64.1175 94.6723 67.3085 90.4763 67.4552C69.7309 67.4552 48.9928 67.4552 28.2474 67.4552C23.5012 67.4552 18.755 67.4552 14.0088 67.4552C10.8177 67.4552 7.25992 67.9247 4.65574 65.6726C1.33265 62.8044 2.11758 57.8674 2.11758 53.9355C2.11758 47.7588 2.11758 41.5895 2.11758 35.4128C2.11758 29.2141 2.11758 23.0154 2.11758 16.8167C2.11758 13.523 1.37667 8.72543 3.12257 5.74713C5.41865 1.84453 9.39461 2.11595 13.2165 2.11595C17.8747 2.11595 22.5256 2.11595 27.1837 2.11595C40.3954 2.11595 53.607 2.11595 66.8186 2.11595C74.6752 2.11595 82.5757 1.84453 90.4323 2.11595C94.555 2.25533 97.636 5.34366 97.79 9.44433C97.8267 10.4273 97.79 11.425 97.79 12.4153C97.79 17.8804 97.79 23.3455 97.79 28.8106C97.79 39.1833 98.1128 49.6147 97.79 59.9801ZM87.366 85.6405C85.8622 84.5768 84.241 84.5914 82.5171 84.5914C77.1767 84.5914 71.8436 84.5914 66.5032 84.5914C50.3059 84.5914 34.1086 84.5914 17.9114 84.5914C13.8914 84.5914 9.84943 84.4594 5.83679 84.5914C2.0809 84.7162 -0.875397 88.0979 0.290982 91.8758C1.14926 94.656 3.68742 95.8151 6.37963 95.8298C19.2171 95.9251 32.0546 95.8298 44.8922 95.8298C57.737 95.8298 70.6039 96.0498 83.4487 95.8298C83.6761 95.8224 83.9035 95.8298 84.1309 95.8298C89.3099 95.507 91.9215 88.8608 87.366 85.6405ZM84.1236 93.7391C74.4844 93.7391 64.8453 93.7391 55.2135 93.7391C40.8648 93.7391 26.5235 93.7391 12.1748 93.7391C9.17454 93.7391 2.11758 94.9055 2.11758 90.2106C2.11758 85.4717 9.40195 86.6821 12.4169 86.6821C26.7509 86.6821 41.0776 86.6821 55.4116 86.6821C62.1604 86.6821 68.9166 86.6821 75.6655 86.6821C78.5411 86.6821 81.6881 86.3153 84.5491 86.7335C88.8405 87.357 88.4003 93.475 84.1236 93.7391ZM96.9391 84.9729C97.4893 83.7698 97.3572 82.3541 96.1982 81.3711C94.9658 80.3294 93.1245 80.1973 92.0975 78.9723C91.8701 78.7009 91.7087 78.2607 91.7234 77.982C91.7234 77.9306 91.7381 77.7766 91.7381 77.7326C91.7527 77.6959 91.8041 77.4905 91.8188 77.4465C91.8848 77.2411 91.8114 77.4171 91.8848 77.2704C91.9655 77.109 92.0608 76.955 92.1635 76.8082C93.0658 75.5538 94.9731 74.901 96.543 74.6002C97.8634 74.3434 97.3059 72.3335 95.9854 72.5829C93.2419 73.111 89.2366 74.989 89.6694 78.4074C89.8454 79.8379 90.8724 80.9383 92.1048 81.6058C92.9264 82.0533 93.8801 82.244 94.643 82.8015C94.8777 82.9703 95.0318 83.139 95.1198 83.2857C95.2152 83.4251 95.2372 83.4984 95.2152 83.6451C95.2152 83.6598 95.2079 83.6818 95.2079 83.7038C95.2005 83.7405 95.1932 83.7772 95.1858 83.8065C95.1712 83.8579 95.1565 83.9092 95.1345 83.9606C95.1345 83.9606 95.1345 83.9606 95.1345 83.9679C95.0831 84.0706 95.0245 84.166 94.9658 84.2687C94.9438 84.3054 94.8924 84.3714 94.8631 84.4154C94.7897 84.5034 94.709 84.5768 94.6283 84.6575C93.7187 84.7602 92.8237 85.1123 92.0828 85.7138C91.1145 86.5061 90.5423 87.6724 90.403 88.9048C90.3296 89.5577 90.3736 90.2326 90.3736 90.8928C90.3736 93.541 92.3983 95.8371 95.1198 95.8371C97.724 95.7931 99.8294 93.6951 99.866 91.0909C99.8734 90.5187 99.8734 89.9465 99.866 89.3743C99.8514 88.2006 99.4406 87.1076 98.6703 86.2126C98.1935 85.6331 97.592 85.237 96.9391 84.9729ZM97.2252 92.7194C96.7557 93.3356 95.9414 93.7244 95.1272 93.7391C93.6453 93.7391 92.4863 92.5067 92.4643 91.0542C92.457 90.526 92.4643 89.9979 92.4643 89.4697C92.4643 88.8022 92.5963 88.2593 93.0218 87.6945C93.8874 86.5574 95.6773 86.3373 96.7777 87.2543C97.3939 87.7605 97.746 88.4647 97.7754 89.2056C97.7974 89.7191 97.7754 90.24 97.7754 90.7535C97.79 91.5237 97.7093 92.0885 97.2252 92.7194ZM93.4913 6.53205C83.6981 6.53205 73.9123 6.53205 64.1191 6.53205C48.494 6.53205 32.8689 6.53205 17.2512 6.53205C13.642 6.53205 10.0328 6.53205 6.42364 6.53205C5.85879 6.53205 5.38197 7.00887 5.38197 7.57372C5.38197 23.4776 5.38197 39.3814 5.38197 55.2852C5.38197 57.5226 5.38197 59.76 5.38197 61.9901C5.38197 62.5549 5.85879 63.0318 6.42364 63.0318C16.2168 63.0318 26.01 63.0318 35.7959 63.0318C51.4209 63.0318 67.046 63.0318 82.6638 63.0318C86.2729 63.0318 89.8821 63.0318 93.4913 63.0318C93.7774 63.0318 93.9901 62.9217 94.1588 62.775C94.1809 62.7603 94.2102 62.7383 94.2322 62.7237C94.2469 62.7016 94.2615 62.6796 94.2836 62.6576C94.4376 62.4889 94.5476 62.2762 94.5476 61.9901C94.5476 46.0862 94.5476 30.1824 94.5476 14.2786C94.5476 12.0412 94.5476 9.80378 94.5476 7.56639C94.533 7.01621 94.0562 6.53205 93.4913 6.53205ZM64.1117 60.9557C48.4867 60.9557 32.8616 60.9557 17.2438 60.9557C13.9794 60.9557 10.7224 60.9557 7.45798 60.9557C7.45798 45.404 7.45798 29.845 7.45798 14.2932C7.45798 12.408 7.45798 10.5153 7.45798 8.63006C16.8991 8.63006 26.3475 8.63006 35.7885 8.63006C51.4136 8.63006 67.0387 8.63006 82.6564 8.63006C85.9208 8.63006 89.1779 8.63006 92.4423 8.63006C92.4423 24.1891 92.4423 39.7409 92.4423 55.2926C92.4423 57.1779 92.4423 59.0705 92.4423 60.9557C83.0012 60.9557 73.5602 60.9557 64.1117 60.9557Z" fill="currentColor"></path> </svg> </div> </div> <div class="swiper-slide overflow-hidden flex justify-between items-center gap-4 px-6 py-4 rounded-md shadow-2xl mx-auto border bg-white/70 dark:bg-neutral-800 border-zinc-200 dark:border-zinc-700"> <h2 class="text-orange font-bold text-2xl md:text-4xl">\nTextiles\n</h2> <div class="dark:text-white"> <svg width="108" height="86" viewBox="0 0 108 86" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.0151 8.02224C24.0151 8.02224 31.3056 20.3712 23.9966 32.2793" stroke="currentColor" stroke-width="6.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M70.4715 3.99979C67.4156 27.4865 40.4474 27.4865 37.3915 3.99979C27.8168 4.74464 4 14.4385 4 14.4385L10.1187 33.5989L23.9186 32.2799V81.9805H53.4801H83.8125V32.2799L97.7914 33.5989L104 14.4385C104 14.4385 80.0462 4.74464 70.4715 3.99979Z" stroke="currentColor" stroke-width="6.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M84.1488 8.02224C84.1488 8.02224 76.8583 20.3712 84.1672 32.2793" stroke="currentColor" stroke-width="6.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M37.3915 3.9993C37.3915 3.9993 53.1888 9.56435 69.9617 3.9993" stroke="currentColor" stroke-width="6.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> </div> <div class="swiper-slide overflow-hidden flex justify-between items-center gap-4 px-6 py-4 rounded-md shadow-2xl mx-auto border bg-white/70 dark:bg-neutral-800 border-zinc-200 dark:border-zinc-700"> <h2 class="text-orange font-bold text-2xl md:text-4xl">\nEquipos Medicos\n</h2> <div class="dark:text-white"> <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M92.4204 14.1379H71.7153V7.57515C71.7129 5.56682 70.9141 3.64141 69.494 2.22131C68.0739 0.801199 66.1485 0.00235031 64.1401 0H35.8554C33.8471 0.00235031 31.9217 0.801199 30.5016 2.22131C29.0815 3.64141 28.2826 5.56682 28.2803 7.57515V14.1379H7.57515C5.56682 14.1403 3.64141 14.9391 2.22131 16.3592C0.801199 17.7793 0.00235031 19.7047 0 21.7131L0 86.3594C0.0370313 87.5233 0.327938 88.665 0.852366 89.7047C1.37679 90.7444 2.12207 91.657 3.03606 92.3785C3.95005 93.1 5.01066 93.6132 6.14369 93.8819C7.27672 94.1507 8.4548 94.1687 9.59549 93.9345C9.72897 93.9357 9.85658 93.9896 9.95056 94.0844C10.0445 94.1792 10.0972 94.3073 10.0972 94.4407C10.0984 95.9136 10.684 97.3258 11.7255 98.3673C12.767 99.4088 14.1792 99.9944 15.6521 99.9956H27.7741C29.2469 99.9944 30.6592 99.4088 31.7006 98.3673C32.7421 97.3258 33.3277 95.9136 33.3289 94.4407C33.3289 94.3743 33.342 94.3084 33.3674 94.247C33.3929 94.1856 33.4302 94.1298 33.4772 94.0828C33.5242 94.0358 33.58 93.9985 33.6414 93.9731C33.7028 93.9476 33.7686 93.9345 33.8351 93.9345H66.1605C66.294 93.9357 66.4216 93.9896 66.5155 94.0844C66.6095 94.1792 66.6622 94.3073 66.6622 94.4407C66.6646 95.9132 67.2506 97.3248 68.2918 98.366C69.333 99.4072 70.7445 99.9932 72.217 99.9956H84.3657C85.8386 99.9944 87.2508 99.4088 88.2923 98.3673C89.3337 97.3258 89.9193 95.9136 89.9205 94.4407C89.9205 94.3743 89.9336 94.3084 89.9591 94.247C89.9845 94.1856 90.0218 94.1298 90.0688 94.0828C90.1158 94.0358 90.1716 93.9985 90.233 93.9731C90.2944 93.9476 90.3602 93.9345 90.4267 93.9345C91.5671 94.1679 92.7447 94.1494 93.8772 93.8803C95.0097 93.6112 96.0697 93.098 96.9831 92.3765C97.8966 91.655 98.6415 90.7427 99.1656 89.7034C99.6898 88.6641 99.9806 87.5228 100.018 86.3594V21.7131C100.014 19.7012 99.212 17.7732 97.7873 16.3527C96.3627 14.9322 94.4322 14.1356 92.4204 14.1379ZM31.313 7.57515C31.3142 6.37079 31.7931 5.21609 32.6447 4.36447C33.4964 3.51285 34.6511 3.0339 35.8554 3.03273H64.1401C65.3453 3.03272 66.5011 3.51116 67.3537 4.3629C68.2063 5.21464 68.6858 6.37002 68.687 7.57515V14.1379H31.313V7.57515ZM96.9673 86.3594C96.9661 87.5645 96.4865 88.7199 95.634 89.5716C94.7814 90.4234 93.6255 90.9018 92.4204 90.9018C89.7562 90.662 86.9855 91.2615 86.87 94.4541C86.87 95.1241 86.6039 95.7668 86.13 96.2406C85.6562 96.7144 85.0136 96.9806 84.3435 96.9806H72.2215C71.5522 96.9794 70.9107 96.7127 70.4378 96.239C69.965 95.7653 69.6994 95.1234 69.6994 94.4541C69.6994 93.5119 69.3251 92.6084 68.659 91.9422C67.9928 91.2761 67.0893 90.9018 66.1472 90.9018H33.8351C32.893 90.9018 31.9895 91.2761 31.3233 91.9422C30.6571 92.6084 30.2828 93.5119 30.2828 94.4541C30.2828 95.1241 30.0167 95.7668 29.5428 96.2406C29.069 96.7144 28.4264 96.9806 27.7563 96.9806H15.6521C14.9828 96.9794 14.3413 96.7127 13.8684 96.239C13.3955 95.7653 13.13 95.1234 13.13 94.4541C13.019 91.257 10.2216 90.6798 7.57515 90.9018C6.37038 90.9006 5.21522 90.4218 4.3629 89.5703C3.51057 88.7189 3.03064 87.5642 3.02828 86.3594V39.3899H14.129C13.8404 41.8765 14.835 44.3852 17.6813 44.443H29.7944C32.6184 44.3852 33.622 41.872 33.3467 39.3899H66.6844C66.4003 41.8765 67.3904 44.3852 70.2367 44.443H82.3587C85.1827 44.3852 86.1862 41.872 85.9109 39.3899H97.0117L96.9673 86.3594ZM17.1706 40.904V34.843C17.1706 34.7095 17.2234 34.5815 17.3173 34.4867C17.4113 34.3919 17.5389 34.338 17.6724 34.3368H29.7944C29.9287 34.3368 30.0574 34.3902 30.1524 34.4851C30.2473 34.58 30.3006 34.7088 30.3006 34.843V40.904C30.3006 40.9705 30.2875 41.0363 30.2621 41.0978C30.2366 41.1592 30.1994 41.215 30.1524 41.262C30.1053 41.309 30.0495 41.3463 29.9881 41.3717C29.9267 41.3971 29.8609 41.4102 29.7944 41.4102H17.6724C17.5389 41.4091 17.4113 41.3552 17.3173 41.2604C17.2234 41.1656 17.1706 41.0375 17.1706 40.904ZM69.6994 40.904V34.843C69.6994 34.7095 69.7521 34.5815 69.8461 34.4867C69.9401 34.3919 70.0677 34.338 70.2012 34.3368H82.3232C82.4574 34.3368 82.5862 34.3902 82.6811 34.4851C82.776 34.58 82.8294 34.7088 82.8294 34.843V40.904C82.8294 40.9705 82.8163 41.0363 82.7908 41.0978C82.7654 41.1592 82.7281 41.215 82.6811 41.262C82.6341 41.309 82.5783 41.3463 82.5169 41.3717C82.4555 41.3971 82.3896 41.4102 82.3232 41.4102H70.2012C70.07 41.4056 69.9458 41.3503 69.8546 41.2558C69.7635 41.1614 69.7126 41.0353 69.7127 40.904H69.6994ZM96.9673 36.3616H85.8665C86.1551 33.875 85.165 31.3663 82.3143 31.3086H70.2012C67.3771 31.3618 66.3781 33.875 66.6489 36.3616H33.3289C33.6175 33.875 32.6273 31.3663 29.7767 31.3086H17.6724C14.8484 31.3618 13.8449 33.875 14.1202 36.3616H3.02828V21.7131C3.03064 20.5083 3.51057 19.3536 4.3629 18.5021C5.21522 17.6506 6.37038 17.1718 7.57515 17.1706H92.4204C93.6255 17.1706 94.7814 17.6491 95.634 18.5008C96.4865 19.3526 96.9661 20.5079 96.9673 21.7131V36.3616ZM64.1401 58.5631H56.565V51.0057C56.565 50.6042 56.4055 50.219 56.1215 49.9351C55.8375 49.6511 55.4524 49.4916 55.0508 49.4916H44.9492C44.5476 49.4916 44.1625 49.6511 43.8785 49.9351C43.5945 50.219 43.435 50.6042 43.435 51.0057V58.5809H35.8554C35.4534 58.5821 35.0683 58.7426 34.7845 59.0272C34.5007 59.3119 34.3413 59.6975 34.3413 60.0995V70.1967C34.3413 70.5983 34.5008 70.9834 34.7848 71.2674C35.0687 71.5513 35.4538 71.7108 35.8554 71.7108H43.435V79.286C43.4344 79.4852 43.4732 79.6826 43.549 79.8668C43.6248 80.051 43.7363 80.2185 43.8769 80.3595C44.0176 80.5006 44.1847 80.6125 44.3687 80.6889C44.5527 80.7653 44.7499 80.8046 44.9492 80.8046H55.0597C55.4617 80.8034 55.8468 80.6429 56.1307 80.3582C56.4145 80.0736 56.5739 79.688 56.5739 79.286V71.7108H64.149C64.5506 71.7108 64.9357 71.5513 65.2197 71.2674C65.5036 70.9834 65.6632 70.5983 65.6632 70.1967V60.0995C65.6632 59.8997 65.6237 59.7018 65.5471 59.5173C65.4706 59.3328 65.3583 59.1652 65.2168 59.0241C65.0753 58.883 64.9074 58.7712 64.7226 58.6952C64.5379 58.6191 64.3399 58.5803 64.1401 58.5809V58.5631ZM62.6082 68.6826H55.0597C54.6577 68.6826 54.2722 68.8419 53.9875 69.1258C53.7028 69.4096 53.5423 69.7947 53.5411 70.1967V77.7719H46.4633V70.1967C46.4633 69.7951 46.3038 69.41 46.0198 69.126C45.7359 68.8421 45.3507 68.6826 44.9492 68.6826H37.374V61.6136H44.9492C45.3507 61.6136 45.7359 61.4541 46.0198 61.1701C46.3038 60.8862 46.4633 60.501 46.4633 60.0995V52.5199H53.5323V60.0995C53.5334 60.5014 53.694 60.8866 53.9786 61.1704C54.2633 61.4542 54.6489 61.6136 55.0508 61.6136H62.6082V68.6826Z" fill="currentColor"></path> </svg> </div> </div> <div class="swiper-slide overflow-hidden flex justify-between items-center gap-4 px-6 py-4 rounded-md shadow-2xl mx-auto border bg-white/70 dark:bg-neutral-800 border-zinc-200 dark:border-zinc-700"> <h2 class="text-orange font-bold text-2xl md:text-4xl">\nJuguetes\n</h2> <div class="dark:text-white"> <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6002 22.4 100 50 100C77.6002 100 100 77.6 100 50C100 22.4 77.6002 0 50 0ZM52.0001 18.4L66.0002 6.80012C74.0003 10.0001 81.2003 15.2 86.4002 22.0002L80.4001 37.6001L65.2 44.0001L52.0001 33.6001V18.4ZM34 6.80012L48.0001 18.4V33.6001L34.8002 44.4002L19.6001 38.0002L13.6 22.0002C18.8001 15.2 25.6001 9.99992 34 6.80012ZM12.4001 76.4001C7.60012 69.6001 4.40011 61.2 4.00001 52.0001L19.2 42L33.2002 48.0001L38.4003 65.2L28.4004 75.6003L12.4001 76.4001ZM63.2001 94.0003C59.2001 95.2002 54.8002 96.0002 50 96.0002C45.1998 96.0002 41.2 95.2002 36.8001 94.0003L32.4 77.2003L41.5999 68.0004H58L67.6 77.6004L63.2001 94.0003ZM70.8003 75.6003L61.2002 65.6003L66.4001 48.0003L80.4003 42.0002L96.0002 52.0001C95.6003 61.2 92.4001 69.6001 87.6003 76.4001L70.8003 75.6003Z" fill="currentColor"></path> </svg> </div> </div> </div> </div> <div class="absolute -top-3/4 sm:-top-1/2 left-0 grid place-items-center grid-cols-2 md:grid-cols-4"> ', " ", " ", " ", ' <!-- <BanderaUsa /> --> </div> </section> <script>\n\nconst swiper = new Swiper(".sliderHome", {\n  effect: "flip",\n  grabCursor: true,\n  loop: true,\n  autoplay: {\n    delay: 2500\n  }\n})\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": banderaUsa, "alt": "bandera de espa\xF1a", "class": "opacity-30 w-2/3", "draggable": "false", "loading": "eager", "format": "webp" }), renderComponent($$result, "Image", $$Image, { "src": banderaCanada, "alt": "bandera de espa\xF1a", "class": "opacity-30 w-2/3", "draggable": "false", "loading": "eager", "format": "webp" }), renderComponent($$result, "Image", $$Image, { "src": banderaChina, "alt": "bandera de espa\xF1a", "class": "opacity-30 w-2/3", "draggable": "false", "loading": "eager", "format": "webp" }), renderComponent($$result, "Image", $$Image, { "src": banderaSpain, "alt": "bandera de espa\xF1a", "class": "opacity-30 w-2/3", "draggable": "false", "loading": "eager", "format": "webp" }));
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/slider/SliderHome.astro", void 0);

function useContador(inicio, fin, velocidad, incremento) {
  const [contador, setContador] = useState(inicio);
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (contador < fin) {
        setContador(contador + incremento);
      } else {
        clearInterval(intervalo);
      }
    }, velocidad);
    return () => clearInterval(intervalo);
  }, [contador]);
  return contador;
}

function ReviewSection() {
  const [reviews, setReviews] = useState(null);
  const contadorEntregas = useContador(0, 4500, 5, 10);
  const contadorClientes = useContador(0, 450, 10, 2);
  const contadorEmpresas = useContador(0, 80, 50, 2);
  const contadorAliados = useContador(0, 10, 500, 2);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tce-cms-strapi-192i.onrender.com/api/reviews?fields[0]=comment&fields[1]=author");
        const result = await response.json();
        if (result.data.length > 0) {
          setReviews(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const statistics = [
    {
      count: contadorEntregas,
      description: "Entregas Exitosas. Precisión y eficiencia en cada operación"
    },
    {
      count: contadorClientes,
      description: "CLIENTES. Confianza y satisfacción en nuestra red."
    },
    {
      count: contadorEmpresas,
      description: "EMPRESAS. Sinergia e innovación en colaboración."
    },
    {
      count: contadorAliados,
      description: "Aliados logtisticos. Amplia cobertura para entregas eficaces."
    }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "about",
      className: "mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full",
      children: /* @__PURE__ */ jsxs("div", { className: "lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 lg:col-start-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-2 text-3xl font-bold text-orange lg:text-4xl", children: "Somos Tu Mejor Aliado en Importaciones" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 dark:text-neutral-400", children: "Importando Sueños desde el 2020" })
          ] }),
          /* @__PURE__ */ jsx(
            Swiper,
            {
              effect: "fade",
              autoplay: {
                delay: 2500
              },
              loop: true,
              slidesPerView: 1,
              modules: [Autoplay, EffectFade],
              className: "mySwiper pl-9 pt-6",
              children: reviews && reviews.map((review) => /* @__PURE__ */ jsxs(SwiperSlide, { className: "relative", children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    stroke: "currentColor",
                    className: "icon icon-tabler icons-tabler-outline icon-tabler-quote absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 rotate-180 transform text-neutral-300 dark:text-neutral-700",
                    children: [
                      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                      /* @__PURE__ */ jsx("path", { d: "M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" }),
                      /* @__PURE__ */ jsx("path", { d: "M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx("p", { className: "text-xl italic text-neutral-800 dark:text-neutral-200", children: JSON.stringify(review.attributes.comment, null, 2) }) }),
                /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 rounded-full bg-zinc-300 p-2", children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      className: "icon icon-tabler icons-tabler-outline icon-tabler-user",
                      children: [
                        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                        /* @__PURE__ */ jsx("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }),
                        /* @__PURE__ */ jsx("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "ms-4 grow", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-neutral-800 dark:text-neutral-200", children: JSON.stringify(review.attributes.author, null, 2) }) })
                ] }) })
              ] }, JSON.stringify(review.id, null, 2)))
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0", children: /* @__PURE__ */ jsx("div", { className: "space-y-6 sm:space-y-8", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700", children: statistics.map((stat, index) => /* @__PURE__ */ jsxs("li", { className: "-m-0.5 flex flex-col p-4 sm:p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl", children: [
            stat.count,
            "+"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 dark:text-neutral-400 sm:text-base", children: stat.description })
        ] }, index)) }) }) })
      ] })
    }
  );
}

function ModalCotizar() {
  let [modal, setModal] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_tc6v2hl", "template_ve232n6", form.current, {
      publicKey: "Nw4KKVA76gHZZRsnx"
    }).then(
      () => {
        setModal(false);
      },
      (error) => {
        setModal(false);
        alert(error.message);
      }
    );
  };
  function closeModal() {
    setModal(false);
  }
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Transition, { appear: true, show: modal, as: Fragment$2, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: closeModal, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$2,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/25" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$2,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all", children: [
            /* @__PURE__ */ jsx(
              Dialog.Title,
              {
                as: "h3",
                className: "mb-6 text-center text-2xl font-bold leading-6 text-zinc-800 dark:text-white",
                children: "Pide Tu Cotización"
              }
            ),
            /* @__PURE__ */ jsx(
              "form",
              {
                ref: form,
                onSubmit: sendEmail,
                className: "contact-form text-center",
                children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-col sm:flex-row", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        className: "rounded-lg border border-neutral-400 outline-none",
                        type: "text",
                        name: "user_name",
                        placeholder: "Tu nombre",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        className: "rounded-lg border border-neutral-400 outline-none",
                        type: "email",
                        name: "user_email",
                        placeholder: "Tu correo",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-col sm:flex-row", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        className: "rounded-lg border border-neutral-400 outline-none",
                        type: "tel",
                        name: "phone_number",
                        placeholder: "Tu telefono",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        className: "rounded-lg border border-neutral-400 outline-none",
                        type: "text",
                        name: "weight",
                        placeholder: "Peso del Producto",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-col sm:flex-row", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        className: "rounded-lg border border-neutral-400 outline-none",
                        type: "number",
                        name: "value",
                        placeholder: "Valor del Producto",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        className: "rounded-lg border border-neutral-400 outline-none",
                        type: "text",
                        name: "product_url",
                        placeholder: "Url del Produto",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      className: "w-full min-h-20 max-h-40 rounded-lg border border-neutral-400 outline-none",
                      name: "order",
                      placeholder: "Escribe tu pedido",
                      required: true
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-center gap-4", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "submit",
                        className: "inline-flex justify-center rounded-lg border border-neutral-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-300 hover:bg-blue hover:text-white",
                        children: "Enviar"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        className: "inline-flex justify-center rounded-lg border border-neutral-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-300 hover:bg-blue hover:text-white",
                        onClick: closeModal,
                        children: "Cerrar"
                      }
                    )
                  ] })
                ] })
              }
            )
          ] })
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 left-1/2 z-50 w-full -translate-x-1/2 px-2 text-center sm:max-w-4xl", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setModal(true),
        className: "bg-blue-600 from-orange-400 to-orange-600 relative inline-block overflow-hidden rounded-md bg-blue px-6 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-blue/60",
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -left-full top-0 block h-[2px] w-full animate-btn_anim1 bg-gradient-to-r from-transparent to-white" }),
          /* @__PURE__ */ jsx("span", { className: "absolute -top-full right-0 block h-full w-[2px] animate-btn_anim2 bg-gradient-to-b from-transparent to-white" }),
          /* @__PURE__ */ jsx("span", { className: "absolute -right-full bottom-0 block h-[2px] w-full animate-btn_anim3 bg-gradient-to-l from-transparent to-white" }),
          /* @__PURE__ */ jsx("span", { className: "absolute -bottom-full left-0 block h-full w-[2px] animate-btn_anim4 bg-gradient-to-t from-transparent to-white" }),
          "¡Contáctanos! Estamos listos para asesorarte completamente GRATIS"
        ]
      }
    ) })
  ] });
}

export { $$HeroSection as $, MyModal as M, ReviewSection as R, ModalCotizar as a, $$SliderHome as b, $$FeaturesGeneral as c, $$FeaturesNavs as d, entregaRapida as e, seguridad as f, $$FAQ as g, heroImage as h, $$HeroSectionAlt as i, soporte as s };
