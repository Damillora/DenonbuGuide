---
title: Contributing Guide
---

The source of this guide is available [on GitHub](https://github.com/Damillora/DenonbuGuide). Contributions to the contents of the guide is always welcome!

## How to contribute

### Issues

If you find any problems or have any requests for the guide, open an issue on GitHub and outline the problem or suggestion you have. To create an issue, follow [GitHub's documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) on creating an issue.

### Contributing content

If you want to add content to this guide, open a Pull Request with the changes you are making. You can follow [GitHub's guide](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) on contributing to projects.

Most of this guide lives as Markdown files in the `content` folder. The `src` folder mostly only contains logic for parsing those Markdown files.

### Local development setup

This guide is built with SvelteKit. To run it locally, perform the following steps:

```bash
git clone https://github.com/Damillora/DenonbuGuide
pnpm install
pnpm run dev
```

### Documentation

* [Front matter](/contributing/documentation/front-matter)
