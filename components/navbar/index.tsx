import React, { useState } from 'react';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

import { categroiesName, companyName } from '.';

// import SearchIcon from '../../icons/Search.svg';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  'THE EDIT',

  'NEW ARRIVALS',
  'DESIGNERS',
  'CLOTHING',
  'SHOES',
  'BAGS',
  'ACCESSORIES',
  'JEWERY',
  'BEAUTY',
  'HOME',
];

const NavBar = (props: Props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MY COMPANY.COM
      </Typography>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar component="nav" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
        <Toolbar
          sx={{
            color: '#000000',

            backgroundColor: '#FFFFFF',

            display: 'flex',

            mx: { lg: '71px', sm: '18px' },

            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              className={companyName}
              sx={{ flexGrow: 1, display: { sm: 'flex' } }}
            >
              MY COMPANY.NAME
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} className={categroiesName} sx={{ color: '#000000' }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex' }}>
            <SearchIcon />

            <ShoppingCartOutlinedIcon />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Person4OutlinedIcon />
            </Box>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },

            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
