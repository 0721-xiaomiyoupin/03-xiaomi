import Vue from "vue"

// 自定义回到顶部指令
Vue.directive('to-top', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // console.log(el);
    el.addEventListener('click', () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      window.pageYOffset = 0
    })
  },
})