import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faPlusSquare, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faAngleDown, faAngleLeft, faAngleRight, faPlusSquare, faMapMarkerAlt, faTimes, faFacebookSquare, faInstagram, faTwitterSquare)

// Register the component globally
// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('font-awesome-icon', FontAwesomeIcon)
