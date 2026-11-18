# Response-ability.tech

The archive of the Response-ability Summit (formerly the Anthropology + Technology Conference), 2019–2022: podcast episodes, interviews, articles, talks, speakers and workshops.

It is a static site built with [Eleventy](https://www.11ty.dev/), with search by [Pagefind](https://pagefind.app/), hosted on Cloudflare Pages.

## Where things live

- `src/posts/`: every podcast episode, interview, article, talk, speaker and workshop, one HTML file each. The block at the top of each file (title, date, image, and so on) controls how it appears in lists and search.
- `src/pages/`: the summit pages (2019, 2020, 2021, programme, videos, about, code of conduct).
- `src/index.njk`, `src/podcast.njk`, `src/news.njk`, `src/talks.njk`, `src/speakers.njk`, `src/workshops.njk`, `src/summits.njk`, `src/search.njk`: the home page and section pages.
- `src/_includes/`: the shared layout, header, footer and page templates.
- `src/assets/css/site.css`: all the styles.
- `src/wp-content/uploads/`: images and PDFs from the old WordPress site, kept at their original addresses so old links still work.
- `src/_redirects`: sends old WordPress addresses (ticket pages, categories, authors) somewhere useful.

## Editing

Edit a file on GitHub and commit. Cloudflare rebuilds and publishes the site automatically in a minute or two.

## Building locally

```
npm install
npm run build    # builds into _site/ and creates the search index
npm start        # preview at http://localhost:8080 (search works only after a build)
```

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `_site`
- Environment variable: `NODE_VERSION` = `22`
