<template>
    <div class="chat">
        <ul class="list-unstyled chat-list ">
            <li><button type="button" class="btn color-line" @click="openContact('line')"><img
                        src="https://static.1shop.tw/storefront/3.0.90/dist/img/line.svg"></button>
                <div>LINE</div>
            </li>
            <li><button type="button" class="btn color-fb" @click="openContact('facebook')"><img
                        src="https://static.1shop.tw/storefront/3.0.90/dist/img/msger.svg"></button>
                <div>Facebook</div>
            </li>
            <li><button type="button" class="btn phone" @click="openContact('phone')"><img
                        src="https://static.1shop.tw/storefront/3.0.90/dist/img/telephone.svg"></button>
                <div>電話</div>
            </li>
        </ul>
        <ul class="list-unstyled action-list">
            <li>
                <button type="button" class="btn btn-action" @click="toggleChatList($event);">
                    <div class="text">聯絡<br>客服</div><i class="far fa-times"></i>
                </button>
            </li>
            <li class="nextStep">
                <button type="button" class="btn btn-cart" @click="goNextStep($event);">
                    <div class="text">直接<br>購買</div>
                </button>
                <div class="add-to-cart-flag">已加到購物車</div>
            </li>
            <li class="goTopBtn hide">
                <button type="button" class="btn btn-top" @click="goTop();">
                    <i class="far fa-arrow-up"></i>
                </button>
            </li>
        </ul>

    </div>
</template>
<script>
// import $ from 'jquery'
let $;
if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
   $= require( 'jquery')
}
export default {
    data() {
        return {
            // go_top: false,
        }
    },
    created() {
    },
    mounted() {
        this.hineTop();
        var a = $('.nextStep');
        // this.$store.dispatch('cart/get').then(() => {
        //     if (this.$store.getters['cart/number'] !== 0) {
        //         a.is(".notEmpty") ? '' : a.addClass('notEmpty');
        //         $('.nextStep .btn-cart .text').html('立即<br>結賬')
        //     }
        // });
        // this.$store.dispatch('header/getwebsite');
    },
    methods: {
        toggleChatList(a) {
            var a = a.target;
            var e = $(a).closest(".chat"),
                n = 0;
            e.is(".active") ? (e.removeClass("active"), $.map(e.find(".chat-list li"), (function (a) {
                $(a).delay(n).fadeOut(200), n += 100
            }))) : (e.addClass("active"), $.map(e.find(".chat-list li").get().reverse(), (function (a) {
                $(a).delay(n).fadeIn(200), n += 100
            })))
        },
        goTop() {
            $("html, body").scrollTop(0)
        },
        hineTop() {
            $(window).scroll(function (e) {
                if ($(document).scrollTop() > 1e3) {
                    $(".goTopBtn").removeClass("hide")
                } else {
                    $(".goTopBtn").addClass("hide")
                }
            })
        },
        goNextStep(a) {
            // console.log(a);
            // console.log(this.$store.state.cart.number);
            var cart = $(".cart")[0]
            var product = $('.product')[0]
            if (this.$store.state.cart.number !== 0) {
                window.scrollTo({
                    'top': cart.offsetTop,
                    'behavior': 'smooth'
                })
            } else {
                window.scrollTo({
                    'top': product.offsetTop,
                    'behavior': 'smooth'
                })
            }
        },
        openContact(e) {
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

        }
    }


}
</script>
<style lang="scss" scoped src="./fixed.scss"></style>