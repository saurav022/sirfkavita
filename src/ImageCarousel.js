import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from "./Assets/images/image1.jpg";
import image2 from "./Assets/images/images2.jpg";


const images = [image1,image2];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
     <div className="carousel-header">
        <h2>Featured Moments</h2>
        <p style={{color:"white"}}>Explore our latest images and highlights</p>
      </div>
      <div className="crouselmaindiv">
    <Slider {...settings} className="carousel">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
     <Slider {...settings} className="carousel">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default ImageCarousel;
