import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingCart,
  faShoppingBag,
  faUtensils,
  faBus,
  faFilm,
  faPlane,
  faHospital,
  faQuestion,
  faBolt,
  faMoneyBillWave,
  faExchangeAlt,
  faCarCrash,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart)
library.add(faShoppingBag)
library.add(faUtensils)
library.add(faBus)
library.add(faFilm)
library.add(faPlane)
library.add(faHospital)
library.add(faQuestion)
library.add(faBolt)
library.add(faMoneyBillWave)
library.add(faExchangeAlt)
library.add(faCarCrash)
library.add(faDollarSign)

Vue.component('font-awesome-icon', FontAwesomeIcon)
