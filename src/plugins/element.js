import Vue from "vue";
import { Pagination, Message, MessageBox } from "element-ui";

Vue.use(Message);
Vue.use(MessageBox);
Vue.use(Pagination);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
