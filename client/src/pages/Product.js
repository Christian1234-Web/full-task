import React, { useEffect,useContext, useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import ProductSecOne from '../components/ProductSecOne';
import Navbar from '../components/Navbar';
import SecondSlider from '../components/SecondSlider';
import Footer from '../components/Footer';
import ImageOne from '../assets/images/first-slider-1.jpg';
import ImageTwo from '../assets/images/first-slider-2.jpg';
import { Store } from '../context/store';

const Product = () => {
  let store = useContext(Store);
  let id = useParams();
  let [pro, setPro] = useState([]);

  useEffect(() => {
    fetchProduct()
  }, []);

  const fetchProduct = () => {
    let url = 'http://localhost:5000/product/' + id.id;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPro(res);
        console.log(res);
      });
  }
  return(
    <div>
      <Navbar />
      <div>
      {pro.map((e, i) => {
        return (
          <ProductSecOne
            image={e.image}
            name={e.name}
            description={e.description}
            price={e.price}
            quantity={e.quantity}
            category={e.category}
            id={e._id}
          />
        )
      })}
     </div>
      <SecondSlider
        header='Birthday Cake'
        ImageOne={ImageOne}
        ImageTwo={ImageTwo}
      />      <Footer/>

    </div>
  )
}
export default Product;