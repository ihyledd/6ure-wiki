export default {
  enhanceApp() {
    if (typeof window !== 'undefined') {
      const iframe = document.createElement('iframe')
      iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-NB9GK2MR'
      iframe.height = '0'
      iframe.width = '0'
      iframe.style.display = 'none'
      iframe.style.visibility = 'hidden'
      document.body.prepend(iframe)
    }
  }
}
