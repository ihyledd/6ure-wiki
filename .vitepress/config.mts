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
  ['link', { rel: 'icon', href: 'https://i.postimg.cc/c4GV98V3/Untitled10-Background-Removed.png' }],

  // Load Google Analytics
  [
    'script',
    { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-C4PV8MQQZK' }
  ],
  [
    'script',
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      // Disable automatic page view tracking
      gtag('config', 'G-C4PV8MQQZK', { send_page_view: false });

      // Only count first page view per session
      const sessionKey = 'ga_session_tracked';
      if (!sessionStorage.getItem(sessionKey)) {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_path: window.location.pathname,
        });
        sessionStorage.setItem(sessionKey, 'true');
      }
    `
  ]
],

  // --- All theme settings go inside this object ---
  themeConfig: {
    siteTitle: '6ure™',
    logo: 'https://i.postimg.cc/c4GV98V3/Untitled10-Background-Removed.png',
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
