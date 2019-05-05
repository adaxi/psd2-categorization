import Vue from 'vue'

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

locale.use(lang)

Vue.component(Button.name, Button)
Vue.component(Tag.name, Tag)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Progress.name, Progress)
