# bryantan.net

The source for [bryantan.net](https://bryantan.net), my personal site and blog. Built with [Docusaurus](https://docusaurus.io/), a static site generator. The site is bilingual (English and 中文).

## Requirements

- Node 20 or newer
- pnpm

## Installation

```console
pnpm install
```

## Local Development

```console
pnpm start
```

This starts a local dev server and opens a browser window. Most changes show up live without a restart.

The dev server runs one language at a time. To preview both languages together, build and serve instead:

```console
pnpm build
pnpm serve
```

## Build

```console
pnpm build
```

This builds the static site into the `build` folder.

## Deployment

The site is hosted on Cloudflare Pages. Pushing to `main` triggers a build and deploy automatically, so there is no manual deploy step.
