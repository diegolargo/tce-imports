/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_CtsUMajg.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, S as SITE } from './MainLayout_YHXcNZuR.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.tceimports.com");
const $$Comment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comment;
  const pageTitle = `Dejar una Rese\xF1a | ${SITE.title}`;
  return renderTemplate(_a || (_a = __template(["", ` <script>

    if (localStorage.getItem('comment') == null) {
        document.getElementById("formCommentUser").addEventListener("submit", function (event) {
            event.preventDefault();

            const data = {
                data: {
                author: document.getElementById("author").value,
                comment: document.getElementById("comment").value,
                },
            };

            const options = {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                
                body: JSON.stringify(data),
            };

            fetch("https://tce-cms-strapi-192i.onrender.com/api/reviews", options)
                .then((response) => {
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                return response.json();
                })
                .then(() => {
                    localStorage.setItem('comment', true)
                    window.location.href = '/';
                })
                .catch((error) => console.error("Error:", error));
            });
    } else {
        window.location.href = '/';
    }

<\/script>`], ["", ` <script>

    if (localStorage.getItem('comment') == null) {
        document.getElementById("formCommentUser").addEventListener("submit", function (event) {
            event.preventDefault();

            const data = {
                data: {
                author: document.getElementById("author").value,
                comment: document.getElementById("comment").value,
                },
            };

            const options = {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                
                body: JSON.stringify(data),
            };

            fetch("https://tce-cms-strapi-192i.onrender.com/api/reviews", options)
                .then((response) => {
                if (!response.ok) {
                    throw new Error(\\\`HTTP error! status: \\\${response.status}\\\`);
                }
                return response.json();
                })
                .then(() => {
                    localStorage.setItem('comment', true)
                    window.location.href = '/';
                })
                .catch((error) => console.error("Error:", error));
            });
    } else {
        window.location.href = '/';
    }

<\/script>`])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-screen w-full items-center justify-center"> <form id="formCommentUser" class="flex w-full max-w-md flex-col gap-4 rounded-lg border p-6 shadow-2xl dark:border-neutral-600 dark:text-white"> <div> <label for="author" class="text-xl font-semibold">Nombre Completo:</label><br> <input type="text" id="author" name="author" class="w-full rounded-lg dark:text-black"><br> </div> <div> <label for="comment" class="text-xl font-semibold">Comentario:</label><br> <textarea name="comment" id="comment" class="max-h-40 min-h-20 w-full rounded-lg dark:text-black"></textarea> </div> <input type="submit" value="Enviar" class="mx-auto w-fit rounded-lg bg-blue px-6 py-3 text-white shadow-2xl hover:shadow-blue/70"> </form> </div> ` }));
}, "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/comment.astro", void 0);

const $$file = "C:/Users/deiby/Desktop/deiby-proyectos/astro/web-importaciones/frontend/src/pages/comment.astro";
const $$url = "/comment";

export { $$Comment as default, $$file as file, $$url as url };
