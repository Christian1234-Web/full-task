import React, { useState } from 'react';
import ImageOne from '../assets/images/w-cake4.jpg';
import ImageTwo from '../assets/images/w-cake5.jpg';
import ImageThree from '../assets/images/w-cake6.jpg';

import { Carousel } from 'react-bootstrap';

const FirstSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return <div>

        <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '30rem',padding:"0px",margin:"0px" }}>
            <Carousel.Item  >
                <img
                    className=""
                    src={ImageThree}
                    alt="First slide"
                    style={{ height: "30rem", width: "99.9%",objectFit:"cover" }}
                />

            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=""
                    src={ImageThree}
                    alt="First slide"
                    style={{ height: "30rem", width: "99.9%",objectFit:"cover" }}

                />

            </Carousel.Item> <Carousel.Item >
                <img
                    className=""
                    src={ImageTwo}
                    alt="First slide"
                    style={{ height: "30rem", width: "99.9%",objectFit:"cover" }}

                />

            </Carousel.Item>
        </Carousel>
    </div>;
}

export default FirstSlider;
