import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";
import starlightThemeRapide from "starlight-theme-rapide";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "리크루트 홀딩스 x KOREC 채용공고",
      defaultLocale: "ko",
      social: {
        github: "https://github.com/Taewan-P/recruit-holdings-kr-recruit-page",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            as: "style",
            crossOrigin: "anonymous",
            href: "https://unpkg.com/pretendard@1.3.9/dist/web/static/pretendard-dynamic-subset.css",
          },
        },
      ],
      pagefind: false,
    }),
    compressor(),
  ],
});
