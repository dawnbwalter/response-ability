export default function (eleventyConfig) {
  // Old WordPress media keeps its original address, so existing links to images and PDFs still work.
  eleventyConfig.addPassthroughCopy({ "src/wp-content": "wp-content" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });

  const byDateDesc = (a, b) => b.date - a.date;
  const kinds = ["podcast", "interview", "article", "news", "talk", "speaker", "workshop"];
  for (const kind of kinds) {
    eleventyConfig.addCollection(kind, (api) => api.getFilteredByTag(kind).sort(byDateDesc));
  }
  eleventyConfig.addCollection("reading", (api) =>
    api.getAll().filter((p) => ["interview", "article", "news"].includes(p.data.kind)).sort(byDateDesc)
  );
  eleventyConfig.addCollection("podcastByEpisode", (api) =>
    api.getFilteredByTag("podcast").sort((a, b) => (b.data.episode || 0) - (a.data.episode || 0))
  );

  eleventyConfig.addFilter("monthYear", (d) =>
    new Date(d).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("longDate", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("year", (d) => new Date(d).getUTCFullYear());
  eleventyConfig.addFilter("byYear", (items, y) => items.filter((p) => p.data.year === y));
  eleventyConfig.addFilter("limit", (items, n) => items.slice(0, n));
  eleventyConfig.addFilter("withImage", (items) => items.filter((p) => p.data.image));
  eleventyConfig.addFilter("excludeUrl", (items, url) => items.filter((p) => p.url !== url));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk",
  };
}
