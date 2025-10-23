import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // --- Site-wide settings stay here ---
  base: '/',
  title: "Home",
  description: "The largest leaking community on Discord for editors!",
  titleTemplate: ':title • 6ure™',
  cleanUrls: true,
  lang: 'en-US',
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '![6ure](/assets/Comp%201%20(0-00-00-00).png)' }]
  ],

  // --- All theme settings go inside this object ---
  themeConfig: {
    siteTitle: '6ure™',
    logo: '![6ure](/assets/Comp%201%20(0-00-00-00).png)',
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
      },
      {
        text: 'Information',
        collapsed: false,
        items: [
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'Terms of Service', link: '/tos' },
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
