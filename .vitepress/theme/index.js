// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import PopupLayout from './PopupLayout.vue'

export default {
  ...DefaultTheme,
  Layout: PopupLayout
}
