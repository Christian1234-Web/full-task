import React from 'react'
import { Link } from 'react-router-dom';
import ImageOne from '../assets/images/w-cake4.jpg';
import ImageTwo from '../assets/images/w-cake5.jpg';
import ImageThree from '../assets/images/w-cake6.jpg';
function SectionTwo(props) {
    return (
        <>
            <section className="row sectionTwo">
                <div className="comp col-lg-3 col-md-6 col-sm-12 p-md-2 p-sm-3">
                    <h1 className='display-4 text-sm-center'>Birthday Cake</h1>
                    <Link to="/shop">
                        <img src={ImageOne} style={{ width: "100%", height: "20rem" }} class="img-thumbnail" alt='img' />
                    </Link>
                        <Link to="">explore all</Link> 

                </div>

                <div className="comp col-lg-3 col-md-6 col-sm-12 p-md-2 p-sm-3">
                <h1 className='display-4 text-sm-center'>Wedding Cake</h1>
                    <Link to="/shop">
                        <img src={ImageThree} style={{ width: "100%", height: "20rem" }} class="img-thumbnail" alt='img' />
                    </Link>
                        <Link to="">explore all</Link> 
                </div>
                <div className="comp col-lg-3 col-md-6 col-sm-12 p-md-2 p-sm-3">
                    <h1 className='display-4 text-sm-center'>Normal Cake</h1>
                    <Link to="/shop">
                        <img src={ImageTwo} style={{ width: "100%", height: "20rem" }} class="img-thumbnail" alt='img' />
                    </Link>
                        <Link to="">sell all</Link> 
                </div>
            </section>

        </>
    )
}
export default SectionTwo;