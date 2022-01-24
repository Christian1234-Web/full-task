import React, { useEffect, useState, useRef, useContext } from 'react';
import { NavDropdown, Col, Row, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Store } from "../context/store";


const ShopCompo = (props) => {
  let store = useContext(Store);
  let [price, setPrice] = store.storePrice
  let [image, setImage] = store.storeImage;
  let [name, setName] = store.storeName;
  let [proId, setProId] = store.storeId;
  let [ids, setIds] = store.ctxId
  let url = 'http://localhost:5000';
 
  return (
    <>
      <div className="shopContent">
        <Col style={{ display: '' }}>
          <div className="shopCntWrapper">
            <Link to={`/product/${props.id}`}>
              <div>
                <img src={url + props.image} alt="img" />
              </div>
            </Link>

            <div className="shopDetails">
              <div>
                <Link>{props.name}</Link>
              </div>
              <div>
                {['bottom'].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <div className="bg-white p-2">
                        <p>Sorry, content is not available.</p>

                      </div>
                    }

                  >
                    <div className="starImage">
                      <img src={props.StarImg} alt="flag" />
                      <Link>2,345</Link>
                    </div>

                  </OverlayTrigger>
                ))}
              </div>
              <div style={{ color: 'red' }}>
                <p>${props.price}</p>
              </div>
              <div>
                <>Ships to Nigeria</>
              </div>
              <div>More Buying Choices</div>
              <div>${props.price} <Link>(141 used & new offers)</Link></div>
            </div>

          </div>

        </Col>
      </div>

    </>
  )
}
export default ShopCompo;


