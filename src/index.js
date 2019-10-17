import VueSkipTo from './skip-to.vue'
import VueSkipToList from './skip-to-list.vue'

export default function install (Vue) {
  Vue.component('VueSkipTo', VueSkipTo)
  Vue.component('VueSkipToList', VueSkipToList)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
