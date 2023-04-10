<template>
  <!-- 主页 -->
  <div class="container">
    <!-- 轮播图 -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" v-for="item, index in newes"
          :class="index === 0 ? 'active' : ''" :data-bs-slide-to=index></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item" :class="index === 0 ? 'active' : ''" v-for="item, index in newes">
          <img :src="item.images" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- 轮播图end -->
    <!-- 内容 -->
    <div class="page-content">
      <section class="editor">
        <!-- <h1></h1> -->
      </section>
      <section class="img" v-for="item in admin">
        <a href="javascript:;">
          <img v-lazy="item.imageUrl" alt="">
        </a>
      </section>
      <!-- <div v-for="item in modal">

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target='"#" + item.name'>
          Launch demo modal
        </button>
        <cartmodal :inputName="item" />
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target='"#payment_modal"'>
          Launch demo modal
        </button>
        <payment_modal inputName="payment_modal" /> -->
    </div>
    <!-- 内容end -->
    <!-- new_hot -->

    <div class="product">
      <h1 class="text-center" v-if="discount[0]">
        {{discount[0].cate_name}}
      </h1>
      <div class="product-filter">
        <div class="svg" :class="active === 0 ? 'active' : ''" @click="active = 0">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" xml:space="preserve">
            <rect x="30" y="29" class="st0" width="139" height="29"></rect>
            <rect x="30" y="87" class="st0" width="139" height="29"></rect>
            <rect x="30" y="145" class="st0" width="139" height="29"></rect>
          </svg>
        </div>
        <div class="svg" :class="active === 1 ? 'active' : ''" @click="active = 1">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" xml:space="preserve">
            <rect x="27.5" y="27.5" class="st0" width="145" height="145"></rect>
          </svg>
        </div>
        <div class="svg" :class="active === 2 ? 'active' : ''" @click="active = 2">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" xml:space="preserve">
            <rect x="29" y="34.2" class="st0" width="60.4" height="60.4"></rect>
            <rect x="108" y="34.2" class="st0" width="60.4" height="60.4"></rect>
            <rect x="29" y="109.2" class="st0" width="60.4" height="60.4"></rect>
            <rect x="108" y="109.2" class="st0" width="60.4" height="60.4"></rect>
          </svg>
        </div>
        <div class="svg" :class="active === 3 ? 'active' : ''" @click="active = 3">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" xml:space="preserve">
            <rect x="22" y="29.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="80" y="29.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="138" y="29.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="22" y="82.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="80" y="82.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="138" y="82.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="22" y="134.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="80" y="134.2" class="st0" width="40.8" height="40.8"></rect>
            <rect x="138" y="134.2" class="st0" width="40.8" height="40.8"></rect>
          </svg>
        </div>
        <div class="svg" :class="active === 4 ? 'active' : ''" @click="active = 4">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 200 200" xml:space="preserve">
            <rect x="23" y="29.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="65" y="29.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="106" y="29.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="148" y="29.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="24" y="68.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="66" y="68.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="107" y="68.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="149" y="68.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="24.1" y="106.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="66.1" y="106.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="107.1" y="106.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="149.1" y="106.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="24.1" y="142.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="66.1" y="142.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="107.1" y="142.2" class="st0" width="27.8" height="27.8"></rect>
            <rect x="149.1" y="142.2" class="st0" width="27.8" height="27.8"></rect>
          </svg>
        </div>
      </div>
      <div class="product-row row colum">
        <!-- <div>
                        <img src="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/1LPZao453vWxjyWolQAR86mM/600x-2.jpg.avif"
                            alt="">
                    </div> -->
        <div v-for="item in category_list" :class="classObject">
          <!-- <div style="display: flex; flex: 1 1 auto;"> -->
          <div class="product-wrap" :class="active === 0 ? 'flex-direction' : ''">

            <div class="img " :class="active === 0 ? 'col-3' : ''">
              <a href="javascript:;">
                <img v-lazy="item.images" alt="">
              </a>
            </div>
            <div class="content" :class="active === 0 ? 'col-9' : ''">
              <div class="colflex">
                <div v-if="active === 0" class="action btnactive">
                  <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target='"#m" + item.oig_id'
                    @click.stop="getdetails(item.oig_id)">
                    <i class="far fa-shopping-cart m-r-5"></i> 選購</button>
                </div>
                <div class="col12">
                  <h3>
                    <span class="label">組合優惠</span>{{ item.group_name }}
                    <small>{{item.group_name_sub}}</small>
                  </h3>
                  <div class="price">
                    <!-- <del>123</del> -->
                    <!-- <div v-if="item.price_original_max - item.price_max != 0" > -->
                    <del class="base del">原價$<span class="amount">{{ item.price_original_max
                      | formatNumberToqff }}</span>
                    </del>
                    <b class="special">特價$<span class="amount">{{ item.price_max
                      | formatNumberToqff }}</span> </b>
                    <!-- </div> -->
                    <!-- <div v-else >
                                                <b class="special">售價$<span class="amount">{{ item.price_max
                                                    | formatNumberToqff }}</span> </b>
                                            </div> -->

                  </div>
                  <!-- <p>(平均420/盒)</p> -->
                </div>

                <div v-if="active !== 0" class="action">
                  <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target='"#m" + item.oig_id'
                    @click.stop="getdetails(item.oig_id)">
                    <i class="far fa-shopping-cart m-r-5"></i> 選購</button>
                </div>
              </div>
            </div>

          </div>
          <!-- </div> -->
          <cartmodal :inputName="item" ref="details" />
        </div>
        <div class="sep"></div>

      </div>
    </div>
    <!-- new_hotend -->
    <cart/>
    <!-- 商品 -->
    <router-view />
    <!-- 商品end -->
  </div>
  <!-- 主页end -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import cartmodal from "@/components/modal/modal.vue";
