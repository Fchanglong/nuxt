<template>
    <div class="container">
        <!-- {{ cart_list_item }} -->
        <div class="cart">
            <h1 class="text-center">目前已經選購</h1>
            <div class="card " id="cart-section">
                <div class="cart-content">
                    <div v-if="number == 0" class="cart-item cart-empty">尚無選購產品。</div>
                    <div v-else class="cart-item clearfix" data-item="0" data-qty="1" v-for="item in cart_list_item">
                        <div class="item-tool">
                            <button type="button" class="btn" @click="del(item)">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                        <div class="item-img">


                            <div class="img-square-wrap"><img
                                    class="img-square img-thumbnail lazyautosizes ls-is-cached lazyloaded"
                                    :src="item.display_img_small">
                            </div>

                        </div>
                        <div class="item-content clearfix">
                            <div class="detail">
                                <h4>

                                    {{ item.form_name }}
                                    <small class="text-complete"></small>
                                </h4>

                                <div class="meta">
                                    <span class="each-price">
                                        <!-- <span class="m-r-5">
                                            <span class="del">
                                                <small class="currency">NT$</small>
                                                <span class="amount">250</span>
                                            </span>
                                        </span> -->
                                        <small class="currency">NT$</small>
                                        <span class="amount">{{ item.price }}</span>
                                        <span>*</span>
                                    </span>
                                    <span class="text-danger num">{{ item.num }}</span>

                                </div>


                                <div class="quantity" data-type="input">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <button class="btn" type="button" @click="reduce(item)">-</button>
                                        </div>
                                        <input type="text" class="form-control text-center qty" name="Quantity"
                                            :value="item.num" min="1" max="" readonly="">
                                        <div class="input-group-btn">
                                            <button class="btn" type="button" @click="add(item)">+</button>
                                        </div>
                                    </div>
                                    <div class="error"></div>
                                </div>

                            </div>
                            <div class="price" data-price="230">


                                <small class="currency">NT$</small>
                                <span class="amount" data-amount="230">{{ item.total }}</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-add-wrap"></div>
                <div v-if="number !== 0" class="cart-discount">
                    <div class="discount">
                        <div class="discount-head">未使用優惠</div>
                        <div class="discount-each">
                            <span class="discount-badge" :class="cart_list.shipment == 0 ? 'discount-badge-y' : ''">滿額免運</span>
                            <span class="discount-text">
                                <span class="discount-title">滿${{ cart_list.shipment_upper_money }}免運(限台灣本島)</span>
                                <span class="discount-remark" v-if="cart_list.shipment != 0">再買 <b>NT$
                                        {{ cart_list.shipment }}</b> 即可享有 <b>免運優惠</b></span>
                                <!-- <span v-else><b>免運</b></span> -->
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="cart-coupon-wrap">
                    <div class="row row-0">
                        <div class="col-md-6 col-12"></div>
                        <div class="col-md-6 col-12">
                            <div class="coupon-warp">
                                <div class="show-coupon"><a onclick="showCouponForm(this)">使用優惠券</a></div>
                                <div class="cart-coupon hide">
                                    <div class="input-group form-block"><input type="text" class="form-control"
                                            placeholder="請輸入優惠碼..." name="CouponNumber">
                                        <div class="input-group-append"><button
                                                class="btn btn-cons loading-dark submit m-r-0" type="button"
                                                onclick="submitCouponNumber(this)">使用優惠券</button></div>
                                    </div>
                                    <div class="error"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div v-if="number !== 0" class="cart-total ">
                    <div class="row">
                        <div class="col preferential">
                            <a href="javascript:;" @click="preferential = !preferential">使用優惠券</a>
                        </div>
                        <div class="col"></div>
                        <div class="col-12 " :class="preferential ? '' : 'display'">
                            <div class="pd-10">
                                <div class="input-group form-block">
                                    <input type="text" class="form-control" placeholder="請輸入優惠券號碼" name="CouponNumber">
                                    <div class="input-group-append">
                                        <button class="btn" type="button">使用優惠券</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text">
                            小計
                        </div>
                        <div class="price col">
                            <small class="currency">NT$</small>
                            <span class="amount" data-amount="0">{{ cart_list.total | formatNumberToqff }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-checkout">
                <button :disabled="number == 0" type="button" class="btn btn-rounded btn-lg btn-primary btn-block"
                    data-bs-toggle="modal" :data-bs-target='"#payment_modal"'>
                    <i class="far fa-hand-pointer m-r-5"></i> 立即結帳
                </button>
            </div>
            <div class="sep">
            </div>
        </div>
        <div class="question">
            <div class="question-textcentr">
                如有任何問題
            </div>
            <div class="question-btn">
                <button type="button" @click="openContact('line')"
                    class="btn btn-rounded btn-lg btn-primary btn-block color-line">
                    <i class="far fa-hand-pointer m-r-5"></i>
                    洽詢 LINE 客服
                </button>
                <button type="button" @click="openContact('facebook')"
                    class="btn btn-rounded btn-lg btn-primary btn-block color-fb">
                    <i class="far fa-hand-pointer m-r-5"></i>
                    洽詢 Facebook 客服
                </button>
            </div>
        </div>
        <payment_modal :inputName="inputName" />
    </div>
</template>

<script>
import payment_modal from "@/components/modal/payment-modal.vue";
import { mapState } from "vuex";
import numeral from 'numeral'
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
export default {
    async asyncData({ store }) {
    //    await store.dispatch('cart/get').then(() => {
    //         if (this.$store.getters['cart/number'] != 0) {
    //             // ipnum = this.$store.getters['cart/cart_list_item'];
    //             this.$store.getters['cart/cart_list_item'].forEach(element => {
    //                 this.subtotal += element.price.replace(/,/g, "") * element.num
    //                 this.inputName.total = this.subtotal
    //             });
    //         }
    //     })
    },
    components: {
        payment_modal
    },
    computed: {
        ...mapState('cart', ['number', 'cart_list_item', 'freight', 'cart_list'])
    },
    data() {
        return {
            preferential: false,
            subtotal: 0,
            inputName: {
                name: 'payment_modal',
                total: 0,
            }
        }
    },
    filters: {
        formatNumberToqff(val) {
            return numeral(val).format('0,0');
        }
    },
    methods: {
        updatepreferential() {

        },
        reduce(e) {
            let number
            if (e.num > 1) {
                number = --e.num;
                this.$store.dispatch('cart/update', {
                    itemid: e.item_id,
                    number: number,
                }).then(() => {
                    if (this.$store.getters['cart/number'] != 0) {
                        let x = 0;
                        // ipnum = this.$store.getters['cart/cart_list_item'];
                        this.$store.getters['cart/cart_list_item'].forEach(element => {
                            x += element.price.replace(/,/g, "") * element.num
                        });
                        this.subtotal = x;
                        this.inputName.total = this.subtotal
                    }
                })
            }
        },
        add(e) {
            console.log(1);
            let number = ++e.num;
            this.$store.dispatch('cart/update', {
                itemid: e.item_id,
                number: number,
            }).then(() => {
                if (this.$store.getters['cart/number'] != 0) {
                    let x = 0;
                    // ipnum = this.$store.getters['cart/cart_list_item'];
                    this.$store.getters['cart/cart_list_item'].forEach(element => {
                        x += element.price.replace(/,/g, "") * element.num
                    });
                    this.subtotal = x;
                    this.inputName.total = this.subtotal
                }
            })
        },
        del(e) {
            this.$store.dispatch('cart/del', {
                itemid: e.item_id,
            }).then(() => {
                var a = $('.nextStep');
                if (this.number == 0) {

                    a.removeClass('notEmpty');
                    $('.nextStep .btn-cart .text').html('直接<br>購買')
                }
            })
        },
        openContact(e) {
            // console.log(e);
            // switch (e) {
            //     case 'line':
            //         return window.open(this.$store.getters['header/website'].company_info[1].value);
            //     case 'facebook':
            //         return window.open(this.$store.getters['header/website'].company_info[0].value);
            //     case 'phone':
            //         return location.href = "tel:" + this.$store.getters['header/website'].company_info[2].value;
            //     default:
            //         break;
            // }
            for (let index = 0; index < this.$store.getters['header/website'].company_info.length; index++) {
                switch (e) {
                    case 'line':
                        for (let index = 0; index < this.$store.getters['header/website'].company_info.length; index++) {
                            if (this.$store.getters['header/website'].company_info[index].key == 'Line_Link') {
                                return window.open(this.$store.getters['header/website'].company_info[index].value);
                            }
                        }
                    case 'facebook':
                        for (let index = 0; index < this.$store.getters['header/website'].company_info.length; index++) {

                            if (this.$store.getters['header/website'].company_info[index].key == 'FB_Link') {
                                return window.open(this.$store.getters['header/website'].company_info[index].value);
                            }
                        }
                    case 'phone':
                        for (let index = 0; index < this.$store.getters['header/website'].company_info.length; index++) {

                            if (this.$store.getters['header/website'].company_info[index].key == 'Telephone_Link') {
                                return location.href = "tel:" + this.$store.getters['header/website'].company_info[index].value;
                            }
                        }
                    default:
                        break;
                }
            }

        }
    },
    mounted() {
        // console.log($('.nextStep .btn'));
       
    }
}
</script>

<style lang="scss" scoped src="./cart.scss"></style>