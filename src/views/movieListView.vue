<template>
    <h1>영화 리스트</h1>
    <table>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>상영시간</th>
                <th>잔여석</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3">1</td>
                <td class="title" rowspan="3">
                    <div>
                        <img id="moviePoster" src="@/assets/img/파묘.jpg">
                        <img id="ageImg" src="@/assets/img/15.svg">
                    </div>파묘
                </td>
                <td>09:30~11:45</td>
                <td><button>29/40</button></td>
            </tr>
            <tr>
                <td>13:05~15:20</td>
                <td><button>13/40</button></td>
            </tr>
            <tr>
                <td>23:00~25:15</td>
                <td><button>08/40</button></td>
            </tr>

            <tr>
                <td rowspan="3">2</td>
                <td class="title" rowspan="3">
                    <div>
                        <img id="moviePoster" src="@/assets/img/댓글부대.jpg">
                        <img id="ageImg" src="@/assets/img/15.svg">
                    </div>댓글부대
                </td>
                <td>12:20~14:19</td>
                <td><button>38/40</button></td>
            </tr>
            <tr>
                <td>17:00~18:59</td>
                <td><button>26/40</button></td>
            </tr>
            <tr>
                <td>24:00~25:59</td>
                <td><button>40/40</button></td>
            </tr>

            <tr>
                <td rowspan="3">3</td>
                <td class="title" rowspan="3">
                    <div>
                        <img id="moviePoster" src="@/assets/img/코난.jpg">
                        <img id="ageImg" src="@/assets/img/12.svg">
                    </div>명탐정 코난 - 흑철의 어영
                </td>
                <td>07:50~09:50</td>
                <td><button>18/20</button></td>
            </tr>
            <tr>
                <td>10:10~12:10</td>
                <td><button>10/20</button></td>
            </tr>
            <tr>
                <td>14:35~16:35</td>
                <td><button>01/20</button></td>
            </tr>
        </tbody>
    </table>
</template>


<script>
import "@/assets/css/movieList.css"

export default {
    name: "movieListView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>