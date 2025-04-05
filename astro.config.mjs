import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";
import starlightThemeRapide from "starlight-theme-rapide";

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
      social: {
        github: "https://github.com/Taewan-P/recruit-holdings-kr-recruit-page",
      },
      pagefind: false,
    }),
  ],
});
