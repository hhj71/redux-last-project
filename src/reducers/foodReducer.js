import {FETCH_MAIN_DATA} from "../actions/types";

const foodState={
    food_main_list:{},
    food_list:[],

}

export default function (state = foodState, action) {
    switch (action.type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                food_main_list: action.payload

            }
    }
}