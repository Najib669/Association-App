import {  ADD_DONATION, GET_DONATION} from "../Actions/Types";

const donationReducer = (state={donations:[]},{type,payload})=>{
    switch(type){
        case ADD_DONATION:
            return {...state,donations:[...state.donations,payload]}
        case GET_DONATION:
            return {...state,donations:payload}
        default: return state
    }
    
}
export default donationReducer