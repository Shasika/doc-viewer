import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/portfolio/": [
    {
      text: "Portfolio",
      icon: "mdi:account",
      collapsible: true,
      children: [
        "", // This points to portfolio/README.md ("Shasika Madhushan" overview)
        {
          text: "Projects",
          icon: "mdi:briefcase",
          prefix: "projects/",
          collapsible: true,
          children: [
            "project-a.md",
            // Add more projects here
          ],
        },
      ],
    },
  ],
  "/knowledge-base/": [
    {
      text: "Knowledge Base",
      collapsible: true,
      children: [
        "git-fixes.md",
        "laravel.md",
        "vue.md",
        "testing.md",
      ],
    },
  ],

  "/tech-docs/": [
    {
      text: "Tech Docs",
      icon: "mdi:tools",
      collapsible: true,
      children: [
        "apis.md",
        {
          text: "Git",
          prefix: "git/",
          icon: "mdi:git",
          collapsible: true,
          children: [
            "",
            "conventional-commits.md",
            "workflows.md",
          ],
        },
      ],
    },
  ],
});
