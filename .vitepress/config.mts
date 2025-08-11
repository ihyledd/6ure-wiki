import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // --- Site-wide settings stay here ---
  base: '/',
  title: "Home",
  description: "The largest leaking community on Discord for editors!",
  titleTemplate: ':title • 6ure',
  cleanUrls: true,
  lang: 'en-US',
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: 'https://cdn.discordapp.com/icons/1118862694980788276/27f3921db1ab7d2900ffab1ed83ca16a.png?size=1024' }]
  ],

  // --- All theme settings go inside this object ---
  themeConfig: {
    siteTitle: '6ure',
    logo: 'https://cdn.discordapp.com/icons/1118862694980788276/27f3921db1ab7d2900ffab1ed83ca16a.png?size=1024',
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
    }
  }, 
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Windows', link: '/resources/windows' },
          { text: 'MacOs', link: '/resources/macos' },
          { text: 'Extras', link: '/resources/extras' },
        ]
      },
      {
        text: 'Frequently Asked Questions',
        collapsed: false,
        items: [
          { text: 'General Questions', link: '/faq/general' },
        ]
      },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Beginners Guide', link: '/beginners' },
        ]
      },
      {
        text: 'Other',
        collapsed: false,
        items: [
          { text: 'Websites', link: '/websites' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/6ure' }
    ],
    
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    }
  }
})
