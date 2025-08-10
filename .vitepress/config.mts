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
      provider: 'local',
      options: {
        detailedView: true
      }
    }
  }
})
