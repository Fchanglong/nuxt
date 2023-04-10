<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <topHeader />
    <router-view class="max-w-900" :key="$route.fullPath" />
    <bottomFooter />
    <fixed />

    <!-- <div class="notice-warp disaply" id="notice-warp">
      <div class="icon">
        <i class="far fa-times-circle text-danger"></i>
      </div>
      <div class="text">
        請先選擇產品，才可加購
      </div>
    </div> -->
  </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式 
// import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js
import topHeader from "@/components/header/header.vue";
import bottomFooter from "@/components/footer/footer.vue";
import fixed from "@/components/footerFixed/fixed.vue";
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
export default {
  components: {
    topHeader,
    fixed,
    bottomFooter
  },
  created() {
    // console.log(true ? 1: false ? 2 : 3);
    console.log(1233333);
  },
  mounted() {
    // if (this.$route.name == 'please') {
    //   // console.log(1);
    //   $('.nextStep').addClass('display')
    // }

    if (this.$route.name !== 'please') {
    $('.nextStep').removeClass('display')
  } else {
    $('.nextStep').addClass('display')
  }
    // this.$store.dispatch('order/get')
    // this.$store.dispatch('commodity/getadd_purchase')
    // console.log(this.$route.name);
    // console.log($('.nextStep'));
  }
};
</script>
<!-- <style  src="@/assets/css/style.min.css"></style> -->
<style  src="@/assets/css/icon.css">

</style>
<style lang="scss">

html,
body {
  font-family: "Microsoft JhengHei","微軟正黑體","微软雅黑","Helvetica Neue",Helvetica,Arial,sans-serif;
}
#app {
  color: #575a5d;
  font-weight: normal;
  font-family: "Microsoft JhengHei", "微軟正黑體", "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #f5f6f7;
.disaply{
display: none;
}
  .container {
    // padding: 0;
  }

  .max-w-900 {
    max-width: 900px;
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  .sep {
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, .2), transparent);
    height: 1px;
  }

  .notice-warp {
    background-color: rgba(0, 0, 0, .7);
    border-radius: 5px;
    color: #fff;
    left: 50%;
    padding: 20px;
    position: fixed;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    z-index: 2002;

    .icon {
      font-size: 28px;
      line-height: 30px;
      margin-bottom: 5px;
      margin-top: 5px;

      .progress-circle-indeterminate {
        height: 30px;
        width: 30px;
      }
    }

    .text-info {
      color: #0084ff !important;
    }
  }
}
@media (max-width: 576px) {
  #app{
    .container {
        padding: 0 ;
    }
  }
}
</style>
