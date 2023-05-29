import {GET_PRODUCTS } from "./Types";
import axios from "axios";



export const getProducts = () => (dispatch) => {
  axios.get("http://localhost:8080/products/").then(
    ({ data }) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};

