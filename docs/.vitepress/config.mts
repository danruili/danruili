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
      { text: 'Teaching', items: [
        { text: 'Overview', link: '/teaching/overview' },
        { text: 'Intro to Computer Graphics', link: '/teaching/computer_graphics' },
        { text: 'AI in Architecture Design', link: '/teaching/ai_design' },
        { text: 'Space and Form', link: '/teaching/spatial_design' },
      ] },
      { text: 'About me', link: '/cv' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Home', link: '/' },
    //       { text: 'Research', link: '/research' },
    //       { text: 'CV', link: '/cv' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danruili' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/danrui-li-a4b5a5189/' },
    ]
  }
})

