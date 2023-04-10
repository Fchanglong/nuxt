<template>
    <div class="footer">
        <div class="container">
            <div class="footer-menu">
                <ul class="nav justify-content-center"></ul>
            </div>
            <div class="footer-content">
                <!-- <div style="text-align: left;">
                    <div style="letter-spacing: 0.13px;"><span style="letter-spacing: 0.13px;">沃口有限公司【扒扒飯】</span><br>
                    </div>
                    <div style="letter-spacing: 0.13px; text-align: center;">
                        <div style="text-align: left;"><span
                                style="letter-spacing: 0.01em;">總公司地址：高雄市鳳山區五甲一路612號（不對外開放）</span></div>
                        <div style="text-align: left;"><span style="letter-spacing: 0.01em;">統編：59260558</span></div>
                    </div>
                    <div style="letter-spacing: 0.13px; text-align: center;">
                        <div style="text-align: left;"><span
                                style="letter-spacing: 0.01em;">食品業者登錄字號：E-159260558-00000-2</span></div>
                    </div>
                </div> -->
                <hr>
                <div style="text-align: left;" v-for="item in website.company_info"><b>
                        <span>{{ item.key }}</span>：
                        <span v-html="item.value"></span>
                    </b></div>
                <!-- <div style="text-align: left;" ><b>您需要小幫手嗎？</b></div>
                <div style="text-align: left;"><b>-扒扒飯官方聯絡資訊-</b></div>
                <div style="text-align: left;">0800客服專線：0800-000-894 分機9</div>
                <div style="text-align: left;"><span style="letter-spacing: 0.01em;">LINE</span><span style="letter-spacing: 0.01em;">官方帳號：@SGL6834F</span></div>
                <div style="text-align: left;">FB粉絲專頁：扒扒飯</div>
                <div style="text-align: left;"><span style="letter-spacing: 0.01em;">服務時間：</span><span
                        style="letter-spacing: 0.13px;">平日09:00-18:00<u>（遇假期請優先選擇LINE/FB/訂單留言，以方便小幫手聯繫）</u></span></div>
                <div style="text-align: left;"><span style="letter-spacing: 0.13px; font-size: 12px;">*如遇消費爭議，請透過官方聯絡資訊
                        0800-000-894 / 食安專線「1919」/ 全國性消費者服務專線「1950」請求協助，如發生訴訟時雙方同意以台灣高雄地方法院為第一審查管轄法院。</span></div> -->
                <hr>
                <!-- <div style="text-align: left;"><span style="letter-spacing: 0.01em;">Copyright © 2019 扒扒飯 All Rights
                        Reserved.</span><br></div> -->
            </div>
            <div class="supplier"><img class=" ls-is-cached lazyloaded"
                    data-src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/visa.png"
                    src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/visa.png"><img
                    class=" ls-is-cached lazyloaded"
                    data-src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/mastercard.png"
                    src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/mastercard.png"><img
                    class=" ls-is-cached lazyloaded"
                    data-src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/jcb.png"
                    src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/jcb.png"><img
                    class=" ls-is-cached lazyloaded"
                    data-src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/ecpay.png"
                    src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/ecpay.png"><img
                    class=" ls-is-cached lazyloaded"
                    data-src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/7-11.png"
                    src="https://static.1shop.tw/storefront/3.0.90/dist/img/brand/7-11.png"></div>
        </div>
        <div class="copyright">

            <div class="sm">
                本系統由LYTC一頁購物維護
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState('header', ['website']),
    }
}
</script>

<style lang="scss" src="./footer.scss" scoped  ></style>