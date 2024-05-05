import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tceimports.com",
  image: {
    domains: ["tceimports.com"]
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es"
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        es: "es",
        en: "en"
      }
    }
  }), starlight({
    title: "Tce Imports",
    defaultLocale: "root",
    locales: {
      root: {
        label: "Español",
        lang: "es"
      },
      es: {
        label: "Español",
        lang: "es"
      },
      en: {
        label: "Ingles",
        lang: "en"
      }
    },
    disable404Route: true,
    customCss: ["./src/styles/starlight.css"],
    favicon: "/favicon.ico",
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: "https://www.tceimports.com" + "/social.webp"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: "https://www.tceimports.com" + "/social.webp"
      }
    }]
  }), compressor({
    gzip: false,
    brotli: true
  }), react()],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: vercelStatic()
});