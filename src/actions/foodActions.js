import {FETCH_MAIN_DATA, FETCH_MAIN_VO} from "./types";
/*
    사용자 (React)
    View => return

 */
import axios from "axios";
// 처리함수
export const fetchMainData = () => dispatch => {
    axios.get('http://localhost/main').then(response => {
        const action={
            type: FETCH_MAIN_DATA,
            payload: response.data
        }
        dispatch(action)
    })
}

export const fetchFoodList = (page) => dispatch => {
    axios.get('http://localhost/food').then(response => {})
}
