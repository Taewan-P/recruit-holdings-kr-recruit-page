import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type OGImageOptions = Awaited<
  ReturnType<Parameters<typeof OGImageRoute>[0]["getImageOptions"]>
>;

export const allPages = await getCollection("docs");

/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = process.env.SKIP_OG ? [] : allPages;

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(
  paths.map(
    ({ filePath, id, data }) =>
      [filePath, { data, id }] as [
        string,
        Pick<CollectionEntry<"docs">, "data" | "id">,
      ],
  ),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,
  getSlug(_, page: (typeof pages)[string]) {
    return page.id + ".webp";
  },
  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: async (
    _,
    { data, id }: (typeof pages)[string],
  ): Promise<OGImageOptions> => ({
    format: "WEBP",
    quality: 90,
    title: data.title,
    description: data.description,
    logo: {
      path: "./src/pages/open-graph/_images/recruit_korec.png",
      size: [600],
    },
    border: { width: 32, side: "inline-start" },
    padding: 80,
    bgGradient: [[255, 255, 255]],
  }),
});
