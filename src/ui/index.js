import Vue from 'vue'

// Element UI
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Progress,
  Table,
  TableColumn,
  Tag
} from 'element-ui'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// ApexCharts
import ApexCharts from 'vue-apexcharts'

// Font Awesome
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

// Element UI
locale.use(lang)

Vue.component(Button.name, Button)
Vue.component(Tag.name, Tag)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Progress.name, Progress)

// Apex charts
Vue.component('chart', ApexCharts)

// Font Awesome
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
