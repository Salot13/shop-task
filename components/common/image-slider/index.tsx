import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '../../../utils/mock-data';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} width={image.width} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
