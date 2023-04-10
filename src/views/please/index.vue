<template>
    <div class="container">
        <div class="header">
            <div class="icon icon-success svg">
                <svg version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="-446 242.6 76.4 77" xml:space="preserve">
                    <circle class="line1" cx="-408" cy="281" r="35"></circle>
                    <path class="line2" d="M-425.7,283.8l9.9,9.9l25.4-25.4"></path>
                </svg>
            </div>
            <h3>已經收到您的訂單</h3>
            <h1>訂單號碼：{{ this.$route.params.id }}</h1>
            <p class="text-danger">請拍照、或儲存網址以便日後查詢</p>
        </div>
        <!-- {{ this.$store.getters['order/selectpayment'] }} -->
        <div class="order-body">
            <div class="warning">



                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-weight: bolder;"><span style="font-size: 14px;">【訂購權益須知】</span></span>
                </p>
                <p style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap;"><span
                        style="font-size: 14px;">
                        <font color="#000000"><u>感謝您的訂購，系統已經自動發送訂單成立通知與訂單連結至您留下的手機號碼與Email信箱。</u></font>
                    </span></p>
                <p style="margin-bottom: 0px; letter-spacing: 0.14px; white-space: normal;"><span
                        style="letter-spacing: normal; white-space: pre-wrap;">
                        <font color="#000000"><u>下單後7-10個工作天內（不含假日）會出貨，提早製作完成就會提前出貨。</u></font>
                    </span>
                    <font color="#000000"><span style="letter-spacing: normal; white-space: pre-wrap;"><br></span>
                    </font><span
                        style="letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">商品寄出後將有「出貨簡訊通知」，宅配/超商取貨需依照全台物流配送，皆無法指定/保證到貨時間，請務必留意簡訊以及電話，以免逾期未取包裹遭退回。</span><br
                        class="Apple-interchange-newline"><span
                        style="color: rgb(0, 0, 0); letter-spacing: normal; white-space: pre-wrap;">如遇商品缺貨，為保護您的訂購權益，我們將自動延長您的訂單出貨時間14天，並於延展時間內完成出貨。</span><span
                        style="letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);"><br></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">(以上出貨與配送時間僅供參考，若因疫情/節慶關係物流配送有延遲狀況，再請見諒)</span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <br>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;"><span style="font-weight: bolder;">【官方社群聯絡資訊】</span></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">查詢訂單出貨進度與優惠活動，請加入LINE官方帳號獲得專屬服務吧！</span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;"><a href="https://bit.ly/3zva0qv"
                            target="_blank">https://bit.ly/3zva0qv</a></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">想知道扒扒飯粉絲都在做什麼料理嗎？社團粉絲有什麼好康呢？加入「扒扒飯食堂」跟官方instagram來一探究竟！</span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">Facebook社團：<a href="https://bit.ly/2WwxFZ6"
                            target="_blank">https://bit.ly/2WwxFZ6</a></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">Instagram：<a href="https://bit.ly/3gJlTBW"
                            target="_blank">https://bit.ly/3gJlTBW</a></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <br>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-weight: bolder;"><span style="font-size: 14px;">【電子發票注意事項】</span></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">遵照財政部規定及響應無紙化，訂單全面採用「電子發票」，將於訂單貨物寄出後統一用Email或載具寄送電子發票</span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">下單時請務必填寫正確信箱網址、載具，若未收到或有任何問題歡迎與我們聯繫。</span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;"><br></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-weight: bolder;"><span style="font-size: 14px;">【詐騙猖獗，小心詐騙】</span></span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span style="font-size: 14px;">本店絕不會要求消費者去提款機做任何取消交易或轉帳的動作，請小心不要受騙。</span>
                </p>
                <p
                    style="margin-bottom: 0px; font-size: medium; letter-spacing: normal; white-space: pre-wrap; color: rgb(0, 0, 0);">
                    <span
                        style="font-size: 14px;">如有遇到任何問題，請直接私訊「扒扒飯」臉書粉絲團/LINE，或透過本頁訂單連結下方的顧客留言功能與我們聯繫，亦可撥打客服電話0800-000-894查證，謝謝。</span>
                </p>


            </div>
            <!-- <div class="bill pd-20 border">
                <h3>
                    <i class="far fa-ticket-alt"></i>發票資訊
                </h3>
                <div class="alert-success">
                    以下是您的發票資訊，發票會隨貨寄出。
                </div>
                <div class="form">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                發票號碼
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                <span class="label">等待處理</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                開立時間
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                無
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                發票類型
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                捐贈
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                愛心碼
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                003
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="cart border">
                <div class="cart-item clearfix" v-for="item in order_cart">
                    <div class="item-img">
                        <img class="img-square img-thumbnail lazyautosizes ls-is-cached lazyloaded"
                            src="https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/1LPZao453vWxjyWolQAR86mM/original-2.jpg.avif"
                            width="1576" height="1576" data-sizes="auto">
                    </div>
                    <div class="item-content clearfix full">
                        <div class="detail">
                            <h4>
                                {{ item.form_name }}
                                <small class="text-complete"></small>
                            </h4>
                            <div class="meta">
                                <span class="each-price">
                                    <small class="currency">NT$</small>
                                    <span class="amount">{{ item.price }}</span>
                                </span>
                                <span>*</span>
                                <span class="text-danger num">{{ item.num }}</span>
                            </div>
                            <!-- <ul class="list-unstyled list-item">
                                <li>
                                    [常溫]泰椒酸辣蒟蒻麵(配方升級)-爆單熱銷！
                                    <small class="text-complete"></small>
                                    <span>*</span>
                                    <span class="num">3</span>
                                </li>
                            </ul> -->
                        </div>
                        <div class="price">
                            <small class="currency">NT$</small>
                            <span class="amount" data-amount="1260">{{ item.total }}</span>
                        </div>
                    </div>
                </div>
                <div class="cart-total pd-20">

                    <div class="row subtotal">
                        <div class="col text">
                            小計
                        </div>
                        <div class="col text-right price">
                            <small class="currency">NT$</small>
                            <span class="amount" data-amount="1260">{{ total | formatNumberToqff }}</span>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col text">
                            交易手續費：貨到付款
                        </div>
                        <div class="col text-right price">
                            <small class="currency">NT$</small>
                            <span class="amount" data-amount="0">0</span>

                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col text">
                            運費：
                            <!-- 常溫宅配｜台灣本島 -->
                        </div>
                        <div class="col text-right price">
                            <small class="currency">NT$</small>
                            <span class="amount" data-amount="0">{{ order_freight | formatNumberToqff }}</span>
                        </div>
                    </div>
                    <div class="row total">
                        <div class="col text">
                            總計
                        </div>
                        <div class="col text-right price">
                            <small class="currency">NT$</small>
                            <span class="amount" data-amount="1260">{{ order[0].total }}</span>
                        </div>
                    </div>


                </div>

            </div>
            <div class="Information border">
                <h3>
                    <i class="far fa-user"></i>收件資訊
                </h3>
                <div class="form">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                收件人
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                {{ order[0].receiver.name }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                聯絡電話
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                <img src="https://static.1shop.tw/storefront/3.1.25/dist/img/country/tw.png"
                                    class="countryImg"> {{ order[0].receiver.phone }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                訂單狀態
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                <span class="badge "><i class="far fa-clock"></i>等待確認</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                付款方式
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                {{ order[0].payment.status_name }}<span class="badge statey">

                                    <div class="unpaid" v-if="selectpayment.mode !== 'ReceivedPay'">
                                        <form :action="furl" :method="fmethod">
                                            <button type="subimt"
                                                style="margin-top: 0; border: none;background-color: #e1e1e2;padding: 0;">前往付款</button>
                                            <input type="hidden" name="MerchantID"
                                                :value="selectpayment.data_list.MerchantID">
                                            <input type="hidden" name="ReturnURL"
                                                :value="selectpayment.data_list.ReturnURL">
                                            <input type="hidden" name="ClientBackURL"
                                                :value="selectpayment.data_list.ClientBackURL">
                                            <input type="hidden" name="OrderResultURL"
                                                :value="selectpayment.data_list.OrderResultURL">
                                            <input type="hidden" name="ClientRedirectURL"
                                                :value="selectpayment.data_list.ClientRedirectURL">
                                            <input type="hidden" name="EncryptType"
                                                :value="selectpayment.data_list.EncryptType">
                                            <input type="hidden" name="MerchantTradeNo"
                                                :value="selectpayment.data_list.MerchantTradeNo">
                                            <input type="hidden" name="MerchantTradeDate"
                                                :value="selectpayment.data_list.MerchantTradeDate">
                                            <input type="hidden" name="TotalAmount"
                                                :value="selectpayment.data_list.TotalAmount">
                                            <input type="hidden" name="TradeDesc"
                                                :value="selectpayment.data_list.TradeDesc">
                                            <input type="hidden" name="PaymentType"
                                                :value="selectpayment.data_list.PaymentType">
                                            <input type="hidden" name="ItemName" :value="selectpayment.data_list.ItemName">
                                            <input type="hidden" name="ChooseSubPayment"
                                                :value="selectpayment.data_list.ChooseSubPayment">
                                            <input type="hidden" name="ChoosePayment"
                                                :value="selectpayment.data_list.ChoosePayment">
                                            <input type="hidden" name="CheckMacValue"
                                                :value="selectpayment.data_list.CheckMacValue">
                                        </form>
                                    </div>

                                    <div v-else>
                                        {{ order[0].payment.status_name }}
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                運送方式
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                常溫宅配｜台灣本島<span class="badge state">等待出貨</span>
                            </div>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                運送至地址
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                {{ order[0].receiver.address }}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                指定時間
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                不指定
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                Email
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                無
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="th">
                                備註
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="td">
                                無
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div class="timeline">
                <div class="timeline-block">
                    <div class="timeline-point success">
                        <i class="far fa-comments"></i>
                    </div>
                    <div class="timeline-content">
                        <div class="card pd">
                            <div id="msg" class="m-b-0 ">
                                <div class="border">
                                    <label>給店家留言<span class="help">在此輸入，店家將會看到您的留言</span></label>
                                    <textarea class="form-control" rows="5" name="MessageContent"
                                        aria-invalid="true"></textarea>
                                </div>
                                <button class="btn">留言</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline-block">
                    <div class="timeline-point small"></div>
                    <div class="timeline-content">
                        <div class="card">
                            <div class="header clearfix">
                                <h5>簡訊發送</h5>
                            </div>
                            <div class="content clearfix">
                                已發送訂單簡訊到您的手機。<br>您可使用簡訊內連結查詢訂單狀態。


                            </div>
                        </div>
                        <div class="event-date">
                            <small class="hint-text">2023-02-02 13:49:55</small>
                        </div>
                    </div>
                </div>
                <div class="timeline-block">
                    <div class="timeline-point small"></div>
                    <div class="timeline-content">
                        <div class="card">
                            <div class="header clearfix">
                                <h5>新建電子發票</h5>
                            </div>
                            <div class="content clearfix">
                                建立者：消費者建立<br>類型：電子發票(第三方服務)<br>發票號碼：等待處理<br>發票開立時間：無<br>發票類型：捐贈<br>愛心碼：2911811


                            </div>
                        </div>
                        <div class="event-date">
                            <small class="hint-text">2023-02-02 13:49:55</small>
                        </div>
                    </div>
                </div>
                <div class="timeline-block">
                    <div class="timeline-point small"></div>
                    <div class="timeline-content">
                        <div class="card">
                            <div class="header clearfix">
                                <h5>訂單成立</h5>
                            </div>
                            <div class="content clearfix">
                                已完成訂購。<br>選擇金流：貨到付款 <br>選擇物流：常溫宅配｜台灣本島 <br>


                            </div>
                        </div>
                        <div class="event-date">
                            <small class="hint-text">2023-02-02 13:49:52</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="back">
                <a class="btn border" href="/">
                    <i class="far fa-store m-r-5"></i>返回商店
                </a>
            </div>
            <div class="sep">
            </div>
            <div class="question">
                <div class="question-textcentr">
                    如有訂單問題
                    <div>請提供客服人員訂單號碼：PPF3020229923</div>
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
        </div>
    </div>
</template>

<script>
import numeral from "numeral";
import { mapState } from 'vuex'
export default {
    data() {
        return {
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
            judgment: '',
            total: 0,
            order_freight: 0,
        }
    },
    computed: {
        ...mapState('order', ['payment_method', 'selectpayment', 'order', 'order_cart']),
        // ...mapState('cart', ['number', 'cart_list_item', 'freight', 'cart_list'])
    },
    filters: {
        formatNumberToqff(val) {
            return numeral(val).format('0,0');
        }
    },
    methods: {
        openContact(e) {
            // console.log(e);
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
        // this.$store.dispatch('order/payment_one', this.$route.params.id).then((e) => {
        //     if (e == false) {
        //         this.judgment = 'false'
        //     } else {
        //         this.judgment = 'true'
        //     }
        //     // console.log(1);
        // });
        // this.$store.dispatch('order/payment_two', this.$route.params.id).then(() => {
        //     let item = this.$store.getters['order/order']
        //     item[0].item.forEach((e) => {
        //         this.total += e.total.replace(/,/g, "") * 1
        //     })
        //     this.order_freight = item[0].total.replace(/,/g, "") * 1 - this.total;
        // });
        // console.log(2);

    },
}
</script>

<style lang="scss" scoped  src="./index.scss"></style>