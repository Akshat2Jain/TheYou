import React from "react";
// import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/banner.jpeg"
import img2 from "../assets/banner2.jpeg"

const Slider = () => {
  return <>
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  </>;
};

export default Slider;
