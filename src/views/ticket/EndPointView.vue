<template>
    <div>
        <div id="wrap">

            <AppHeader />

            <div id="container" class="clearfix">

                <div id="content">




                    <div>
                        <h1 id="title">포인트 적립 완료</h1>

                        <p id="pointMent">적립 포인트 : </p>
                        <p id="pointMent">누적 포인트 : </p>

                        <button id="btnOk" onclick="location.href='/payment/paymentform'">확인</button>
                    </div>




                </div>

            </div>

            <AppFooter />

        </div>
    </div>
</template>


<script>
import "@/assets/css/EndPoint.css";
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
    name: "EndPointView",
    components: {
        AppFooter,
        AppHeader,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>