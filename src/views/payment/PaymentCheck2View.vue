<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">




                    
                    <div id="payForm" action="" method="">
                        <h1 id="choosePay">결제 수단 선택</h1>
                        <div class="priceInfo">
                            <p class="allPrice">총 금액: {{ allPrice }}원</p>
                            <p class="allPrice">포인트 사용: {{ minusPoint }}점</p>
                            <p class="allPrice">결제 금액: {{ allPrice }}원</p>
                        </div>
                        <div class="payMethods">
                            <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                                <PaymentContent2View></PaymentContent2View>
                            </ModalView>

                            
                            <div class="payMethod" @click="isModalViewed = true">
                                <img id="creditCard" src="@/assets/img/card.png">카드 결제</div>
                            <div class="payMethod" @click="isModalViewed = true">
                                <img id="money" src="@/assets/img/cash.png">현금 결제</div>
                            <div class="payMethod" @click="isModalViewed = true">
                                <img id="userPoint" src="@/assets/img/point.png">포인트 결제</div>
                        </div>
                        <input type="hidden" name="payment_method" id="paymentMethod">
                        <input type="submit" value="결제">
                    </div>
                    <div>
                    </div>









                </div>
                <!-- //content  -->

            </div>
            <!-- //container  -->


            <AppFooter />
            <!-- //footer -->
        </div>
        <!-- //wrap -->
    </div>
</template>

<script>
import "@/assets/css/PaymentCheck2View.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import ModalView from "@/components/ModalView.vue";
import PaymentContent2View from '@/components/PaymentContent2View.vue';

export default {
    name: "MoviePayView",
    components: {
        AppFooter,
        AppHeader,
        ModalView,
        PaymentContent2View
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    computed: {
        allPrice() {
            return this.$route.query.allPrice;
        },
        allPrice() {
            return this.$route.query.allPrice;
        },
        allPrice() {
            return this.$route.query.allPrice;
        }

    },
    methods: {


    }
};
</script>