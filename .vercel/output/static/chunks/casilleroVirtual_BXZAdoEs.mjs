import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, e as renderComponent, g as addAttribute } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_oMYiWkU8.mjs';
import { $ as $$Image } from './_astro_assets_B0EJAZJm.mjs';

const $$Astro$2 = createAstro("https://www.tceimports.com");
const $$MainSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Section title --> <h1 class="mb-4 text-balance text-5xl font-bold tracking-tight text-orange"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/MainSection.astro", void 0);

const $$Astro$1 = createAstro("https://www.tceimports.com");
const $$LeftSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section${addAttribute(`w-full max-w-screen-xl flex items-center justify-evenly gap-8 mb-12`, "class")}> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full max-w-sm  rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/LeftSection.astro", void 0);

const $$Astro = createAstro("https://www.tceimports.com");
const $$RightSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section${addAttribute(`w-full max-w-screen-xl flex flex-row-reverse items-center justify-evenly gap-8 mb-14`, "class")}> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full max-w-sm  rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/components/ui/blocks/RightSection.astro", void 0);

const transporteAereo = new Proxy({"src":"/_astro/transporteAereo.CvyqxUIY.webp","width":402,"height":230,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/transporteAereo.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/transporteAereo.webp");
							return target[name];
						}
					});

const courierCarga = new Proxy({"src":"/_astro/courierCarga.DGSP9hpX.webp","width":331,"height":191,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/courierCarga.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/courierCarga.webp");
							return target[name];
						}
					});

const casilleroVirtual = new Proxy({"src":"/_astro/casilleroVirtual.alCFaFyM.webp","width":402,"height":229,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/casilleroVirtual.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/images/casilleroVirtual.webp");
							return target[name];
						}
					});

export { $$MainSection as $, $$RightSection as a, $$LeftSection as b, courierCarga as c, casilleroVirtual as d, transporteAereo as t };
