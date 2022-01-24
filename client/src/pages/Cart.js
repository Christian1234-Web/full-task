import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import formatCurrency from 'format-currency'
import { Store } from "../context/store";
import SecondSlider from '../components/SecondSlider';
import Footer from '../components/Footer';
import CartTwo from '../components/CartTwo';
import CartOne from '../components/CartOne';
import ImageOne from '../assets/images/first-slider-1.jpg';
import ImageTwo from '../assets/images/first-slider-2.jpg';
import StarImg from '../assets/images/star-img.png';
import CartImg1 from '../assets/images/cart-img1.png';
import CheckBoxImg from '../assets/images/checkBox-img.png';


// import AddToCart from '../components/AddToCart';

const Cart = () => {
  let store = useContext(Store)
  let [msg, setMsg] = store.info;
  let [price, setPrice] = store.storePrice
  let [image, setImage] = store.storeImage;
  let [name, setName] = store.storeName;
  let [description, setDescription] = store.storeDescription;
  let [cart, setCart] = store.ctx;



  if (cart.lenth === 0) {
    return (
      <div>
        <Navbar />
        <CartOne />
        <SecondSlider
          header='Related Cake'
          ImageOne={ImageOne}
          ImageTwo={ImageTwo}
        />
        <Footer />

      </div>
    )
  }
   else {
    return (
      <div>
        <Navbar />
              <CartTwo
              />

        <SecondSlider
          header='Related Cake'
          ImageOne={ImageOne}
          ImageTwo={ImageTwo}
        />
        <Footer />
      </div>
    )
  }
}
export default Cart;