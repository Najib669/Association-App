import React from "react";

import "./Newscard.css";

function Card({ el }) {
  return (
    <div className="card text-center bg-light animate__animated animate__fadeInUp">
      <div className="overflow">
        <img
          src="https://www.frogx3.com/wp-content/uploads/2018/05/natgeo.jpg"
          className="card-img-top"
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{el.name}</h4>
        <button className="btn btn-outline-secondary border-0">
          {" "}
          LEARN ABOUT{" "}
        </button>
      </div>
    </div>
  );
}

export default Card;

// import React from "react";
// import PropTypes from "prop-types";

// import "./Newscard.css";

// function Card({ imageSource, title, text, url }) {
//   return (
//     <div className="card text-center bg-light animate__animated animate__fadeInUp">
//       <div className="overflow">
//         <img src={imageSource} alt="a wallpaper" className="card-img-top" />
//       </div>
//       <div className="card-body text-light">
//         <h4 className="card-title">{title}</h4>
//         <p className="card-text text-secondary">{text ? text : ""}</p>
//         <button className="btn btn-outline-secondary border-0">
//           {" "}
//           LEARN ABOUT{" "}
//         </button>
//       </div>
//     </div>
//   );
// }

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string,
//   url: PropTypes.string,
//   imageSource: PropTypes.string,
// };

// export default Card;

// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Button from '@mui/material/Button';
// // import CameraIcon from '@mui/icons-material/PhotoCamera';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Grid from '@mui/material/Grid';
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import Link from '@mui/material/Link';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import {useEffect} from 'react'
// // import {useDispatch, useSelector} from 'react-redux'
// // import { getNews } from '../Actions/newsAction'

// // function Copyright() {

// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center">
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// // //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const theme = createTheme();

// // export default function Album() {
// //   const news = useSelector(state=>state.newsReducer.news)
// //   const dispatch=useDispatch()
// //   useEffect(()=>{
// //          dispatch(getNews())
// //        },[])
// //   return (
// //     <ThemeProvider theme={theme}>
// //       <main>
// //         {/* Hero unit */}

// //           <Container maxWidth="sm" style={{ paddingTop: 35 }} >
// //             <Typography variant="h5" align="center" color="text.secondary" paragraph>
// //            latest inetrnational and national news about our mother earth,nature and the ecological system, etc. we sensibilize you to take action and  "Be the change you wish to see in the world."
// //             </Typography>
// //             <Stack
// //               sx={{ pt: 4 }}
// //               direction="row"
// //               spacing={2}
// //               justifyContent="center"
// //             >
// //               <Button variant="contained">Join our events</Button>
// //               <Button variant="outlined">Donate</Button>
// //             </Stack>
// //           </Container>

// //         <Container sx={{ py: 8 }} maxWidth="md">
// //           {/* End hero unit */}
// //           <Grid container spacing={4}>

// //             {news.map((card) => (
// //               <Grid item key={card} xs={12} sm={6} md={4}>
// //                 <Card
// //                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
// //                 >
// //                   <CardMedia
// //                     component="img"
// //                     sx={{
// //                       // 16:9
// //                       pt: '56.25%',
// //                     }}
// //                     image="https://source.unsplash.com/random"
// //                     alt="random"
// //                   />
// //                   <CardContent sx={{ flexGrow: 1 }}>
// //                     <Typography gutterBottom variant="h5" component="h2">
// //                     Climat : l’année 2022 est la plus chaude
// //                     </Typography>
// //                     <Typography>
// //                       {card.description}
// //                     </Typography>
// //                     <Typography>
// //                     {card.updatedBy}
// //                     </Typography>
// //                   </CardContent>
// //                   <CardActions>
// //                     <Button size="small">View</Button>
// //                     <Button size="small">Edit</Button>
// //                   </CardActions>
// //                 </Card>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //       </main>

// //     </ThemeProvider>
// //   );
// // }
