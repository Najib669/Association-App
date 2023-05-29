import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../Components/EventCard";
import {getEvents } from "../Actions/eventAction";
import "./events.css";
const Events = () => {
  const events = useSelector((state) => state.eventReducer.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  console.log("events",events)
  return (
    <div className="cardpage">
    {events.map((el) => (
     
        <EventCard  el={el}/>
  ))}
     </div>
   
  )}
   

export default Events;






// import React from "react";
// import Card from "../Components/EventCards";

// import image1 from "../img/way.jpg";


// const cards = [
//   {
//     id: 1,
//     title: "Event 1",
//     image: image1,
//     url: "",
//   },
//   {
//     id: 2,
//     title: "Event 1",
//     image: image1,
//     url: "",
//   },
//   {
//     id: 3,
//     title: "Event 1",
//     image: image1,
//     url: "",
//   },
// ];

// function Cards() {
//   return (
//     <div className="container d-flex justify-content-center align-items-center h-100">
//       <div className="row">
//         {cards.map(({ title, image, url, _id }) => (
//           <div className="col-md-4" key={_id}>
//             <Card imageSource={image} title={title} url={url} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;




