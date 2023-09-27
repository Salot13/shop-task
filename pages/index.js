/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Grid } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from '../components/common/image-slider';
import { footerSection, hideDesktop, hideOnMobile } from '../components/common';
import { productName, tabsData, productImages } from '../utils/mock-data';
import DynamicTabs from '../components/common/dynamic-tabs';
import CartSection from '../components/common/cart-section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop Page Task</title>
        <meta name="description" content="Test for shop pgae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container px={{ md: '18px', xs: '18px', lg: '71px' }} mt={{ lg: 10 }}>
        <Grid
          item
          lg={4}
          sm={12}
          sx={{ display: { xs: 'none', sm: 'none',md:'none',lg:'flex' } }}
        >
          <div style={{ position: 'sticky', top: '100px', zIndex: 1 }}>
            <DynamicTabs tabs={tabsData} />
          </div>
        </Grid>
        <Grid item lg={4} sm={12} width="200px" className={hideOnMobile}>
          {productImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              style={{ padding: '0 20px' }}
              alt={image.alt}
              width={image.width}
            />
          ))}
        </Grid>
        <Grid item lg={4} xs={12} sx={{ width: '100%', minHeight: 540 }} className={hideDesktop}>
          <ImageSlider />
        </Grid>
        <Grid item lg={4} sm={12}>
          <div style={{ position: 'sticky', top: '100px', zIndex: 1 }}>
            <CartSection />
          </div>
        </Grid>
        <Grid item lg={4} sm={12} className={hideDesktop}>
          <div style={{ position: 'sticky', top: '100px', marginTop: '64px', zIndex: 1 }}>
            <DynamicTabs tabs={tabsData} />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12} sm={12} width={500}>
          <div className={footerSection}>
            <div className="product">ViEW MOR PRODUCT LIKE THIS</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {productName?.map((data, index) => (
                <div className="products-name" key={`${index}`}>
                  {data}
                </div>
              ))}
            </div>
            <div className="author-note">
              <div className="note">A note from Author</div>
              <div className="note-description">
                The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by
                night and by day: a blazer in a linen blend shot with lurex for a shimmering surface
                that shines like a star in the sky.
              </div>
              <div className="author">--By MINNA SHIM, Fashion Editor</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
