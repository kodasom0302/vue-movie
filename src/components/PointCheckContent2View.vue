<template>
    <div class="content">
        <!-- 이미지등록 팝업(모달)창 -->
        <form action="" method="" enctype="multipart/form-data">

            <div id="closeBtn" class="closeBtn">×</div>

            <div class="m-header"></div>

            <div class="m-body">
                <div id="pointuse" action="" method="">
                    <h1>포인트 사용</h1>
                    <div class="point-info">
                        <p class="total-price">총 금액: {{ $store.state.allPrice }}원</p>
                        <p class="total-price">사용가능포인트: {{ $store.state.allPoint }}원</p>
                        <p class="total-price">사용포인트: <input type="text" v-model="allPoint" placeholder=""> p</p>
                        <p class="total-price">총 금액: {{ $store.state.allPrice }}원</p>

                        <!--
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                            <PointUseContentView></PointUseContentView>
                        </ModalView>
                        -->
                    </div>
                    <div class="dial-container">
                        <div class="dial-button" @click="appendNumber(1)">1</div>
                        <div class="dial-button" @click="appendNumber(2)">2</div>
                        <div class="dial-button" @click="appendNumber(3)">3</div>
                        <br>
                        <div class="dial-button" @click="appendNumber(4)">4</div>
                        <div class="dial-button" @click="appendNumber(5)">5</div>
                        <div class="dial-button" @click="appendNumber(6)">6</div>
                        <br>
                        <div class="dial-button" @click="appendNumber(7)">7</div>
                        <div class="dial-button" @click="appendNumber(8)">8</div>
                        <div class="dial-button" @click="appendNumber(9)">9</div>
                        <br>
                        <div class="dial-button" @click="appendNumber(0)">0</div>
                        <div class="dial-button" @click="deleteLastDigit">지움</div>
                        <div class="dial-button" @click="clearPhoneNumberMethod">전체삭제</div>
                    </div>

                    <div class="payment-methods">
                        <!--
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                            <PointUseContentView></PointUseContentView>
                        </ModalView>
                        -->

                        <router-link to="/payment/paymentform">
                            <!--
                                <div class="point-method" @click="calculateTotalPrice; isModalViewed = false">
                            -->
                            <div class="point-method">
                                적용하기
                            </div>
                        </router-link>


                    </div>
                    <input type="hidden" name="payment_method" id="paymentMethod">
                    <input type="submit" value="결제">
                </div>
            </div>

        </form>
    </div>
</template>


<script>
import "@/assets/css/PointUseView.css";
//import ModalView from "@/components/ModalView.vue";
//import PointUseContentView from '@/components/PointUseContentView.vue';


export default {
    name: "PointUseView",
    components: {
        //ModalView,
        //PointUseContentView,
    },
    data() {
        return {
            //isModalViewed: false,
            allPoint:""
        };
    },
    computed: {
        allPrice() {
            return this.$store.state.allPrice;
        }
    },
    methods: {
        calculateAllPrice() {
            const allPrice = this.allPrice - this.allPoint;
            this.$store.commit('setAllPrice', allPrice);
            /* 나중에 확인하기 */
        },

    }
};
</script>