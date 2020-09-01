import Vue from 'vue'
import {
Pagination,
  Dialog,
  Input,
  Tag,
  Aside,
  Main,
  Container,
  Backtop,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Notification,
  Message,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form
} from 'element-ui';
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Tag);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Container);
Vue.use(Backtop);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;