import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // --- Site-wide settings stay here ---
  base: '/',
  title: "Home",
  description: "The largest leaking community on Discord for editors!",
  titleTemplate: ':title • 6ure',
  cleanUrls: true,
  lang: 'en-GB',

  head: [
    ['link', { rel: 'icon', href: 'https://github.com/ihyledd/6ure-wiki/blob/49e7f0356144fbe545ca1e9bbbe4de16ab9b4233/assets/Comp%201%20(0-00-00-00).png' }]
  ],

  // --- All theme settings go inside this object ---
  themeConfig: {
    siteTitle: '6ure',
    logo: 'https://github.com/ihyledd/6ure-wiki/blob/49e7f0356144fbe545ca1e9bbbe4de16ab9b4233/assets/Comp%201%20(0-00-00-00).png',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Guides',
        collapsed: true,
        items: [
          { text: 'Moderator Guide', link: '/guide/moderator' },
          { text: 'Community Support Guide', link: '/guide/community-support' },
          { text: 'Partner Manager Guide', link: '/guide/partner-manager' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/6ure' }
    ],
    
    search: {
      provider: 'local'
    },
  }
})
