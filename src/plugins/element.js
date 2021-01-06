import Vue from "vue";
import {
  Button,
  Carousel,
  CarouselItem,
  Message,
  MessageBox,
  Backtop,
  Input,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Backtop);
Vue.use(Input);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
