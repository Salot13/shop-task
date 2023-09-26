import React from 'react';
import { cartSection } from '.';
import { Button, Chip } from '@mui/material';

const CartSection = () => {
  return (
    <div className={cartSection}>
      <div className="cart-section">
        <div className="product-name">JONATHAN SIMKHAI</div>
        <div className="product-description">Lurex Linen Viscose Jacket in Conchiglia</div>
        <div className="product-price">$225</div>
        <div className="product-size">
          <div>Size</div>
          <div>Size Guide</div>
        </div>
        {['XS', 'S', 'M', 'L', 'XXL'].map((data) => (
          <Chip label="data" />
        ))}
        <Button>Add to bag</Button>
        <div>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</div>
        <div>Speak to a Personal Stylist CHAT NOW</div>
      </div>
    </div>
  );
};

export default CartSection;
