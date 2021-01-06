import Vue from 'vue'
import { Button, Message, MessageBox, Backtop, Input } from 'element-ui'

Vue.use(Button)
Vue.use(Backtop)
Vue.use(Input)
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
