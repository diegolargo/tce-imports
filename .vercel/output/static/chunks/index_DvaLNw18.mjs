/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, g as addAttribute } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$MainLayout, S as SITE } from './MainLayout_YHXcNZuR.mjs';
import { $ as $$Image } from './_astro_assets_B0EJAZJm.mjs';

const $$Astro = createAstro("https://www.tceimports.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "TCE IMPORTS BLOG";
  const subTitle = "Explore our blog for helpful information and tips on importing and shipping internationally. From step-by-step guides to the latest trends in global trade, our blog is your trusted resource for staying up-to-date in the world of imports and shipping.";
  const pageTitle = `Blog | ${SITE.title}`;
  const response = await fetch(
    "https://tce-cms-strapi-192i.onrender.com/api/blogs?fields[0]=title&fields[1]=description&populate[imgBlog][fields][0]=url"
  );
  const result = await response.json();
  const url = "https://tce-cms-strapi-192i.onrender.com";
  console.log(result.data[0].attributes.imgBlog.data.attributes.url);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.tceimports.com/services",
    url: "https://www.tceimports.com/services",
    name: "Services | TCE IMPORTS",
    description: "Discover how at TCE Imports we turn your wishes into reality, importing the best products from the United States to Colombia.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.tceimports.com/",
      name: "TCE IMPORTS",
      description: "Discover how at TCE Imports we turn your wishes into reality, importing the best products from the United States to Colombia."
    },
    inLanguage: "en-EN"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${result.data.map((blog) => renderTemplate`<a class="group rounded-xl outline-none ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(`/blog/${blog.id}/`, "href")}> <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]"> ${renderComponent($$result2, "Image", $$Image, { "width": 100, "height": 100, "class": "absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105", "src": url + blog.attributes.imgBlog.data.attributes.url, "alt": blog.attributes.title, "draggable": "false", "format": "avif" })} </div> <div class="mt-7"> <h3 class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"> ${blog.attributes.title} </h3> <p class="text-orange-400 dark:text-white mt-5 inline-flex items-center gap-x-1 font-medium decoration-2 group-hover:underline">
Read More
${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowRightStatic" })} </p> </div> </a>`)} </div> </section> ` })}`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/en/blog/index.astro", void 0);

const $$file = "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

export { $$Index as default, $$file as file, $$url as url };
