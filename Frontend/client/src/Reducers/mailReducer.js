import {  ADD_MAIL, GET_MAILS} from "../Actions/Types";

const mailReducer = (state={mails:[]},{type,payload})=>{
    switch(type){
        case ADD_MAIL:
            return {...state,mails:[...state.mails,payload]}
        case GET_MAILS:
            return {...state,mails:payload}
        default: return state
    }
    
}
export default mailReducer