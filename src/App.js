import React, { useState, useEffect, Fragment } from "react";

// React_Router_Dom
import { Routes, Route,useNavigate } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Helpers
import { commerce } from "./helpers/Commerce";



// Pages
import HomePage from "./pages/Home/index";
import CartPage from "./pages/Cart/index";
import NotFoundPage from "./pages/404/index";
import CardDetail from "./pages/CardDetail/CardDetail";
import Apple from "./pages/Apple/Apple";
import Samsung from "./pages/Samsung/Samsung";
import Xiaomi from "./pages/Xiaomi/Xiaomi";
import Phones from "./pages/Phones/Phones";
import AllWatches from "./pages/AllWatches/AllWatches";
import AllAcessories from "./pages/AllAccessories/AllAccessories";
import OnlyPhones from "./pages/OnlyPhones/OnlyPhones";
import { useDispatch, useSelector } from "react-redux";
import FavoriteCart from "./components/FavoriteCart/FavoriteCart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Order from "./components/Order/Order";
import GenerateToken from "./components/GenerateToken/GenerateToken";


const App = () => {


  const navigate = useNavigate();


  const showInfo = (id)=>{
    console.log("yes");
    navigate(`/${id}`);
  }
  const dispatch = useDispatch();


  const [isLoggedIn,setISLogginIn] = useState(commerce.customer.isLoggedIn())

  return (
    
    <div className="App">
      <Fragment>
      <Header showInfo={showInfo} isLoggedIn={isLoggedIn} setISLogginIn={setISLogginIn} />

      <Routes>
        <Route path="/login" element={<Login  setISLogginIn={setISLogginIn} isLoggedIn={isLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage showInfo={showInfo} />} />
        <Route path="/favorites" element={<FavoriteCart />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:info" element={<CardDetail />} />
        <Route path="/apple" element={<Apple showInfo={showInfo} />} />
        <Route path="/samsung" element={<Samsung showInfo={showInfo}  />} />
        <Route path="/xiaomi" element={<Xiaomi showInfo={showInfo}  />} />
        <Route path="/phones" element={<Phones showInfo={showInfo}  />} />
        <Route path="/watches" element={<AllWatches showInfo={showInfo}  />} />
        <Route path="/accessories" element={<AllAcessories showInfo={showInfo}  />} />
        <Route path="/generate-token/:token" element={<GenerateToken />}  setISLogginIn={setISLogginIn} />
        <Route path="/allProducts" element={<OnlyPhones showInfo={showInfo}  />} />
        <Route path="/order" element={<Order setISLogginIn={setISLogginIn} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Fragment>
    </div>
    
  );
}

export default App;



