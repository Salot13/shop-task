import React, { useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { hideOnMobile, hideDesktop } from '../components/common/commonStyle';
import CartSection from '../components/common/cart-section';
import DynamicTabs from '../components/common/dynamic-tabs';
import ImageSlider from '../components/common/image-slider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { tabsData, productImages } from '../utils/mock-data';

const HomePage = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  return (
    <Grid container px={{ md: '18px', xs: '18px', lg: '71px' }} mt={{ lg: 10 }}>
      <Grid item lg={4} sm={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <div style={{ position: 'sticky', top: '100px', zIndex: 1 }}>
          <DynamicTabs tabs={tabsData} />
        </div>
      </Grid>
      <Grid item lg={4} sm={12} width="200px" className={hideOnMobile}>
        <div
          style={{
            display: 'flex',
            position: 'sticky',
            width: '100%',
            justifyContent: 'end',
            top: '100px',
            zIndex: 1,
          }}
        >
          <IconButton
            onClick={() => {
              setIsFavourite(!isFavourite);
            }}
          >
            {!isFavourite ? (
              <FavoriteBorderIcon sx={{ color: '#000000' }} />
            ) : (
              <FavoriteIcon sx={{ color: 'red' }} />
            )}
          </IconButton>
        </div>
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
      <Grid item lg={4} xs={12} sx={{ minHeight: 540 }} className={hideDesktop}>
        <Box
          display={{ xs: 'block', sm: 'block', md: 'none' }}
          sx={{ minWidth: '475px', minHeight: 640 }}
        >
          <ImageSlider />
        </Box>
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
  );
};

export default HomePage;
