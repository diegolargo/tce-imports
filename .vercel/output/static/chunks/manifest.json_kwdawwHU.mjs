import { g as getImage } from './_astro_assets_B0EJAZJm.mjs';
import { i as icon } from './icon_CvixkT9x.mjs';

const sizes = [165, 98];
const favicons = [
  {
    purpose: "any",
    src: icon,
    sizes
  }
];
const GET = async () => {
  const icons = await Promise.all(
    favicons.flatMap(
      (favicon) => favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png"
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose
        };
      })
    )
  );
  const manifest = {
    short_name: "TCE Imports",
    name: "TCE Imports",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#FFEDD5",
    background_color: "#262626"
  };
  return new Response(JSON.stringify(manifest));
};

export { GET };
