<template>
    <div>
        <!-- {{ inputName }} -->
        <!-- {{ item }} -->
        <div class="modal fade stick-up view" :id="'m' + inputName.oig_id" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog  modal-fullscreen-sm-down">
                <div class="modal-content modal-1" v-if="module == 'combination'">
                    <div class="modal-header">
                        <h5 class="modal-title"><span class="label">組合優惠</span> 泰椒酸辣蒟蒻麵</h5>
                        <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                class="far fa-times"></i></button>
                    </div>
                    <div class="alert alert-success clearfix" role="alert">共<span class="text-danger">3</span>
                        個產品，原價$<del class="price-del"><span>1497</span></del> ，特價$<span class="sale text-danger">1260</span>
                        。</div>

                    <div class="modal-body">
                        <div class="item-list clearfix" v-for="item in inputName.img">
                            <div class="img">
                                <img v-lazy="item" alt="">
                            </div>
                            <div class="content">

                                <h4>[常溫]泰椒酸辣蒟蒻麵(配方升級)-爆單熱銷！<small>限時！買二送一</small></h4>
                                <p><span class="text-danger">3</span> 個產品</p>
                                <!-- <div class="quantity" data-type="input">
                                    <div class="input-group">
                                        <div class="input-group-btn" @click="reduce">
                                            <button class="btn" type="button">-</button>
                                        </div>
                                        <input type="text" class="form-control text-center qty" name="Quantity"
                                            :value=number min="1" max="" readonly="">
                                        <div class="input-group-btn" @click="add">
                                            <button class="btn" type="button">+</button>
                                        </div>
                                    </div>
                                    <div class="error"></div>
                                </div> -->

                            </div>
                        </div>
                    </div>
                    <div class="alert alert-success clearfix" role="alert">額外加贈</div>
                    <div class="modal-body">
                        <div class="item-list clearfix" v-for="item in inputName.img">
                            <div class="img">
                                <img v-lazy="item" alt="">
                            </div>
                            <div class="content">

                                <h4>[常溫]泰椒酸辣蒟蒻麵(配方升級)-爆單熱銷！<small>限時！買二送一</small></h4>
                                <p><span class="text-danger">3</span> 個產品</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer  subtotal">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button> -->
                        <div class="col-7">
                            <div class="clearfix modal-total">
                                <div class="pull-left">
                                    <div class="text">小計</div>
                                </div>
                                <div class="pull-right">
                                    <div class="bold font-montserrat"><small class="currency">NT$</small> <span
                                            class="amount" data-amount="1260">1,260</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-rounded btn-lg btn-primary btn-block"
                                @click="addToCart(inputName)" data-icon="" data-bs-dismiss="modal" aria-label="Close"><i
                                    class="undefined"></i>加入購物車</button>
                        </div>
                    </div>
                </div>
                <div class="modal-content modal-1" v-else-if="module == 'multipleChoice'">
                    <div class="modal-header">
                        <h5 class="modal-title"><span class="label">組合優惠</span> 泰椒酸辣蒟蒻麵</h5>
                        <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                class="far fa-times"></i></button>
                    </div>
                    <div class="alert alert-success clearfix" role="alert">請選擇<span class="text-danger">3</span>
                        個產品，原價$<del class="price-del"><span>1497</span></del> ，特價$<span class="sale text-danger">1260</span>
                        。</div>
                    <div class="modal-body">
                        <div class="item-list clearfix" v-for="item in inputName.img">
                            <div class="img">
                                <img v-lazy="item" alt="">
                            </div>
                            <div class="content">

                                <h4>[常溫]泰椒酸辣蒟蒻麵(配方升級)-爆單熱銷！<small>限時！買二送一</small></h4>
                                <p><span class="text-danger">3</span> 個產品</p>
                                <div class="quantity" data-type="input">
                                    <div class="input-group">
                                        <div class="input-group-btn" @click="reduce">
                                            <button class="btn" type="button">-</button>
                                        </div>
                                        <input type="text" class="form-control text-center qty" name="Quantity"
                                            :value=multipleChoice min="0" max="" readonly="">
                                        <div class="input-group-btn" @click="add">
                                            <button class="btn" type="button">+</button>
                                        </div>
                                    </div>
                                    <div class="error"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="alert alert-success clearfix" role="alert">額外加贈</div>
                    <div class="modal-body">
                        <div class="item-list clearfix" v-for="item in inputName.img">
                            <div class="img">
                                <img v-lazy="item" alt="">
                            </div>
                            <div class="content">

                                <h4>[常溫]泰椒酸辣蒟蒻麵(配方升級)-爆單熱銷！<small>限時！買二送一</small></h4>
                                <p><span class="text-danger">3</span> 個產品</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer  subtotal">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button> -->
                        <div class="col-7">
                            <div class="clearfix modal-total">
                                <div class="pull-left">
                                    <div class="text" style="font-size: 14px;">選擇數量</div>
                                </div>
                                <div class="pull-right">
                                    <div class="bold font-montserrat"><small class="currency">{{
                                        multipleChoice
                                    }}/3</small></div>
                                    <!-- <span class="amount" data-amount="1260">4</span> -->
                                </div>
                            </div>
                            <div class="clearfix modal-total">
                                <div class="pull-left">
                                    <div class="text">小計</div>
                                </div>
                                <div class="pull-right">
                                    <div class="bold font-montserrat"><small class="currency">NT$</small> <span
                                            class="amount" data-amount="1260">1,260</span></div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-rounded btn-lg btn-primary btn-block"
                                @click="addToCart(inputName)" data-icon="" id="multipleChoice-btn" data-bs-dismiss="modal"
                                aria-label="Close"><i class="undefined"></i>加入購物車</button>
                        </div>
                    </div>
                </div>
                <div class="modal-content modal-2" v-else>
                    <div class="modal-body">
                        <div class="modal-header ">
                            <!-- <img :src="inputName.img[0]" alt=""> -->
                            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark"
                                        v-for="item, index in item.items" :class="index === 0 ? 'active' : ''"
                                        :data-bs-slide-to=index></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item" data-bs-interval="10000" :class="index === 0 ? 'active' : ''"
                                        v-for="item, index in item.items">
                                        <img v-lazy="item.display_img_small" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                    class="far fa-times"></i></button>
                        </div>
                        <div class="item-list clearfix">
                            <div class="content">
                                <h3>{{ inputName.group_name }}
                                    <!-- <small>用環保耐用刷，揮別「毛毛」料理！</small> -->
                                </h3>
                                <div v-if="price_original - price != 0">
                                    <div class="price" data-amount="99">
                                        <b class="base del">原價$<span class="amount">{{ price_original | formatNumberToqff
                                        }}</span>
                                        </b>
                                        <b class="special">特價$<span class="amount">{{ price
                                            | formatNumberToqff }}</span></b>
                                    </div>
                                </div>
                                <!-- <div > -->
                                <div v-else class="price" data-amount="99">
                                    <b class="special">售價$<span class="amount">{{ price
                                        | formatNumberToqff }}</span></b>
                                </div>
                                <!-- </div> -->
                                <div class="specification">
                                    <div class="title">规格</div>
                                    <div class="tag">
                                        <button class="btn" v-for="item, index in item.items"
                                            :class="active === index + 1 ? 'active' : ''" :data-value="item.form_name"
                                            @click=" choose(item,index)">{{ item.form_name }}</button>
                                        <!-- <button class="btn" :class="active === 1 ? 'active' : ''" data-value="純淨白"
                                            @click="active = 1">純淨白</button>
                                        <button class="btn" :class="active === 2 ? 'active' : ''" data-value="質感綠"
                                            @click="active = 2">質感綠</button> -->
                                    </div>
                                </div>
                                <div class="quantity" data-type="input">
                                    <div class="input-group">
                                        <div class="input-group-btn" @click="reduce">
                                            <button class="btn" type="button">-</button>
                                        </div>
                                        <input type="text" class="form-control text-center qty" name="Quantity"
                                            :value=number min="1" max="" readonly="">
                                        <div class="input-group-btn" @click="add">
                                            <button class="btn" type="button">+</button>
                                        </div>
                                    </div>
                                    <div class="error"></div>
                                </div>
                                <!-- <div class="introduce">(平均420/盒)</div> -->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer  subtotal">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button> -->
                        <div class="col-7">
                            <div class="clearfix modal-total">
                                <div class="pull-left">
                                    <div class="text">小計</div>
                                </div>
                                <div class="pull-right">
                                    <div class="bold font-montserrat"><small class="currency">NT$</small> <span
                                            class="amount" data-amount="1260">{{ modal_price
                                                | formatNumberToqff }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" class=" three-btn btn btn-rounded btn-lg btn-primary btn-block" @click="addToCart()"
                                id="three-btn" data-bs-dismiss="" aria-label=""><i class="undefined"></i>加入購物車</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
import numeral from "numeral";
export default {
    props: {
        inputName: {
            type: Object,
            default: ''
        },
    },
    data() {
        return {
            modal_price: 0,
            modal_price_original: 0,
            price: 0,
            price_original: 0,
            item: {},
            module: '1',
            isshow: true,
            active: 0,
            number: 1,
            multipleChoice: 0,
            multipleChoiceTotal: 3,
            itemid: 0,
        }
    },
    filters: {
        formatNumberToqff(val) {
            return numeral(val).format('0,0');
        }
    },
    mounted() {
        // console.log($('#three-btn'));
        if (this.module == 'multipleChoice') {
            $('#multipleChoice-btn')[0].ariaLabel = null;
            $('#multipleChoice-btn')[0].dataset.bsDismiss = null;
        }
        const myModalEl = document.getElementById('m' + this.inputName.oig_id)
        myModalEl.addEventListener('hidden.bs.modal', event => {
            if (this.module == 'multipleChoice') {
                $('#multipleChoice-btn')[0].ariaLabel = null;
                $('#multipleChoice-btn')[0].dataset.bsDismiss = null;
            } else {
                for (var i = 0; i <$('.three-btn').length; i++) {
                $('.three-btn')[i].ariaLabel = null;
                $('.three-btn')[i].dataset.bsDismiss = null;
            }
            }
            this.number = 1;
            this.multipleChoice = 0;
            this.active = 0;
        })
    },
    methods: {
        // 减少数量
        reduce() {
            switch (this.module) {
                case 'multipleChoice':
                    if (this.multipleChoice > 0) {
                        this.multipleChoice--;
                        $('#multipleChoice-btn')[0].ariaLabel = null;
                        $('#multipleChoice-btn')[0].dataset.bsDismiss = null;
                    }
                    break;
                case 'combination':
                    break;
                default:
                    if (this.number > 1) {
                        this.number--;
                        this.modal_price = this.price * this.number;
                        this.modal_price_original = this.price_original * this.number;
                    } else {

                    }
                    break;
            }
        },
        // 增加数量
        add() {
            switch (this.module) {
                case 'multipleChoice':
                    if (this.multipleChoice < this.multipleChoiceTotal) {
                        this.multipleChoice++;
                    }
                    if (this.multipleChoice == this.multipleChoiceTotal) {
                        $('#multipleChoice-btn')[0].ariaLabel = 'Close';
                        $('#multipleChoice-btn')[0].dataset.bsDismiss = 'modal';
                    }
                    break;
                case 'combination':
                    break;
                default:
                    this.number++;
                    this.modal_price = this.price * this.number;
                    this.modal_price_original = this.price_original * this.number;
                    break;
            }
            // this.number++;
        },
        // 請先選擇產品，才可加購


        // notice-warp
        // 加入购物车
        addToCart(e) {
            // console.log(this.number);
            // if (true) {


            // }

            switch (this.module) {
                case 'multipleChoice':
                    if (this.multipleChoice == this.multipleChoiceTotal) {
                        this.closemodal();
                        // $("#" + event.name).hide();
                    } else {
                    }
                    break;
                case 'combination':
                    this.closemodal();
                    break;
                default:
                    if (this.active != 0) {
                        this.$store.dispatch('cart/add', {
                            itemid: this.itemid,
                            number: this.number,
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

                            this.closemodal();
                        })
                    } else {
                        $('#app').append(`<div class="notice-warp" id="notice-warp">
          <div class="icon">
            <i class="far fa-times-circle text-danger"></i>
          </div>
          <div class="text">
            請先選擇規格，才可加購
          </div>
        </div>`)
                        setTimeout(() => {
                            $('#notice-warp').remove()
                        }, 1500);

                        // fa-check-circle text-success  已加入购物车  fa-times-circle text-danger
                    }
                    // this.number++;
                    break;
            }
            // 关闭模态框

        },
        // 关闭模态框
        closemodal() {
            // 成功加入购物车
            var e = $('.add-to-cart-flag')
            var a = $('.nextStep')
            // this.$store.dispatch("cart/increment");
            if (this.$store.state.cart.count !== 0) {
                a.is(".notEmpty") ? '' : a.addClass('notEmpty');
                $('.nextStep .btn-cart .text').html('立即<br>結賬')
            }

            e.is(".active") ? (e.removeClass("")) : (e.addClass("active"))

            setTimeout(() => {
                e.is(".active") ? (e.removeClass("active")) : (e.addClass(""))
            }, 1500);


            $('.modal-backdrop').remove()
            $("body").removeClass('modal-open')
            $("body")[0].style.cssText = '';
        },
        getitem() {
            this.$store.dispatch('commodity/getdesignated_product', this.inputName.oig_id).then(response => {
                this.item = this.$store.getters["commodity/details"];
                // console.log(this.item);
                this.modal_price = this.item.price_max;
                this.modal_price_original = this.item.price_original_max;
                this.price = this.item.price_max;
                this.price_original = this.item.price_original_max;
            })
        },
        choose(e,index) {
            this.active = index + 1;
            // console.log($('.three-btn'));
            this.itemid = e.itemid;
            // console.log($('#three-btn'));
            for (var i = 0; i <$('.three-btn').length; i++) {
                $('.three-btn')[i].ariaLabel = 'Close';
                $('.three-btn')[i].dataset.bsDismiss = 'modal';
            }
            // $('#three-btn')[0].ariaLabel = 'Close';
            // $('#three-btn')[0].dataset.bsDismiss = 'modal';
            this.modal_price = e.price * this.number;
            this.modal_price_original = e.price_original * this.number;
            this.price = e.price;
            this.price_original = e.price_original;
            // console.log(e);
        }
    }
}
</script>

<style lang="scss" src="./modal.scss" scoped></style>