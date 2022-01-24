import React,{useState,useRef,useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import ImageOne from '../assets/images/first-slider-1.jpg';
import ImageTwo from '../assets/images/first-slider-2.jpg';
import StarImg from '../assets/images/star-img.png';
import CartImg1 from '../assets/images/cart-img1.png';
import CheckBoxImg from '../assets/images/checkBox-img.png';
import { Store } from '../context/store';

const CartOne = () => {
  let store = useContext(Store)
  let [msg, setMsg] = store.info;
  let [quntyCount, setquntyCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [cart, setCart] = store.ctx;
  let btnHide = useRef();
  let btnShow = useRef();
  let history = useHistory();
  let opts = { format: "%s%v", symbol: "$" };
 
  
    return <>

      <div className="flex" style={{ width: '100%' }}>
        <div className="cartSec1">

          <div className="cartBtn cartSec1-01" >
            <div className="flex" ref={btnShow} style={{ display: 'flex' }}>

              <div>
                <img src={CartImg1} />
              </div>
              <div style={{ padding: '30px' }}>
                <div>
                  <h3>
                    Your MrCake Cart is empty
                  </h3>
                </div>
                <div>
                  <Link t0="/" >Shop today's deals</Link>
                </div>
                <div>
                  <button className="cartBtn1">Sign in to your account</button>

                  <button className="cartBtn2">Sign up now</button>
                </div>
              </div>
            </div>
            <div>



            </div>
          </div>
          <div className="cartSec1-sub">
          </div>

          <div style={{ fontSize: '11.5px', paddingTop: '20px' }}>
            The price and availability of items at MrCake.com are subject to change.
            The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
            Shopping Cart <Link to="" style={{ fontSize: '11.5px' }}>Learn more</Link>

            <p>
              Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
            </p>
          </div>
        </div>

        <div className="cartSec2">
          <div>
            <h4>
              Your recently viewed items
            </h4>
          </div>


          <div className="starBtn">
            <div className="flex">
              <div>
                <img src={ImageOne} className='img-thumbnail' />
              </div>

              <div className="sec2Sec02">
                <div>
                  <Link to="">Acer Chromebook…</Link>
                </div>
                <div>
                  <img src={StarImg} />
                </div>
                <div className="cartAmnt">
                  <Link to="">$269.99</Link>
                </div>
                <div>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div>
                <img src={ImageTwo} className='img-thumbnail' />
              </div>

              <div className="sec2Sec02">
                <div>
                  <Link to="">Razer Blade 15 Base…</Link>
                </div>
                <div>
                  <img src={StarImg} />
                </div>
                <div className="cartAmnt">
                  <Link to="">$1.199.00</Link>
                </div>
                <div>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <img src={ImageOne} className='img-thumbnail' />
              </div>

              <div className="sec2Sec02">
                <div>
                  <Link to="">Lenovo Flex 5 14" 2…</Link>
                </div>
                <div>
                  <img src={StarImg} />
                </div>
                <div className="cartAmnt">
                  <Link to="">$603.35</Link>
                </div>
                <div>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>;
}

export default CartOne;
