import React from 'react';

import { cartSection } from '.';

import { Button, Chip, Typography } from '@mui/material';

const CartSection = () => {
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
            <img src="" alt="first " />

            <img src="" alt="second" />
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
            <div style={{ marginRight: 12, display: 'flex' }}>
              <Chip label={data} className="chipStyle" />
            </div>
          ))}
        </div>

        <Button>Add to bag</Button>

        <div>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</div>

        <div>Speak to a Personal Stylist CHAT NOW</div>
      </div>
    </div>
  );
};

export default CartSection;
