import React, { useState, useRef, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import formatCurrency from 'format-currency'
import ImageOne from '../assets/images/first-slider-1.jpg';
import ImageTwo from '../assets/images/first-slider-2.jpg';
import StarImg from '../assets/images/star-img.png';
import CartImg1 from '../assets/images/cart-img1.png';
import CheckBoxImg from '../assets/images/checkBox-img.png';
import { Store } from '../context/store';
import { PaystackButton } from "react-paystack";
import { useCookies } from 'react-cookie';

const CartTwo = (e) => {
  let store = useContext(Store)
  let [msg, setMsg] = store.info;
  let [cookie,removeCookie] = useCookies(['email', 'user',]);
  const publicKey = "pk_test_332dac7ec4c199f3168acb3f6cb84050e526aeb9"
  let [quntyCount, setquntyCount] = useState(0);
  let [total, setTotal] = useState(0);
  let [cart, setCart] = store.ctx;
  let [amount, setAmount] = useState(" ");
   let [id, setId] = useState(" ");
   let [idx, setIdx] = useState(" ");
    let [ids, setIds] = useState(" ");

  let btnHide = useRef();
  let btnShow = useRef();
  let history = useHistory();
  let opts = { format: "%s%v", symbol: "$" };
 
  
  const selectOrder = (cart, pro,amount)=>{
     if (!cookie.user) {
      return history.push("/login");
    }
 setAmount(amount * 100);
setIdx(cart);
setIds(pro);
 console.log(cookie.user)
  }

  const addOrder = () => {
    let url = "http://localhost:5000/order";
    let data = { product_id: ids, cart_id: idx, user_id:cookie.user };
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        // setAmount(amount);
        console.log(res);
      })
  }
  const componentProps = {
    email: cookie.email,
    amount,
    metadata: {
      name:cookie.name
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onSuccess: () => addOrder(),
    onClose: () => alert("Wait! Don't leave :("),
  };

  let btnDelet = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
    items.splice(id, 1);
    setCart(items);
  };

  useEffect(() => {
    fetchCart()
  }, []);

  const fetchCart = () => {
    let url = 'http://localhost:5000/cart';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setCart(res);
        console.log(res)
      });
  }

  return <>

    <div className="flex" style={{ width: '100%', height: '100%' }}>
      <div className="cartSec11">
        <h1>Shopping Cart</h1>
        {cart.map((e, i) => {
          return (
            <div className="cartBtn cartSec1-011 flex" key={e.key}>
              <div className="flex" ref={btnShow} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>

                <div>
                  <img src={`http://localhost:5000${e.product_id.image}`} style={{ objectFit: 'contain', width: '150px', height: '150px' }} />
                </div>
                <div style={{ padding: '30px' }}>
                  <div>
                    <h3>
                      {e.product_id.name}
                    </h3>
                  </div>
                  <div>
                    <Link><img src={CheckBoxImg} />This a gift Learn more</Link>
                  </div>
                  <div className="btnQuanty">
                    <Button variant="danger" type="button" >Delete </Button>
                    <button style={{ width: "5rem", fontSize: "10px" }}
                     onClick={() => selectOrder(e._id, e.product_id._id,e.product_id.price)}>
                      {/* <PaystackButton   {...componentProps} /> */}
                      </button>
                  </div>
                </div>
              </div>
              <div style={{ color: 'red', padding: '10px' }}>
                <p>Price</p>
                {formatCurrency(` ${e.product_id.price}`, opts)}
              </div>
              <hr></hr>

            </div>
          )
        })}
        <hr></hr>
        <div className="row">
          <div>Subtotal({cart.length} items):{cart.length}</div>

        </div>

        <div className="cartSec1-sub1">

        </div>
        <div style={{ fontSize: '11.5px', margin: '10px' }}>
          The price and availability of items at MrCake.com are subject to change.
          The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
          Shopping Cart <Link to="" style={{ fontSize: '11.5px' }}>Learn more</Link>

          <p>
            Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
          </p>
        </div>
      </div>

      <div className="cartSec21">
        <div>
          <h4>
            Your recently viewed items
          </h4>
        </div>


        <div className="starBtn">
          <div className="flex">
            <div>
              <img src={ImageTwo}  className='img-thumbnail' />
            </div>

            <div className="sec2Sec02">
              <div>
                <Link to="">Acer Chromebook…</Link>
              </div>
              <div>
                <img src={StarImg} /> <Link to="">6,870</Link>
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
              <img src={ImageOne}  className='img-thumbnail' />
            </div>

            <div className="sec2Sec02">
              <div>
                <Link to="">Razer Blade 15 Base…</Link>
              </div>
              <div>
                <img src={StarImg} /> <Link to="">1,237</Link>
              </div>
              <div className="cartAmnt">
                <Link to="">$1.199.00</Link>
              </div>
              <div>
                <button >Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src={ImageTwo}  className='img-thumbnail' />
            </div>

            <div className="sec2Sec02">
              <div>
                <Link to="">Lenovo Flex 5 14" 2…</Link>
              </div>
              <div>
                <img src={StarImg} /> <Link to="">4,303</Link>
              </div>
              <div className="cartAmnt">
                <Link to="">$603.35</Link>
              </div>
              <div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src={ImageOne}  className='img-thumbnail' />
            </div>

            <div className="sec2Sec02">
              <div>
                <Link to="">Plantronics - Voyager…</Link>
              </div>
              <div>
                <img src={StarImg} /> <Link to=""> 21,040</Link>
              </div>
              <div className="cartAmnt">
                <Link to="">$79.99</Link>
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

export default CartTwo;
