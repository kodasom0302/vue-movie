<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">




                    <div>
                        <h1 id="title">포인트 사용 방식</h1>

                        <p id="subTitle">뭐라고 할까ㅏ</p>

                        <button id="AddPoint" onclick="location.href='/addpoint'">
                            <img id="img" src="@/assets/img/addPoint.png">
                            적립
                        </button>

                        <!--
                        <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
                            <PaymentContentView></PaymentContentView>
                        </ModalView>
                        <button id="btnNo" @click="isModalViewed = true">사용</button>
                        -->
                        
                        <button id="UsePoint" onclick="location.href='/addpoint'">
                            <img id="img" src="@/assets/img/usePoint.png">
                            사용
                        </button>
                    </div>




                </div>

            </div>

            <AppFooter />

        </div>
    </div>
</template>


<script>
//import axios from 'axios';
import "@/assets/css/ChoosePoint.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
    name: "PlusPointView",
    components: {
        AppFooter,
        AppHeader,
    },
    data() {
        return {
            isModalViewed: false,
        };
    },
    methods: {},
};
</script>


<style></style>