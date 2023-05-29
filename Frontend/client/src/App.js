import "./App.css";
import Button from "react-bootstrap/Button";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Events from "./Pages/Events";
import News from "./Pages/News";
import Aboutus from "./Pages/Aboutus";
import Shop from "./Pages/Shop";
import Donation from "./Pages/Donation";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";
import Profile from "./Pages/Profile";
import UpdateProfile from "./Pages/UpdateProfile";
import Checkout from "./Pages/Checkout";
import "react-toastify/dist/ReactToastify.css";
import { getNews } from "./Actions/newsAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [total, setTotal] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item._id === product._id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item._id === product._id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClearance = () => {
    setCartItems([]);
  };
  const handleTotalPrice = (sum) => {
    setTotal(sum);
  };

  const [inputText, setInputText] = useState("");
  const handleInput = (text) => {
    //convert input text to lower case
    var lowerCase = text.toLowerCase();
    setInputText(lowerCase);
  };
  //get news
  const news = useSelector((state) => state.newsReducer.news);
  console.log(news);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);
  const [movies, setMovies] = useState([
    {
      name: "incendies",
      realisateur: "ouafa",
    },
    {
      name: "good will hunting",
      realisateur: "najib",
    },
    {
      name: "seven",
      realisateur: "rabeb",
    },
  ]);
  const result = news.filter((item) => {
    return;
    item.name.toLowerCase().includes(inputText);
  });

  console.log("result", result);
  return (
    <div className="App">
      <Navbar handleInput={handleInput}></Navbar>

      {result.map((item) => (
        <h1>{item.name}</h1>
      ))}

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutus" element={<Aboutus></Aboutus>} />
        <Route path="/news" element={<News></News>} />
        <Route path="/events" element={<Events></Events>} />
        <Route
          path="/shop"
          element={
            <Shop
              handleAddProduct={handleAddProduct}
              cartItems={cartItems}
            ></Shop>
          }
        />

        <Route path="/donation" element={<Donation></Donation>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              handleTotalPrice={handleTotalPrice}
            ></Cart>
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout total={total} cartItems={cartItems}>
              {" "}
            </Checkout>
          }
        />

        <Route path="/profile" element={<Profile></Profile>} />
        <Route
          path="/updateprofile"
          element={<UpdateProfile></UpdateProfile>}
        />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
