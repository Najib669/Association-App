// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getEvents } from "../Actions/eventAction";
// import "./EventCard.css";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

// export default function Album() {
//   const events = useSelector((state) => state.eventReducer.events);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getEvents());
//   }, []);
//   return (
//     <ThemeProvider theme={theme}>
//       <main>
//         {/* Hero unit */}

//         <Container maxWidth="sm" style={{ paddingTop: 15 }}>
//           <Typography variant="h5" color="text.secondary" paragraph>
//             latest inetrnational and national news about our mother earth,nature
//             and the ecological system, etc. we sensibilize you to take action
//             and "Be the change you wish to see in the world."
//           </Typography>
//           <Stack
//             sx={{ pt: 1 }}
//             direction="row"
//             spacing={2}
//             justifyContent="center"
//           ></Stack>
//         </Container>

//         <Container sx={{ py: 5 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={10}>
//             {events.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={5}>
//                 <Card
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={
//                       {
//                         //16:9
//                         //   pt: '56.25%',
//                       }
//                     }
//                     image="https://source.unsplash.com/random"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Event Title
//                     </Typography>
//                     <Typography>{card.description}</Typography>
//                     <Typography>{card.startDate}</Typography>
//                     <Typography>{card.endtDate}</Typography>
//                     <Typography>{card.location}</Typography>
//                     <Typography>{card.updatedBy}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Participate</Button>
//                     <Button size="small">Read More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </ThemeProvider>
//   );
// }
