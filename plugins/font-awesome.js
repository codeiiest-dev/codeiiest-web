import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faGithub,
  faHtml5,
  faAndroid,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faSearch,
  faUser,
  faKey,
  faCode,
  faRobot,
  faUserSecret

} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false


library.add(faFacebook)
library.add(faGithub)

library.add(faEnvelope)
library.add(faSearch)
library.add(faUser)
library.add(faKey)
// supported platforms

library.add(faCode)
library.add(faRobot)
library.add(faUserSecret)
library.add(faHtml5)
library.add(faAndroid)
library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
