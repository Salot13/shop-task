import { css } from '@emotion/css';

export const tabPanel = css`
  .tab-container {
    background-color: transparent;
    color: black;
    box-shadow: none;
    .Mui-selected {
      color: black !important;
      font-weight: 700;
      font-size: 14px;
    }
    .MuiTab-root {
      font-size: 14px !important;
      -webkit-align-items: start;
    }
    .MuiTabs-indicator {
      background-color: transparent !important;
    }
  }
`;

export const cartSection = css`
  .cart-section {
    .product-name {
      color: #000;
      font-family: Roboto;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 96%;
      letter-spacing: -1.92px;
      text-transform: uppercase;
    }
    .product-description {
      color: #000;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    }
    .product-color {
      color: #000;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    }
    .product-price {
      color: #000;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 16.8px */
      text-transform: uppercase;
    }
    .product-size {
      display: flex;
      justify-content: space-between;
      
    }
  }
`;
