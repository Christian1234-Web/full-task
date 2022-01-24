import React from "react";
import Navbar from "../components/Navbar";
import FirstSlider from "../components/FirstSlider";
import SectionTwo from "../components/SectionTwo";
import SecondSlider from "../components/SecondSlider";
import Footer from "../components/Footer";
import ImageOne from '../assets/images/first-slider-1.jpg';
import ImageTwo from '../assets/images/first-slider-2.jpg';

const Index = () => {
  return (
    <div style={{ backgroundColor: "#eaeded",width:"100%" }}>
      <Navbar />
      <FirstSlider />
      <SectionTwo />
      
      <SecondSlider
        header='Birthday Cake'
        ImageOne={ImageOne}
        ImageTwo={ImageTwo}
      />
    
      <SecondSlider
       header='Wedding Cake'
       ImageOne={ImageOne}
       ImageTwo={ImageTwo}/>
      <SecondSlider
       header='Normal Cake'
       ImageOne={ImageOne}
       ImageTwo={ImageTwo}
      />
<Footer/>

    </div>
  );
}
export default Index;
