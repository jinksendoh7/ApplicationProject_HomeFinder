import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../logo/Logo';
import HomeFinderLogo from '../../assets/images/HomeFinder_Logo.svg';
import { UserAuth } from '../../contexts/auth/AuthContext';
import { RoutesConst } from '../../constants/AppConstants';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import TopBarComponent from '../topbar/TopBarComponent';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

import './HeaderComponent.css'
const drawerWidth = 240;
const navItems = ['Rental Listing', 'Book a Virtual Tour', 'Tenants', 'Owners', 'About', 'Contact'];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function HeaderComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { LogoutWithFirebaseAuth, user } = UserAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    console.log(user)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
         <Logo
          url={HomeFinderLogo}
          mainLogo="drawerLogo"
        ></Logo>
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

  const handleLogout = async() =>{
      try {
        await LogoutWithFirebaseAuth();
        navigate(RoutesConst.SignIn)
      } catch (error) {
        console.log(error);
      
      }
     }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
     <>
      <AppBar component="nav">
          <TopBarComponent/>
      </AppBar>
      <CssBaseline />
    
      <HideOnScroll {...props}>
      <AppBar component="nav">
      <TopBarComponent/>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
     
            <div className="wrapperHeaderLogo">
                <Logo
                    url={HomeFinderLogo}
                    mainLogo="headerLogo"
                  ></Logo>
            </div>
        
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
        
          </Box>
          <Button variant="contained" color="success" 
            onClick={handleLogout} sx={{ ml: 5 }} >
                Logout
            </Button>
        </Toolbar>
        
      </AppBar>
      
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}