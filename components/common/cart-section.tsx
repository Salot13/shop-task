import React, { useEffect, useState } from 'react';
import { cartSection } from '.';
import { Button, Chip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sizeSelection, colorselection } from '../../contexts/actions/counterActions';

const CartSection = () => {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const size = useSelector((state: any) => state.size);
  const color = useSelector((state: any) => state.size);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedSize(size);
    setSelectedImage(color);
  }, [size, color]);

  const handleChipClick = (chip: string) => {
    setSelectedSize(chip);
    dispatch(sizeSelection(chip));
  };

  const handleSelectImage = (image: number) => {
    setSelectedImage(image);
    dispatch(colorselection(image));
  };

  return (
    <div className={cartSection}>
      <div className="cart-section">
        <div className="product-name">JONATHAN SIMKHAI</div>

        <div className="product-description">Lurex Linen Viscose Jacket in Conchiglia</div>

        <div className="product-price">$225</div>

        <div className="">
          <div className="product-color">
            Color <Typography>Conchiglia</Typography>{' '}
          </div>

          <div className="product-image">
            {['../image1.png', '../image 5.png'].map((data, index) => {
              return (
                <img
                  src={data}
                  alt="first "
                  onClick={() => handleSelectImage(index)}
                  className={selectedImage === index ? 'selected-image' : ''}
                />
              );
            })}
          </div>
        </div>

        <div className="product-size">
          <div className="commonStyle">
            Size <div className="sizeType">l</div>
          </div>

          <div className="sizeGuide">Size Guide</div>
        </div>

        <div style={{ display: 'flex' }}>
          {['XS', 'S', 'M', 'L', 'XXL'].map((data) => (
            <div
              style={{
                marginRight: 12,
                display: 'flex',
                marginBottom: '14px',
                marginTop: '11px',
                flexWrap: 'wrap',
              }}
            >
              {data !== 'M' && (
                <Chip
                  label={data}
                  onClick={() => handleChipClick(data)}
                  className={selectedSize === data ? 'selectedSize' : 'chipStyle'}
                />
              )}
              {data === 'M' && <Chip label={data} className="sizeDisabled" />}
            </div>
          ))}
        </div>

        <Button fullWidth className="addToBagStyle">
          Add to bag
        </Button>

        <div className="learnMore">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </div>

        <div className="learnMore">Speak to a Personal Stylist CHAT NOW</div>
      </div>
    </div>
  );
};

export default CartSection;
