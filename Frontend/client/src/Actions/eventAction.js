import { GET_EVENTS } from "./Types";
import { useDispatch } from "react-redux";
import axios from "axios";



export const getEvents = () => (dispatch) => {
  axios.get("http://localhost:8080/events/").then(
    ({ data }) =>
      dispatch({
        type: GET_EVENTS,
        payload: data,
      })
      .catch((error) => {
        console.log(error); //Logs a string: Error: Request failed with status code 404
      })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
  );
};
