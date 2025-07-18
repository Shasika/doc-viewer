import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/portfolio/": [
    {
      text: "Portfolio",
      collapsible: true,
      children: [
        "project-a.md", // or add more like "project-b.md"
      ],
    },
  ],

  "/knowledge-base/": [
    {
      text: "Knowledge Base",
      collapsible: true,
      children: [
        "laravel.md",
        "vue.md",
        "testing.md",
      ],
    },
  ],

  "/tech-docs/": [
    {
      text: "Tech Docs",
      collapsible: true,
      children: [
        "apis.md",
        {
          text: "Git",
          prefix: "git/",
          collapsible: true,
          children: [
            "",
            "conventional-commits.md",
          ],
        },
        "workflows.md",
      ],
    },
  ],
});
