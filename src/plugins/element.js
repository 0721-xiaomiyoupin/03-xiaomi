import Vue from "vue";
import {
  Pagination,
  Button,
  Carousel,
  CarouselItem,
  Message,
  MessageBox,
  Backtop,
  Input,
  InputNumber,
  Tabs,
  TabPane,
  Dialog,
} from "element-ui";
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Backtop);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Dialog);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
