<template>
    <div>
        <!-- {{ imges }} -->
        <div class="container">
            <div class="page-content">
                <section class="img" v-for="item in imges">
                    <a href="javascript:;">
                        <img v-lazy="item" alt="">
                    </a>
                </section>
            </div>
            <div class="product">
                <h1 class="text-center">
                    ❤雙鬆瓦片獨享優惠❤
                </h1>
                <div class="discount">
                    <div class="discpunt-list">
                        <h3>
                            <span class="label">滿額免運</span>滿$1300免運(限台灣本島)
                        </h3>
                    </div>
                    <div class="sep"></div>
                </div>
            </div>
            <div class="product">
                <h1 class="text-center">
                    ❤組合任選優惠❤
                </h1>
                <div class="product-filter">
                    <div class="svg" :class="active === 0 ? 'active' : ''" @click="active = 0">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
                            <rect x="30" y="29" class="st0" width="139" height="29"></rect>
                            <rect x="30" y="87" class="st0" width="139" height="29"></rect>
                            <rect x="30" y="145" class="st0" width="139" height="29"></rect>
                        </svg>
                    </div>
                    <div class="svg" :class="active === 1 ? 'active' : ''" @click="active = 1">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
                            <rect x="27.5" y="27.5" class="st0" width="145" height="145"></rect>
                        </svg>
                    </div>
                    <div class="svg" :class="active === 2 ? 'active' : ''" @click="active = 2">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
                            <rect x="29" y="34.2" class="st0" width="60.4" height="60.4"></rect>
                            <rect x="108" y="34.2" class="st0" width="60.4" height="60.4"></rect>
                            <rect x="29" y="109.2" class="st0" width="60.4" height="60.4"></rect>
                            <rect x="108" y="109.2" class="st0" width="60.4" height="60.4"></rect>
                        </svg>
                    </div>
                    <div class="svg" :class="active === 3 ? 'active' : ''" @click="active = 3">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
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
                                        <button type="button" class="btn" data-bs-toggle="modal"
                                            :data-bs-target='"#m" + item.oig_id' @click.stop="getdetails(item.oig_id)">
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
                                        <button type="button" class="btn" data-bs-toggle="modal"
                                            :data-bs-target='"#m" + item.oig_id' @click.stop="getdetails(item.oig_id)">
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
            <div class="product Add-ons">
                <h1 class="text-center">
                    ❤加購其他辣美味❤
                </h1>
                <div class="product-filter">
                    <div class="svg" :class="active === 0 ? 'active' : ''" @click="active = 0">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
                            <rect x="30" y="29" class="st0" width="139" height="29"></rect>
                            <rect x="30" y="87" class="st0" width="139" height="29"></rect>
                            <rect x="30" y="145" class="st0" width="139" height="29"></rect>
                        </svg>
                    </div>
                    <div class="svg" :class="active === 1 ? 'active' : ''" @click="active = 1">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
                            <rect x="27.5" y="27.5" class="st0" width="145" height="145"></rect>
                        </svg>
                    </div>
                    <div class="svg" :class="active === 2 ? 'active' : ''" @click="active = 2">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
                            <rect x="29" y="34.2" class="st0" width="60.4" height="60.4"></rect>
                            <rect x="108" y="34.2" class="st0" width="60.4" height="60.4"></rect>
                            <rect x="29" y="109.2" class="st0" width="60.4" height="60.4"></rect>
                            <rect x="108" y="109.2" class="st0" width="60.4" height="60.4"></rect>
                        </svg>
                    </div>
                    <div class="svg" :class="active === 3 ? 'active' : ''" @click="active = 3">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve">
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
                    <div v-for="item in add_purchase" :class="classObject">
                        <div class="product-wrap" :class="active === 0 ? 'flex-direction' : ''">
                            <div class="img " :class="active === 0 ? 'col-3' : ''">
                                <a href="javascript:;">
                                    <img src="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/1LPZao453vWxjyWolQAR86mM/1200x-2.jpg.avif"
                                        alt="">
                                </a>
                            </div>
                            <div class="content" :class="active === 0 ? 'col-9' : ''">
                                <div class="colflex">
                                    <div v-if="active === 0" class="action btnactive">
                                        <button type="button" class="btn">
                                            <!-- data-bs-toggle="modal" -->
                                            <!-- :data-bs-target='"#" + item.name' -->
                                            <i class="far fa-shopping-cart m-r-5"></i> 選購</button>
                                    </div>
                                    <div class="col12">
                                        <h3><span class="label">組合優惠</span>{{ item.form_name }}<small>{{item.group_name_sub}}</small></h3>
                                        <div class="price">

                                            <div v-if="item.price_original - item.price != 0" >
                                                <del class="base del">原價$<span class="amount">{{ item.price_original
                                                }}</span>
                                                </del>
                                                <b class="special">特價$<span class="amount">{{ item.price }}</span> </b>
                                            </div>
                                            <b v-else class="special">售價$<span class="amount">{{ item.price }}</span> </b>
                                            <!-- <b class="base del">原價$<span class="amount">1497</span> </b>
                                            <b class="special">特價$<span class="amount">1260</span> </b> -->
                                        </div>
                                        <p>(平均420/盒)</p>
                                    </div>

                                    <div v-if="active !== 0" class="action">
                                        <button type="button" class="btn" @click="addcart(item)">
                                            <!-- data-bs-toggle="modal" -->
                                            <!-- :data-bs-target='"#" + item.name' -->
                                            <i class="far fa-shopping-cart m-r-5"></i> 選購</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <cartmodal :inputName="item" /> -->
                    </div>
                    <div class="sep"></div>

                </div>
            </div>
        </div>
        <cart />
    </div>
</template>
<script>
import cartmodal from "@/components/modal/modal.vue";
import cart from "@/components/cart/cart.vue";
import { mapState } from "vuex";
import numeral from "numeral";
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
export default {
    async asyncData({ store }) {
        // for (const key in store.getters['header/cate']) {
        //     if ( store.getters['header/cate'][key].cid == route.params.id) {
        //         // console.log(this.$store.getters['header/cate'][key]);
        //         this.imges=store.getters['header/cate'][key].images.split(", ")
        //         // this.$store.commit('commodity/set_click_categories',this.$store.getters['header/cate'][key]);
        //         // console.log(this.imges);
        //     }
        // }
        // await store.dispatch('commodity/getclassification', this.$route.params.id)
    },
    components: {
        cartmodal,
        cart
    },
    data() {
        return {
            data: [
                {
                    name: 'first',
                    img: ['https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/41brG7JDYpa8rjwd3xW5ywvg/original-2.jpg.avif']
                },
                {
                    name: 'tow',
                    img: ['https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/41brG7JDYpa8rjwd3xW5ywvg/original-2.jpg.avif']
                },
                {
                    name: 'three',
                    img: ['https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/41brG7JDYpa8rjwd3xW5ywvg/original-2.jpg.avif']
                }
            ],
            contentImage: [
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/BW4907rb3b7LqggVlQGK6kwy/original-2.png.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/Gr1Lb8a63Z8o1MevNEAXx24D/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/O5gwrR4GNQX9V5e7lBpn071e/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/wP6vpqMBNgL4DoWdYd7DaZ0y/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/Gr1Lb8a63Z8o1MgKNEAXx24D/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/Gr1Lb8a63Z80zOJwNEAXx24D/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/wP6vpqMBNgLXOEVmYd7DaZ0y/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/BoQZq74kYmabOEPkY5PMywAK/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/zXOMxVeg3VXryoe2N8aGjDkP/original-2.jpg.avif',
            ],
            imges:[],
            active: 2,
        }
    },
    created() {
        // console.log(2);
        // console.log(this.$route.query);
    },
    filters: {
        formatNumberToqff(val) {
            return numeral(val).format('0,0');
        }
    },
    methods: {
        updata_active() {

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


        ...mapState('commodity', ['category_list', 'add_purchase','click_categories'])
    }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>