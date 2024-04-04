import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            allPrice:"",
            allPoint:"",
            minusPoint:"",



            cartItems: [],
            phoneNumber: "",
            totalPoint: "",
            point: "",
            plusPoint: "",
            usePoint: ""
        };
    },
    mutations: {
        setAllPrice(state, payload) { /* Movie 총 가격 */
            state.allPrice = payload;
        },
        setallPoint(state, payload) {  /* PlusPoint2View 기존 포인트 */
            state.allPoint = payload;
        },
        setMinusPoint(state, payload) { /* PaymentCheck2View 사용할 포인트 */
            state.minusPoint = payload;
        },



        setCartItems(state, payload) { /* FoodstoreView 장바구니 목록 */
            state.cartItems = payload;
        },
        setPlusPoint(state, payload) { /* FoodstoreView 적립될 포인트 */
            state.plusPoint = payload;
        },
        setPhoneNumber(state, payload) { /* PlusPoint2View 적립폰번호*/
            state.phoneNumber = payload;
        },
        setTotalPoint(state, payload) { /* EndPointView 바뀔 포인트*/
            state.totalPoint = payload;
        },
        setPoint(state, payload) {  /* PlusPoint2View 기존 포인트 */
            state.point = payload;
        },
        setUsePoint(state, payload) { /* PointUse2 기존 포인트  */
            state.usePoint = payload;
        },
    }
});