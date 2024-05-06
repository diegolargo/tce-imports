/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, f as renderScript, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$MainLayout } from './MainLayout_YHXcNZuR.mjs';
import { $ as $$Image } from './_astro_assets_B0EJAZJm.mjs';
/* empty css                        */

const $$Astro = createAstro("https://www.tceimports.com");
async function getStaticPaths() {
  const response = await fetch(
    "https://tce-cms-strapi-192i.onrender.com/api/blogs?fields[0]=title&fields[1]=description&populate[imgBlog][fields][0]=url"
  );
  const result = await response.json();
  return result.data.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const url = "https://tce-cms-strapi-192i.onrender.com";
  const { post } = Astro2.props;
  const pageTitle = `${post.attributes.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 sm:py-8 lg:py-12"> <div class="mx-auto max-w-screen-xl px-4 md:px-8"> <div class="grid gap-8 md:grid-cols-2 lg:gap-12"> <div> <div class="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto"> ${renderComponent($$result2, "Image", $$Image, { "width": 100, "height": 100, "class": "h-full w-full object-cover object-center", "src": url + post.attributes.imgBlog.data.attributes.url, "alt": post.attributes.title, "draggable": "false", "format": "avif" })} </div> <div id="progress-mobile" class="fixed left-0 top-0 h-2 w-full bg-gradient-to-r from-orange-400/30 to-orange-400 md:hidden"></div> <div id="pin" class="mt-10 hidden space-y-4 md:block"> <div class="h-px w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700"> <div id="progress" class="h-px w-full bg-gradient-to-r from-orange/30 to-orange"></div> </div> <p class="text-pretty text-2xl font-bold text-orange">
Tabla de Contenido
</p> <div id="toc" class=""> <ul class="space-y-2 text-pretty text-base text-neutral-700 transition duration-300 dark:text-neutral-400"></ul> </div> </div> </div> <div class="md:pt-8"> <h1 class="mb-4 text-balance text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl md:mb-6 md:text-left capitalize"> ${post.attributes.title} </h1> <article class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(post.attributes.description)}` })} </article> </div> </div> </div> </section> ` })}  ${renderScript($$result, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/blog/[...id].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/blog/[...id].astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/blog/[...id].astro", void 0);

const $$file = "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/blog/[...id].astro";
const $$url = "/blog/[...id]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
