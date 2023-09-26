import { Typography, Box, Tab } from '@mui/material';

export const productName = ['Jonathan Simkhai', 'Blazers', 'Viscose'];
export const tabsData = [
  {
    label: 'Details',
    content: (
      <>
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',

            lineHeight: '19.6px ',
          }}
        >
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night
          and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines
          like a star in the sky. it has a straight fit with well defined shoulders and a shawl
          collar culminating in a button and has been flawlessly finished with three jet pockets
          with a sartorial feel.
        </Typography>

        <Box
          sx={{
            mt: 2,

            display: 'flex',

            gap: 2,

            color: '#000',

            fontFamily: 'Roboto',

            fontSize: '14px',

            fontStyle: 'normal',

            fontWeight: 400,

            lineHeight: '19.6px ',
          }}
        >
          <Typography>
            See the{' '}
            <a href="#" target="_blank" style={{ textDecoration: 'underline' }}>
              EDITOR’S NOTE
            </a>
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography>
            Learn about The{' '}
            <a href="#" target="_blank" style={{ textDecoration: 'underline' }}>
              DESIGNER
            </a>
          </Typography>
        </Box>
      </>
    ),
  },

  { label: 'Delivery', content: <Typography>Content of Tab 2</Typography> },

  { label: 'Fit', content: <Typography>Content of Tab 3</Typography> },

  { label: 'Share', content: <Typography>Content of Tab 3</Typography> },
];
export const images = [
  { src: '../image1.png', alt: 'product-image1', width: '462px' },
  { src: '../image 2.png', alt: 'product-image2', width: '462px' },
  { src: '../image 3.png', alt: 'product-image3', width: '562px' },
];
