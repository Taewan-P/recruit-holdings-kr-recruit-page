import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";
import starlightThemeRapide from "starlight-theme-rapide";

import compressor from "astro-compressor";

const GA_ID = "G-FN0MY3FD5G";

// https://astro.build/config
export default defineConfig({
  site: "https://recruit-holdings-korec.pages.dev",
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
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
            async: true,
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 
            
            gtag('config', '${GA_ID}');
          `,
        },
      ],
      pagefind: false,
    }),
    compressor(),
  ],
});
