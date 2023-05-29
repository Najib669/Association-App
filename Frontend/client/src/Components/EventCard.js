import React from "react";
import "./Eventcard.css";
import Button from "@mui/material/Button";

const Event = ({ el }) => {
  return (
    <div className="cardds">
      <div className="cardbox">
        <div className="cardd">
          <div className="imgg">
            <img
src={el.imgUrl}             alt=""
            />
          </div>
          <div className="contentt">
            <div className="name">
              <h3>{el.name}</h3>
              <h6>{el.location}</h6>
              <h6>{el.startDate}</h6>
            </div>
            <div>
              <Button className="participebt">Participate</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

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
