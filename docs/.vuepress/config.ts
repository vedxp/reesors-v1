import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export = defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "Reesors",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    status: 'This version has been deprecated, visit the maintained version!',
    enableDarkMode: true,
    smoothScroll: true,
    repo: "VedxP/reesors-v1",
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page!',
    logo: "/logo.png",
    activeHeaderLinks: false,

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      "/sections": [
        {
          title: "All Sections",
          collapsable: false,
          children: [
          "/sections/",
          "/sections/app",
          "/sections/color",
          "/sections/action",
          "/sections/icon",
          "/sections/illustration",
          "/sections/image",
          "/sections/learning",
          "/sections/misc",
          "/sections/mockup",
          "sections/tool",
          "/sections/typeface",
          "/sections/vue",
          "/sections/webtool"
          ]
        }
      ]
    }
  }
}))
