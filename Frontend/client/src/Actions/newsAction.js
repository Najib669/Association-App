import { GET_NEWS } from "./Types";
import axios from "axios";

export const getNews = () => (dispatch) => {
  axios.get("http://localhost:8080/news/").then(
    ({ data }) =>
      dispatch({
        type: GET_NEWS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};
