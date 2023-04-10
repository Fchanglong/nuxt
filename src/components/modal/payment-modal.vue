<template>
    <div>
        <!-- {{ inputName }} -->
        <div class="modal fade stick-up view" :id="inputName.name" tabindex="-1" data-bs-backdrop="static" role="dialog"
            aria-hidden="true">
            <div class="modal-dialog  modal-fullscreen-sm-down">
                <div class="modal-content payment-modal">
                    <div class="modal-header ">
                        <h3 class="modal-title">訂購只要三步驟</h3>
                        <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                class="far fa-times"></i></button>
                    </div>
                    <div class="checkout-step-wrap">
                        <div class="checkout-step row" :class="step">
                            <div class="col" @click="nextstep($event)">
                                <span class="circle circlestep1"><i class="far fa-check"></i></span>
                                <div>
                                    選擇付款方式
                                </div>
                            </div>
                            <div class="col" @click="nextstep($event)">
                                <span class="circle circlestep2"><i class="far fa-check"></i></span>
                                <div>
                                    填寫收件人資料
                                </div>
                            </div>
                            <div class="col" @click="nextstep($event)">
                                <span class="circle circlestep3"><i class="far fa-check"></i></span>
                                <div>
                                    其他補充資訊
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <form class="step step1" :class="active === 0 ? '' : 'displaynone'">
                            <div class="form-group section-cart">
                                購物車小計
                                <span class="price">
                                    <small class="currency">NT$</small>
                                    <span class="amount">{{ cart_list.total | formatNumberToqff }}</span>
                                </span>
                            </div>
                            <div class="section-checkout-top"></div>
                            <!-- <div class="form-group form-logistics required">
                                <label>運送方式</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                        value="option1" checked @click="getvalue($event, 'delivery')">
                                    <label class="form-check-label" for="exampleRadios1">
                                        常溫宅配-1/12起下單，1/30後排單出貨 +100 台灣本島 滿$1300免運
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                        value="option2" @click="getvalue($event, 'delivery')">
                                    <label class="form-check-label" for="exampleRadios2">
                                        常溫宅配-1/12起下單，1/30後排單出貨 +180 台灣離島 滿$2000免運
                                    </label>
                                </div>
                            </div> -->
                            <div class="form-group form-payment required">
                                <label>付款方式</label>
                                <div class="form-check" v-for="item, index in payment_method">
                                    <!-- <input v-if="index==0" class="form-check-input" type="radio" name="payment" :id="item.alias" :value="item.pay_mode"
                                        checked @click="getvalue($event, 'payment')"> -->
                                    <input class="form-check-input" type="radio" name="payment" :id="item.alias"
                                        :value="item.pay_mode" @click="getvalue($event, 'payment')">
                                    <label class="form-check-label" :for="item.alias">
                                        {{ item.alias }}
                                    </label>
                                </div>
                                <!-- <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment" id="貨到付款" value="貨到付款"
                                        checked @click="getvalue($event, 'payment')">
                                    <label class="form-check-label" for="貨到付款">
                                        貨到付款
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment" id="ATM轉帳" value="ATM轉帳"
                                        @click="getvalue($event, 'payment')">
                                    <label class="form-check-label" for="ATM轉帳">
                                        ATM轉帳
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="payment" id="信用卡" value="信用卡"
                                        @click="getvalue($event, 'payment')">
                                    <label class="form-check-label" for="信用卡">
                                        信用卡
                                    </label>
                                </div> -->
                            </div>

                            <!-- <input type="hidden" name="PageID" value="0">
                            <input type="hidden" name="Step" value="1">
                            <input type="hidden" name="CheckoutFormType" value="1"> -->
                        </form>
                        <form class="step step2" :class="active === 1 ? '' : 'displaynone'">
                            <div class="form-group form-name required ">
                                <label>收件人<span class="help">請填寫姓名</span></label>
                                <input type="text" class="form-control" name="CustomerName" @change="roulename"
                                    v-model="name" aria-invalid="false">

                            </div>
                            <div class="country"><input type="hidden" name="UserMobileCode" value="TW"></div>
                            <div class="form-group form-phone required phone ">
                                <label><span class="name">聯絡電話</span><span class="help"></span></label>
                                <div class="input-group">
                                    <div class="input-group-addon p-r-5 countryImg"><img
                                            src="https://static.1shop.tw/storefront/3.1.16/dist/img/country/tw.png">
                                    </div>
                                    <input type="tel" class="form-control valid" @change="roulephone" v-model="phone"
                                        name="UserMobile" aria-invalid="false">
                                </div>
                            </div>
                            <div class="address-type address-home">
                                <div class="address">
                                    <!-- <div class="row form-sm">
                                        <div class="col">
                                            <div class="form-group select-icon form-city required city ">
                                                <label>請選擇位址</label>
                                                <v-distpicker province="台湾省" :city="select.city" :area="select.area"
                                                    @change="setCity"></v-distpicker>
                                            </div>
                                        </div>
                                       
                                    </div> -->
                                    <div class="form-group form-address required ">
                                        <label>街道地址<span class="help">不用重複輸入縣市</span></label>
                                        <input type="text" v-model="address" @change="rouleaddress"
                                            class="form-control valid" name="Address">
                                    </div>
                                </div>
                                <!-- <div class="form-group form-picktime select-icon packageTime" style="display: none;">
                                        <label><span class="name">方便收貨時間</span><span
                                                class="help">確切送達時間，因地區不同可能有所差異</span></label>
                                        <select class="form-control" name="GetPackageTime">
                                            <option value="0">不指定</option>
                                            <option value="1">13點前</option>
                                            <option value="2">14-18點</option>
                                        </select>
                                    </div> -->
                            </div>
                            <!-- <div class="address-type address-market error" style="display: none;">
                                    <div class="form-group has-bottom form-cvs required">
                                        <label>取貨超商</label>
                                        <input type="text" class="form-control" placeholder="尚未選擇超商" name="CVSStoreName"
                                            readonly="">
                                        <div class="has-bottom-button"><button type="button" onclick="pickMarket(this)"
                                                class="loading-dark"><i class="far fa-store m-r-5"></i>點擊選取超商</button></div>
                                    </div>
                                </div> -->
                            <div class="address-type address-pickup " style="display: none;">
                            </div>
                            <div class="section-save-address"></div>
                            <input type="hidden" name="Step" value="2">
                            <input type="hidden" name="CheckoutFormType" value="1">
                        </form>
                        <form class="step step3" :class="active === 2 ? '' : 'displaynone'">
                            <div class="form-group form-sex required">
                                <label>性别<span class="help">如何稱呼？</span></label>
                                <div class="sex">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="無" value="無" checked>
                                        <label class="form-check-label" for="無">
                                            無
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="先生" value="先生">
                                        <label class="form-check-label" for="先生">
                                            先生
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex" id="小姐" value="小姐">
                                        <label class="form-check-label" for="小姐">
                                            小姐
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row form-sm">
                                <div class="col">
                                    <div class="form-group select-icon form-city required city ">
                                        <label>發票類型</label>
                                        <select @click="getinvoice_type()" class="form-control" name="GetPackageTime"
                                            v-model="invoice_type">
                                            <option value="1">愛心捐贈</option>
                                            <option value="2">寄送至信箱</option>
                                        </select>
                                    </div>
                                    <div v-if="this.invoice_type == 2"
                                        class="form-group select-icon form-city invoice_type required city ">
                                        <label>受買人姓名</label>
                                        <div>
                                            <input type="text" v-model="invoice_name">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="form-group form-email required">
                                <label>Email<span class="help">寄送電子發票/訂單資訊<建議填寫Yahoo以外的信箱></span></label>
                                <input type="text" class="form-control" @input="change_email" v-model="email"
                                    name="CustomerName" aria-invalid="false">
                            </div>
                            <div class="form-group form-remark required">
                                <label>備註<span class="help">有什麼特殊需求可以寫在這裡呦</span></label>
                                <textarea class="form-control" rows="5" name="Note" v-model="remark" placeholder="(若無則不需填寫)"
                                    aria-invalid="false"></textarea>
                            </div>
                        </form>
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
                                            class="amount" data-amount="1260">{{ cart_list.total | formatNumberToqff
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-rounded btn-lg btn-primary btn-block" id="send-out"
                                @click="addToCart(inputName)" data-icon=""><i class="undefined"></i>下一步</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

// import VDistpicker from 'v-distpicker'
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
import numeral from 'numeral'
import { mapState } from 'vuex'
export default {
    props: {
        inputName: {
            default: ''
        },
    },
    components: {
        // VDistpicker
    },
    filters: {
        formatNumberToqff(val) {
            return numeral(val).format('0,0');
        }
    },
    data() {
        return {
            isshow: false,
            active: 0,
            name: '',
            phone: '',
            address: '',
            remark: '',
            email: '',
            invoice_type: 1,
            invoice_name: '',
            // cityIdx: 0,
            // areaIdx: 0,
            // select: {
            //     city: '',
            //     area: '',
            // },
            area: false,
            payment: 0,

        }
    },
    computed: {
        step: function () {
            switch (this.active) {
                case 0:
                    return {
                        'step1': true,
                    }
                case 1:
                    return {
                        'step2': true,
                    }
                case 2:
                    return {
                        'step3': true,
                    }
            }
        },
        ...mapState('order', ['payment_method']),
        ...mapState('cart', ['cart_list'])

    },
    mounted() {
        // this.getvalue(e)
        // this.$store.dispatch('user/get').then(() => {
        //     this.name = this.$store.getters['user/name'];
        //     this.phone = this.$store.getters['user/phone'];
        //     this.address = this.$store.getters['user/address'];
        //     // console.log(this.name);
        // })
    },
    methods: {
        addToCart() {

            switch (this.active) {
                case 0:
                    if (this.payment != 0) {

                        this.active++;

                    }
                    break;
                case 1:
                    if (this.name == '' || this.address == '' || this.phone == '') {
                        this.roule();
                    } else {
                        this.roule();
                        this.active++;
                        $('#send-out')[0].innerText = '送出';
                    }
                    break;
                case 2:

                    if (this.invoice_type == 2) {
                        if (this.invoice_name != '' && this.email!='') {
                            $('.invoice_type').removeClass('error');
                            $('.form-email').removeClass('error');
                            this.$store.dispatch('order/post',
                            {
                                address: this.address,
                                email: this.email,
                                name: this.name,
                                phone: this.phone,
                            }).then(() => {
                                this.$store.dispatch('cart/get').then(() => {

                                });
                                this.$store.dispatch('order/selectinvoice', {
                                    order_number: this.$store.getters['order/submitorder'],
                                    company: this.invoice_name,
                                    email: this.email,
                                    identifier: '',
                                    type: this.invoice_type
                                }).then(() => {
                                    //付款
                                    this.$store.dispatch('order/payment', {
                                        order_num: this.$store.getters['order/submitorder'],
                                        type: this.payment
                                    }).then(() => {
                                        this.active=0;
                                        $('.modal-backdrop').remove()
                                        $("body").removeClass('modal-open')
                                        $("body")[0].style.cssText = '';
                                        this.$router.push({
                                            path: `/please/${this.$store.getters['order/submitorder']}`
                                        }).catch(err => { })
                                    });
                                });
                            });
                        } else {
                            $('.form-email').addClass('error');
                            $('.invoice_type').addClass('error');
                        }
                    } else {
                        this.$store.dispatch('order/post',
                            {
                                address: this.address,
                                email: this.email,
                                name: this.name,
                                phone: this.phone,
                            }).then(() => {
                                this.$store.dispatch('cart/get').then(() => {

                                });
                                this.$store.dispatch('order/selectinvoice', {
                                    order_number: this.$store.getters['order/submitorder'],
                                    company: this.invoice_name,
                                    email: this.email,
                                    identifier: '',
                                    type: this.invoice_type
                                }).then(() => {
                                    //付款
                                    this.$store.dispatch('order/payment', {
                                        order_num: this.$store.getters['order/submitorder'],
                                        type: this.payment
                                    }).then(() => {
                                        this.active=0;
                                        $('.modal-backdrop').remove()
                                        $("body").removeClass('modal-open')
                                        $("body")[0].style.cssText = '';
                                        this.$router.push({
                                            path: `/please/${this.$store.getters['order/submitorder']}`
                                        }).catch(err => { })
                                    });
                                });
                            });
                    }

                    // $('.modal-backdrop').remove()
                    // $("body").removeClass('modal-open')
                    // $("body")[0].style.cssText = '';
                    // this.$router.push({
                    //     path: `/please`
                    // }).catch(err => { })
                    break;

            }
            // if(this.active<2){

            // }
        },
        getvalue(e, item) {
            this.payment = e.target.value
            // console.log(e.target.value);
            // switch (item) {
            //     case 'delivery':
            //         console.log(e.target.value);
            //         break;
            //     case 'payment':
            //         console.log(e.target.value);
            //         break;

            // }
        },
        nextstep(e) {
            var a = e.target;
            // console.log($(a).closest('.col').children().is('.circlestep1'));
            if ($(a).closest('.col').children().is('.circlestep1')) {
                this.active = 0;
                $('#send-out')[0].innerText = '下一步';
                // console.log(this.active);
            } else if ($(a).closest('.col').children().is('.circlestep2')) {
                this.active = 1;
                $('#send-out')[0].innerText = '下一步';
                // console.log(this.active);
            } else {
                if (this.active === 0) {
                    this.active = 1
                } else {
                    if (this.name == '' || this.address == '' || this.phone == '') {
                        this.roule();
                    } else {
                        this.roule();

                        this.active = 2;
                        $('#send-out')[0].innerText = '送出';
                    }
                }
                // console.log(this.active);
            }
        },
        // setCity({ city, area }) {
        //     // console.log(this.select);
        //     if (this.select.area == '区' && this.area == true) {
        //         console.log(1);
        //         $('.form-city').addClass('error');
        //     } else {
        //         // this.area=false;

        //         $('.form-city').removeClass('error');
        //     }

        //     this.select.city = city.value
        //     this.select.area = area.value
        //     // console.log(city.value);
        //     // console.log(area.value);
        // },
        // 规则判断
        roule() {
            if (this.name == '') {
                $('.form-name').addClass('error');
            } else {

                $('.form-name').removeClass('error');
            }
            if (this.phone == '') {
                $('.form-phone').addClass('error');
            } else {

                $('.form-phone').removeClass('error');
            }
            if (this.invoice_type == 2) {
                if (this.email == '') {
                    $('.form-email').addClass('error');
                } else {

                    $('.form-email').removeClass('error');
                }
            }

            if (this.address == '') {
                $('.form-address').addClass('error');
            } else {

                $('.form-address').removeClass('error');
            }
        },
        roulename() {
            if (this.name == '') {
                $('.form-name').addClass('error');
            } else {

                $('.form-name').removeClass('error');
            }
            this.$store.dispatch('user/save', {
                address: this.address,
                name: this.name,
                phone: this.phone,
            })
        },
        roulephone() {
            if (this.phone == '') {
                $('.form-phone').addClass('error');
            } else {

                $('.form-phone').removeClass('error');
            }

            this.$store.dispatch('user/save', {
                address: this.address,
                name: this.name,
                phone: this.phone,
            })
        },
        rouleaddress() {
            if (this.address == '') {
                $('.form-address').addClass('error');
            } else {

                $('.form-address').removeClass('error');
            }

            this.$store.dispatch('user/save', {
                address: this.address,
                name: this.name,
                phone: this.phone,
            })
        },
        // 邮箱验证
        isEmail(str) {
            return /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str);
        },
        change_email() {
            let test = this.email
            if (this.isEmail(test)) {
                $('.form-email').removeClass('error');
            } else {
                $('.form-email').addClass('error');
            }
        },
        // 发票选择
        getinvoice_type() {
            // console.log(this.invoice_type);
        }
    }
}
</script>

<style lang="scss" src="./modal.scss" scoped></style>