import payment_modal from "@/components/modal/payment-modal.vue";
import { mapState } from "vuex";
import numeral from "numeral";
import cart from "@/components/cart/cart.vue";
import service from '@/store/services/commodity-services';
export default {
  // name: 'HomeView',
  async asyncData({ store }) {
    // await store.dispatch('commodity/getclassification',7)
    },
  components: {
    cartmodal,
    payment_modal,
    cartmodal,
    cart
  },
  data() {
    return {
      list: ['https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/Wqybvx25N9V0nqEgYREOMVPo/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/zXOMxVeg3VXwg48KN8aGjDkP/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/Wqybvx25N9V08pRoYREOMVPo/original-2.jpg.avif'],
      contentImage: ['https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/41brG7JDYpa8rjwd3xW5ywvg/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/ZLjRK1AGl0BE4xeXYV6DPJEw/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/LWx9yMqPlG0RoPXvNEpb1wO7/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/y8Rxg1qMljyZ1rzm3bLe06wn/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/GBnwbKdx3dP56ngB3W7954ej/original-2.jpg.avif', 'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/wP6vpqMBNgL4PnvbYd7DaZ0y/original-2.jpg.avif'],
      name: {
        img: ["https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/1LPZao453vWxjyWolQAR86mM/600x-2.jpg.avif"]
      },
      modal: [
        {
          name: '你好',
          id: 1,
          img: ["https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/wP6vpqMBNgL4PnvbYd7DaZ0y/original-2.jpg.avif", "https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/wP6vpqMBNgL4PnvbYd7DaZ0y/original-2.jpg.avif"]
        },
        {
          name: 'modal2',
          id: 2,
          img: ["https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/1LPZao453vWxjyWolQAR86mM/600x-2.jpg.avif"]
        }
      ],
      active: 2,
      index_newes: [],
      index_discount: [],

    }
  },
  computed: {
    classObject: function () {

      if (this.active === 2) {
        return {
          'col-6': true,
        }
      } else if (this.active === 3) {
        return {
          'col-4': true,
        }
      } else if (this.active === 4) {
        return {
          'col-3': true,
        }
      } else {
        return {
          'col-12': true,
        }
      }
    },
    ...mapState('header', ['discount', 'newes','admin']),
    ...mapState('commodity', ['category_list', 'add_purchase'])
  },
  filters: {
        formatNumberToqff(val) {
            return numeral(val).format('0,0');
        }
    },
  methods: {
    getnewes() {
     
      // console.log(this.index_newes);
    },
    getdetails(e) {
      // console.log(e);
      this.$refs.details.forEach(element => {
        // console.log(element.inputName.oig_id);
        if (element.inputName.oig_id == e) {
          element.getitem();
          // console.log('123');
        }
        // console.log(element.value.oig_id==e);
      })
    },
    addcart(e) {
      if (this.$store.getters['cart/number'] != 0) {

        this.$store.dispatch('cart/add', {
          itemid: e.itemid,
          number: 1,
        }).then(() => {
          $('#app').append(`<div class="notice-warp" id="notice-warp">
              <div class="icon">
                <i class="far fa-check-circle text-success"></i>
              </div>
              <div class="text">
                已加入購物車
              </div>
            </div>`)
          setTimeout(() => {
            $('#notice-warp').remove()
          }, 1500);

        })
      } else {
        $('#app').append(`<div class="notice-warp" id="notice-warp">
          <div class="icon">
            <i class="far fa-times-circle text-danger"></i>
          </div>
          <div class="text">
            請先選擇產品，才可加購
          </div>
        </div>`)
        setTimeout(() => {
          $('#notice-warp').remove()
        }, 1500);
      }
    }
  },
  mounted() {
   
  }
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
