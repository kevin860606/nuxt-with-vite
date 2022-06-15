import Vue from 'vue'
import Antd from 'ant-design-vue/lib'

import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.use(Antd)



