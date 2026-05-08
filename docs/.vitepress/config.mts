import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Danrui Li",
  description: "Personal website of Danrui Li",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Research', link: '/#research' },
      { text: 'Teaching', link: '/#teaching' },
      { text: 'Work', link: '/#work' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Home', link: '/' },
    //       { text: 'Research', link: '/research' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danruili' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/danrui-li-a4b5a5189/' },
    ]
  }
})

