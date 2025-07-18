import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/doc-viewer/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Tech World",
      description: "Portfolio, Knowledge Base & Software Engineering Resources",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
