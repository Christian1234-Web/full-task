import React, { useRef, useState, useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Col, Row, OverlayTrigger } from 'react-bootstrap';
import { Store } from "../context/store";
import ImageOne from '../assets/images/first-slider-1.jpg';
import ImageTwo from '../assets/images/first-slider-2.jpg';
import StarImg from '../assets/images/star-img.png';

const ProductSecOne = (props) => {
    let store = useContext(Store)
    let history = useHistory();
    let [cart, setCart] = store.ctx;
    let [msg, setMsg] = store.info;
    let [price, setPrice] = store.storePrice
    let [image, setImage] = store.storeImage;
    let [name, setName] = store.storeName;
    let [description, setDescription] = store.storeDescription;
    let [ids, setIds] = store.ctxId

    let [show, setShow] = useState(false);
    let img1 = useRef();
    let img2 = useRef();
    let img3 = useRef();
    let img4 = useRef();
    let img5 = useRef();
    let img6 = useRef();
    let img7 = useRef();


    const addCart = (id) => {
        let url = "http://localhost:5000/cart";
        let data = { product_id: id };
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                history.push("/cart")
            })
    };
    const addUp = () => {
        msg += 1
        setMsg(msg)
    }

    return (
        <>
            <section className="proTablet">
                <div className="d-flex proHd">
                    <Link to="">Cakes </Link>
                    <Link to="">Of & All </Link>
                    <Link to=""> Kinds</Link>
                </div>

                <div className="proSec01 d-flex">
                    <div className="proMenu">
                        <div className='bg-danger w-100'>red </div>
                        <div className='bg-dark w-100'>red </div>
                        <div className='bg-primary w-100'>red </div>

                    </div>
                    <div className="proLargeImgDIv">
                        <div className="proLargeImg">
                            <img src={props.image}  alt='img' />
                        </div>
                    </div>
                    <div className="d-flex propLargeImgAbout">
                        <div className="proImgDetails">
                            <div>
                                <h2 className="proImgDetailsH1">

                                    {props.name}
                                </h2>
                            </div>
                            <div>
                                <Link to="">Visit the Winnovo Store</Link>
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
                                            <img src={StarImg} alt="flag" />
                                            <Link>85 ratings</Link> | <Link>33 answered questions</Link>
                                        </div>

                                    </OverlayTrigger>
                                ))}
                            </div>
                            {/* $69.99 */}
                            <div className="proPrice d-flex">
                                <p className="proSmFt">Price:</p>
                                <p className="proBgFt">{props.price} </p>
                                <p className="pro+">+ $36.39 Shipping & Import Fees Deposit<br></br> to Nigeria <Link>Details</Link></p>


                            </div>
                            <div className="proBrand">
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Brand</p>
                                    </Col>
                                    <Col>
                                        <p>Winnovo</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Operating<br></br>
                                            System</p>
                                    </Col>
                                    <Col>
                                        <p>Android 10.0</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Wireless <br></br>
                                            Communication<br></br>
                                            Technology</p>
                                    </Col>
                                    <Col>
                                        <p>Bluetooth, Wi-Fi, GPS</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Hardware<br></br> Interface</p>
                                    </Col>
                                    <Col>
                                        <p>Bluetooth</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Screen Size</p>
                                    </Col>
                                    <Col>
                                        <p>8 Inches</p>
                                    </Col>
                                </Row>
                            </div>

                            <div className="proAboutItem">
                                <div>
                                    <p className="proBrandBold">About this item</p>
                                </div>
                                <div>
                                    <li>
                                        <p>
                                            {props.description}
                                        </p>
                                    </li>
                                    <div>
                                        <Link>› See more product details</Link>
                                    </div>
                                    <div>
                                        <Link>› Compare with similar items</Link>
                                    </div>
                                </div>


                            </div>


                        </div>

                        <div className="proCartImg">
                            {/* $69.99 */}
                            <div>
                                <p className="proBgFt">{props.price} </p>
                                <p className="pro+">+ $36.39 Shipping & Import Fees Deposit to Nigeria <Link>Details</Link></p>

                            </div>

                            <div className="d-flex">
                                <p>Arrives:</p><p className="proBrandBold">Monday, Aug 2</p>
                            </div>
                            <div>
                                <select>
                                    <option>
                                        Qty 1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                </select>
                            </div>
                            <Link >
                                <div>
                                    <button className="signBtn" onClick={(e) => addCart(props.id)} >Add to Cart</button>
                                </div>
                            </Link>
                            <div>
                                <button className="signBtn">Buy Now</button>

                            </div>
                            <div>
                                <Link>  Secure transaction</Link>
                            </div>
                            <div className="proShipFrom" style={{ fontSize: '12px' }}>
                                <Row>
                                    <Col>
                                        <p>
                                            Ships  from </p>
                                    </Col>
                                    <Col>
                                        <p> Amazon </p>
                                    </Col>
                                </Row>
                                <div className="d-flex">
                                    <Col>
                                        <p>Sold by</p>
                                    </Col>
                                    <div>
                                        <Link style={{ fontSize: '12px' }}>LapTab Factory</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <p>Return Policy:</p>

                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <div className="bg-white p-2" style={{ border: '1px solid gainsboro', fontFamily: 'sans-serif', padding: '5px' }}>
                                                <p>This item is non-returnable, but if the item arrives damaged or<br></br> defective, you may request a refund or replacement.
                                                </p>
                                                <Link>Read full return policy</Link>
                                            </div>
                                        }

                                    >
                                        <div className="starImage">
                                            <Link>This item is non-returnable</Link>

                                        </div>

                                    </OverlayTrigger>
                                ))}

                            </div>

                            <div className="proAdd">
                                <div>
                                    <p className="proBrandBold"> Add an Accessory:</p>
                                </div>
                                <div className="d-flex">
                                    <input type="checkbox" />
                                    <Link style={{ paddingLeft: '5px' }}>Rescue Monthly Whole Home Data and Image Recovery ... $4.99</Link>
                                </div>
                                <div className="d-flex">
                                    <input type="checkbox" />
                                    <p style={{ paddingLeft: '5px' }}>Add a gift receipt for easy returns</p>
                                </div>
                                <div style={{ borderTop: '1px solid gainsboro', padding: '10px' }}>
                                    <button className="logBtn2"> Add to List</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default ProductSecOne;