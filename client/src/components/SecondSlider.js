import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Carousel, Row, Col } from 'react-bootstrap';

const SecondSlider = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="divImg" style={{ backgroundColor: '#fff', width: "100%",padding: "20px",marginBottom:"2rem" }}>
                <div className="flex m-2">
                    <h1>{props.header}</h1> <Link to="" style={{ marginLeft: '10px', color: 'rgb(22, 108, 207)' }}>Shop now</Link>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '200px' }} className="">
                    <Carousel.Item  >
                        <Row >
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px' }}>

                                <img
                                    className="d-block 
                                         w-100"
                                    src={props.ImageOne}
                                    alt="First slide"

                                />
                            </Col>
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px', margin: ' ' }}>
                                <img
                                    className="d-block w-100"
                                    src={props.ImageTwo}
                                    alt="First slide"
                                />
                            </Col>
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px', margin: ' ' }}>
                                <img
                                    className="d-block w-100"
                                    src={props.ImageOne}
                                    alt="First slide"
                                />
                            </Col>
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px', margin: ' ' }}>
                                <img
                                    className="d-block w-100"
                                    src={props.ImageOne}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item >
                        <Row >
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px' }}>

                                <img
                                    className="d-block 
            w-100"
                                    src={props.ImageOne}
                                    alt="First slide"

                                />
                            </Col>
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px', margin: ' ' }}>
                                <img
                                    className="d-block w-100"
                                    src={props.ImageTwo}
                                    alt="First slide"
                                />
                            </Col>
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px', margin: ' ' }}>
                                <img
                                    className="d-block w-100"
                                    src={props.ImageOne}
                                    alt="First slide"
                                />
                            </Col>
                            <Col style={{ backgroundColor: "#fff", height: '210px ', width: '500px', margin: ' ' }}>
                                <img
                                    className="d-block w-100"
                                    src={props.ImageOne}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    );
};
export default SecondSlider;