import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productImageSliderSettings, productImages } from '../../../utils/mock-data';

const ImageSlider = () => {
  return (
    <Slider {...productImageSliderSettings}>
      {productImages.map((image, index) => (
        <img src={image.src} alt={image.alt}  key={index} />
      ))}
    </Slider>
  );
};

export default ImageSlider;
