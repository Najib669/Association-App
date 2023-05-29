import React, { useEffect } from "react";
import Card from "../Components/NewsCards";
import {getNews} from "../Actions/newsAction"
import { useDispatch, useSelector } from "react-redux";





function News (){
  const news = useSelector((state) => state.newsReducer.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);

   return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {news.map((el) => (
          <div className="col-md-4" >
            <Card  el={el}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;


// import React from "react";
// import Card from "../Components/NewsCards";

// import image1 from "../img/Nat.jpeg";

// const cards = [
//   {
//     id: 1,
//     title: "NATIONAL GEOGRAPHY NEWS",
//     image: image1,
//     url: "",
//   },
//   {
//     id: 2,
//     title: "SKY NEWS",
//     image: image1,
//     url: "",
//   },
//   {
//     id: 3,
//     title: "ECOSYSTEM NEWS",
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

// // import React from 'react'
// // import NewsCards from '../Components/NewsCards'

// // const News = () => {
// //   return (
// //     <div>
// //       <NewsCards></NewsCards>
// //     </div>
// //   )
// // }

// // export default News
