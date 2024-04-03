<template>

    <div id="yearolds">
        <img id="text" src="@/assets/img/12세.png">세 이상 관람가<br>
        만 12세 미만의 고객님은(영유아 포함)<br>
        반드시 성인 보호자의 동반하에 관람이 가능합니다<br>
        (확인 불가 시 입장 제한)<br>

        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <SeatContentView></SeatContentView>
        </ModalView>
        <button id="agree" @click="isModalViewed = true">확인</button>
    </div>

</template>

<script>
import '@/assets/css/AgeGuide.css';
import ModalView from "@/components/ModalView.vue";
import SeatContentView from "@/components/SeatContentView.vue";

export default {
    name: "AgeGuide12",
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