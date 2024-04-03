<template>

    <div id="yearolds2">
        <img id="text2" src="@/assets/img/18.png">세 이상 관람가<br>
        입장 시, 신분증을 반드시 지참해주세요!<br>
        만 18세 미만의 고객님은(영유아 포함) 보호자를 동반하여도<br>
        관람이 불가하며, 만 18세 이상이라도<br>
        고등학교에 재학 중인 고객님은 관람이 불가합니다<br>

        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <SeatContentView></SeatContentView>
        </ModalView>
        <button id="agree" @click="isModalViewed = true">확인</button>

        <!--
                    <div class="payment-methods">
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                            <TestView></TestView>
                        </ModalView>

                        
                        <div id="agree2" @click="isModalViewed = true">
                            확인</div>
                        
                    </div>
                    
                    <input type="hidden" name="payment_method" id="paymentMethod">
                    <input type="submit" value="결제">
                    -->
    </div>
    
</template>

<script>
import '@/assets/css/AgeGuide.css';
import ModalView from "@/components/ModalView.vue";
import SeatContentView from "@/components/SeatContentView.vue";

export default {
    name: "AgeGuide15",
    components: {
        ModalView,
        SeatContentView,
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    methods: {},
    created() { }
};
</script>
<style></style>