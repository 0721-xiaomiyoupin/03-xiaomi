import Vue from "vue"
import { NavMenu, Message, MessageBox } from "element-ui"

Vue.use(Message);
Vue.use(MessageBox);
Vue.use(NavMenu)

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert

