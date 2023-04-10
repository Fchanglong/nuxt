<template>
    <div class="head">
        <!-- {{ cate }} -->
        <nav class="navbar navbar-expand-xl">
            <div class="container">
                <button class="navbar-toggler " @click="toggleMenu($event);" :class="flay ? '' : 'collapsed'">
                    <span class="icon-bar bar1"></span>
                    <span class="icon-bar bar2"></span>
                    <span class="icon-bar bar3"></span>
                </button>
                <div class="navbar-brand">
                    <span class="display-desktop">
                        <a href="javascript:;" @click="goindex()">
                            <img class=""
                                src="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/v5zx6meKY4zrrbbbl0DVkLyo/original-2.jpg.webp"
                                srcset="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/v5zx6meKY4zrrbbbl0DVkLyo/150x-2.jpg.webp 150w, https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/v5zx6meKY4zrrbbbl0DVkLyo/original-2.jpg.webp 216w"
                                width="216" height="200">
                        </a>
                    </span>
                    <div class="display-mobile">
                        <a href="javascript:;" @click="goindex()">
                            <img class=""
                                src="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/5yxD7ZmWlkv88x0R3XgBqvRQ/original-2.jpg.webp"
                                srcset="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/5yxD7ZmWlkv88x0R3XgBqvRQ/original-2.jpg.webp 54w"
                                width="54" height="50">
                        </a>
                    </div>
                </div>
                <a href="javascript:;" @click="gocart()" class="display-mobile menu-cart">
                    <i class="far fa-shopping-cart"></i>
                    <span v-if="number !== 0" class="cart-badge hide">{{ number }}</span>
                </a>
                <div class="navbar-collapse " id="menu" :class="flay ? '' : 'collapsed'">
                    <div class="display-mobile">
                        <a class="mobile-brand" href="javascript:;" @click="goindex()">
                            <img class=""
                                src="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/5yxD7ZmWlkv88x0R3XgBqvRQ/original-2.jpg.webp"
                                srcset="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/5yxD7ZmWlkv88x0R3XgBqvRQ/original-2.jpg.webp 54w"
                                width="54" height="50">
                        </a>
                    </div>
                    <div class="wrap">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-for="item in cate">
                                <a class="nav-link header-menu-0" @click="subMenu($event); goproductList(item)">
                                    {{ item.cate_name }}
                                    <!-- <i class="far fa-chevron-down"></i> -->
                                </a>
                                <!-- <ul class="sub">
                                    <li>
                                        <a href="javascript:;" @click="goproductList()" class="header-menu-0-0">🔥扒扒飯X武松殿聯合新品-雙鬆瓦片</a>
                                    </li>
                                </ul> -->
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link header-menu-0" @click="subMenu($event)">
                                    ｜聯名商品｜
                                    <i class="far fa-chevron-down"></i>
                                </a>
                                <ul class="sub">
                                    <li>
                                        <a href="javascript:;" @click="goproductList()" class="header-menu-0-0">🔥扒扒飯X武松殿聯合新品-雙鬆瓦片</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " @click="subMenu($event)">
                                    ｜常溫-爆料醬菜｜
                                    <i class="far fa-chevron-down"></i>
                                </a>
                                <ul class="sub">
                                    <li><a href="javascript:;" @click="goproductList()">NEW⚡️花椒泡菜辣筍</a>
                                    </li>
                                    <li><a href="javascript:;" @click="goproductList()">招牌👑原味雙椒醬</a>
                                    </li>
                                    <li><a href="javascript:;" @click="goproductList()">泰式檸檬雙椒醬</a></li>
                                    <li><a href="javascript:;" @click="goproductList()">麻辣花椒泡菜</a></li>
                                    <li><a href="javascript:;" @click="goproductList()">咔啦扒扒鬆</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="subMenu($event)">
                                    ｜常溫-方便料理｜
                                    <i class="far fa-chevron-down"></i>
                                </a>
                                <ul class="sub">
                                    <li><a href="javascript:;" @click="goproductList()">NEW⚡️泰椒酸辣蒟蒻麵</a></li>
                                    <li><a href="javascript:;" @click="goproductList()">NEW⚡️【常溫】波波滷肉鍋</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " @click="subMenu($event)">
                                    ｜冷凍-下飯料理｜
                                    <i class="far fa-chevron-down"></i>
                                </a>
                                <ul class="sub">
                                    <li><a href="javascript:;" @click="goproductList()">NEW⚡️泰椒酸辣花枝丸</a></li>
                                    <li><a href="javascript:;" @click="goproductList()">NEW⚡️雙椒辣牛腱/醋溜辣牛筋</a></li>
                                    <li><a href="javascript:;" @click="goproductList()">熱銷🔥雙椒辣香腸</a></li>
                                    <li><a href="javascript:;" @click="goproductList()">雙椒辣肉粽/泰式檸檬海鮮粽</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link header-menu-4" href="javascript:;" @click="goNutritionLabeling()">｜營養標示｜</a>
                            </li> -->
                            <li class="nav-item display-inline-desktop">
                                <a class="nav-link menu-cart" href="javascript:;" @click="gocart()">
                                    <i class="far fa-shopping-cart"></i>
                                    <span v-if="number !== 0" class="cart-badge hide">{{ number }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="menu-back" :style="flay ? 'display:block' : 'display: none'" @click="toggleMenu($event);">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import request from '@/util/request.js';
let $;
if (typeof window !== 'undefined') {
    // 在这里使用 jQuery
    $ = require('jquery')
}
// import $ from 'jquery'
import { mapState } from "vuex";
export default {
    async asyncData({ store }) {
        // 调用 Vuex action 以获取产品列表
        // await store.dispatch('products/fetchProducts')
        // await store.dispatch('header/get');
        // console.log(1);

        // await this.$store.dispatch('header/get');
        // await store.dispatch('header/get');
        // await store.dispatch('header/getadmin');
        //  store.dispatch("getCount");
    },
    data() {
        return {
            flay: false,
        }
    },
    computed: {
        // ...mapState("cart",
        //     {
        //         count:'count'
        //     }),
        ...mapState('header', ['cate', 'website']),
        ...mapState('cart', ['number']),
    },
    created() {
        // this.$store.dispatch("header/get").then((e)=>{
        //     // console.log(e);
        // });
        // console.log(this.$store.state.cart.count);
    },
    methods: {
        toggleMenu(a) {
            // console.log(a);
            this.flay = !this.flay;
            if (!this.flay) {
                $("body").removeClass("modal-open menu-open")
            } else {
                $("body").addClass("modal-open menu-open")

            }
        },
        subMenu(e) {

            // console.log(e.target);
            $(e.target).closest("li").is(".open") ? $(e.target).closest("li").removeClass("open") : $(e.target).closest("li").addClass("open").siblings("li").removeClass("open")
        },
        gocart() {
            this.$router.push({
                path: `/cart`
            }).catch(err => { })
        },
        goNutritionLabeling() {
            this.$router.push({
                path: `/nutritionLabeling`
            }).catch(err => { })
        },
        goproductList(e) {
            $("body").removeClass("modal-open menu-open");
            this.flay = false;
            // console.log(e);
            this.$store.dispatch('commodity/getclassification', e.cid).then(() => {
                this.$router.push({
                    path: `/productList/${e.cid}/${e.cate_name}`,
                }).catch(err => { })
            })
        },
        goindex() {
            this.$router.push({
                path: `/`
            }).catch(err => { })
        },

    },
    mounted() {
        
        this.$store.dispatch('header/get');
        // // console.log(1);
        // this.$store.dispatch('header/getadmin');
    }
}
</script>
<style lang="scss" src="./header.scss" scoped></style>