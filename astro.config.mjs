import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

import compressor from "astro-compressor";

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
      components: {
        Head: "./src/components/Head.astro",
        SkipLink: "./src/components/SkipLink.astro",
      },
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
          content: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P6VTBRLJ');
          `,
        },
      ],
      pagefind: false,
    }),
    compressor(),
  ],
});
