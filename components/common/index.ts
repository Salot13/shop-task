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
      background-color: black !important;
    }
  }
`;

export const tabsDescription = css`
  color: #000;

  font-family: Roboto !important;

  font-size: 14px;

  font-style: normal;

  font-weight: 400;

  line-height: 19.6px;
`;

export const cartSection = css`
  .cart-section {
    .product-name {
      color: #000;

      font-family: Roboto;

      font-size: 48px;

      width: 288px;

      font-style: normal;

      font-weight: 400;

      line-height: 96%;

      letter-spacing: -1.92px;

      text-transform: uppercase;
    }

    .product-description {
      color: #000000;

      font-family: Roboto;

      font-size: 14px;

      font-style: normal;

      font-weight: 400;

      margin-top: 4px;

      line-height: 17px;
    }

    .product-color {
      padding-top: 24px;

      color: var(--Bazaar-Black, #000);

      font-family: Roboto;

      font-size: 16px;

      display: flex;

      gap: 8px;

      font-style: normal;

      font-weight: 700;

      line-height: 120%; /* 16.8px */

      text-transform: uppercase;
    }

    .product-image {
      display: flex;

      padding-top: 8px;
    }

    .product-price {
      color: #000;

      font-family: Roboto;

      font-size: 14px;

      font-style: normal;

      font-weight: 700;

      line-height: 16.8px;

      padding-top: 8px;

      text-transform: uppercase;
    }

    .product-size {
      display: flex;

      margin-top: 24px;

      justify-content: space-between;

      color: var(--Bazaar-Black, #000);

      font-family: Helvetica Now Text;

      font-size: 14px;

      font-style: normal;

      font-weight: 700;

      line-height: 120%;

      text-transform: uppercase;
    }

    .sizeGuide {
      color: #000;

      font-family: Helvetica Now Text;

      font-size: 14px;

      font-style: normal;

      font-weight: 400;

      text-decoration-line: underline;
    }

    .sizeType {
      color: var(--Bazaar-Black, #000);

      font-family: Helvetica Now Text;

      font-size: 14px;

      font-style: normal;

      font-weight: 400;

      line-height: 120%;
    }

    .commonStyle {
      display: flex;

      gap: 8px;
    }

    .chipStyle {
      border-radius: 100px;

      border: 1px solid var(--Light-Grey, #e5e5e5);

      background: var(--White, #fff);

      width: 78px;

      padding-left: 4px;

      height: 30px;
    }
  }
`;

export const footerSection = css`
  width: 100%;
  text-align: center;
  justify-content: center;
  margin-top: 79.8px;
  .product {
    color: #000;
    text-align: center;
    font-family: Helvetica Now Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 16.8px */
    text-transform: uppercase;
  }
  .products-name {
    margin-top: 12px;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    text-decoration-line: underline;
    text-transform: uppercase;
    margin-right: 24px;
  }
  .author-note {
    margin-top: 120px;
    .note {
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 16.8px */
      text-transform: uppercase;
    }
    .note-description {
      text-align: center;
      font-family: Roboto;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 44.8px */
      margin: 16px 0;
      padding: 0px 200px;
    }
    .author {
      color: #000;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 16.8px */
      text-transform: capitalize;
      text-align: center;
      font-family: Helvetica Now Text;
    }
  }
`;
