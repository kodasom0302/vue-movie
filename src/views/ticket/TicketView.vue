<template>
  <div>
    <div id="wrap">
      <AppHeader />

      <div id="container" class="clearfix">
        <div id="content">
          <div>
            <h1 id="m-title">영화 리스트</h1>
            <table>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>상영시간 / 잔여석</th>
                </tr>
              </thead>
              <tbody v-bind:key="i" v-for="(movieVo, i) in mList">
                <tr>
                  <td id="mName" class="space2" rowspan="2">
                    <!-- 
                    <img
                      v-bind:src="`http://localhost:9000/upload/${movieVo.saveName}`"
                      id="img-movie"
                    />
                  -->
                  <img src="../../assets/img/파묘.jpg" id="img-movie" />
                    <img src="@/assets/img/12.svg" />
                      {{ movieVo.m_name }}({{ movieVo.m_no }})
                  </td>

                  <!-- 상영시간 for 문 -->
                  <td>
                    <div>
                      <div v-on:click="getOneTime(movieVo.m_no)">
                        상영시간
                      </div>
                    </div>
                  </td>
                  <!-- //상영시간 for 문 -->

                  <td id="mInfo">
                    <!-- 좌석버튼 for문 -->
                    <div id="seat_btn">
                      <ModalView
                        v-if="isModalViewed"
                        @close-modal="isModalViewed = false"
                      >
                        <SeatContentView></SeatContentView>
                      </ModalView>
                      <button @click="isModalViewed = true">
                        {{ movieVo.m_remarks }}좌석
                      </button>
                    </div>


                    <!-- 좌석버튼 for문 -->
                  </td>
                </tr>
              </tbody>
            </table>
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
import "@/assets/css/TicketView.css";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ModalView from "@/components/ModalView.vue";
import SeatContentView from "@/components/SeatContentView.vue";
import axios from "axios";

export default {
  name: "TicketView",
  components: {
    AppFooter,
    AppHeader,
    ModalView,
    SeatContentView,
  },
  data() {
    return {
      isModalViewed: false,
      mList: [],
      movieVo: {
        m_no: "",
        m_name: "",
        m_ticketing: "",
        m_remarks: "",
        saveName: "",
      },
      count: "",
      m_no: this.m_no
    };
  },
  computed: {},
  methods: {
    getList() {
      console.log("리스트 가져오기");

      axios({
        method: "get", // put, post, delete
        url: "http://localhost:9000/api/movie/list",
        headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: guestbookVo, //put, post, de    lete 방식 자동으로 JSON으로 변환 전달

        responseType: "json", //수신타입
      })
        .then((response) => {
          //console.log(response.data.apiData); //수신데이타
          this.mList = response.data.apiData;
          //console.log(this.mList[0].m_no);
        })
        .catch((error) => {
          console.log(error);
        });
        
    },
    /*
    getTimeList() {
      console.log("리스트 가져오기");

      axios({
        method: "get", // put, post, delete
        url: "http://localhost:9000/api/movie/timelist",
        headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: guestbookVo, //put, post, de    lete 방식 자동으로 JSON으로 변환 전달

        responseType: "json", //수신타입
      })
        .then((response) => {
          //console.log(response.data.apiData); //수신데이타
          this.tList = response.data.apiData;
          // for(let iwanttogohome=0, index<this.mList.length; index++){
          //   console.log(this.mList[index].m_no);
          // }
          //console.log(this.mList[].m_no);
          
          // for (let index = 0; index < this.tList.length; index++) {
          //   console.log(this.tList[index].m_no);
          // }

        })
        .catch((error) => {
          console.log(error);
        });
        
    },
    *//*
    getOneTime(movieVo.m_no) {
      console.log("리스트 가져오기");
      console.log(this.no);

      axios({
        method: "get", // put, post, delete
        url: "http://localhost:9000/api/movie/movieonetime",
        headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        data: this.no, //put, post, de    lete 방식 자동으로 JSON으로 변환 전달

        responseType: "json", //수신타입
      })
        .then((response) => {
          console.log(response.data.apiData); //수신데이타
          
          this.tList = response.data.apiData;
        })
        .catch((error) => {
          console.log(error);
        });
        
    },*/
    
    
  },
  created() {
    this.getList();
    this.getTimeList();
    this.getOneTime();
  },
};
</script>