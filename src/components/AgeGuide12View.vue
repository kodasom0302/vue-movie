<template>
  <div class="content">
    <!-- 이미지등록 팝업(모달)창 -->
    <form action="" method="" enctype="multipart/form-data">

      <div id="closeBtn" class="closeBtn" v-on:click="closeAddModal">×</div>

      <div class="m-header"></div>

      <div class="m-body">



        
          
        <div id="yearolds">
          <img id="text" src="@/assets/img/12세.png">세 이상 관람가<br>
          만 12세 미만의 고객님은(영유아 포함)<br>
          반드시 성인 보호자의 동반하에 관람이 가능합니다<br>
          (확인 불가 시 입장 제한)<br>

          <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
            <SeatContentView></SeatContentView>
          </ModalView>
          <button id="agree" @click="isModalViewed=true">확인</button>
        </div>




















      </div>

      <div class="m-footer">
        <div class="button-container">
          <a href="/" class="btn-home">홈으로 돌아가기</a>
        </div>
      </div>

    </form>
  </div>
</template>


<script>
import "@/assets/css/AgeGuide.css";
import ModalView from "@/components/ModalView.vue";
import SeatContentView from "@/components/SeatContentView.vue";

export default {
  name: "AgeGuide12View",
  components: {
    ModalView,
    SeatContentView,
  },
  data() {
    return {
      isModalViewed: false,
    };
  },
  methods: {
    //모달창 닫기 버튼(X) 클릭했을 때
    closePayModal() {
      console.log("클릭");
    },
  },
  created() {
  }
};
</script>
