import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, e as renderComponent } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { a as $$Icon } from './MainLayout_YHXcNZuR.mjs';

const $$Astro = createAstro("https://www.tceimports.com");
const $$PrimaryCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrimaryCTA;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none hover:-translate-y-1";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-blue";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank"> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </a>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/buttons/PrimaryCTA.astro", void 0);

export { $$PrimaryCTA as $ };
