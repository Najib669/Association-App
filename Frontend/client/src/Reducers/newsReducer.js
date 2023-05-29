import {GET_NEWS } from "../Actions/Types";

const newsReducer = (state={news:[]},{type,payload})=>{
    switch(type){

        case GET_NEWS:
            return {...state,news:payload}
        default: return state
    }
    
}
export default newsReducer