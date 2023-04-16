import {useState} from 'react';
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
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
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
import {FireStoreConst} from '../../constants/FirebaseConstants'
import './HeaderComponent.css'
import DropdownMenuComponent from '../dropdown-menu/DropdownMenuComponent';
import {Link} from 'react-router-dom';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const { LogoutWithFirebaseAuth} = UserAuth();

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
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

     const handleAddListing = async() =>{
        navigate(RoutesConst.LISTING_ROUTE+'/'+RoutesConst.ADD_LISTING_ROUTE)
      
     }
     const handleSavedListing = async() =>{
      navigate(RoutesConst.LISTING_ROUTE+'/'+RoutesConst.SAVED_LISTING_ROUTE)
    
   }
   const handleAddProperty = async() =>{
    navigate(RoutesConst.PROPERTY_ROUTE+'/'+RoutesConst.ADD_PROPERTY_ROUTE)
 }

  const container = window !== undefined ? () => window().document.body : undefined;
  const menus = [
    {name: 'Add Listing', handler: handleAddListing},
    {name: 'Add Property', handler: handleAddProperty},
    {name: 'Saved Listings', handler: handleSavedListing},
    {name: 'Logout', handler: handleLogout}]
    const menusForMember = [
      {name: 'Saved Listings', handler: handleSavedListing},
      {name: 'Logout', handler: handleLogout}]
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
            <Link to="/listing" color="inherit">
                <Logo
                    url={HomeFinderLogo}
                    mainLogo="headerLogo"
                  ></Logo>
              </Link>
            </div>
          <div className="wrapper-header-items">
          {props.userType === FireStoreConst.USER_DOC_MEMBER_USER && 
          <>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <DropdownMenuComponent  menuItems={props.userType === FireStoreConst.USER_DOC_HOMEOWNER_USER ? menus: menusForMember}/>
       
             </>
            }
              {props.userType === FireStoreConst.USER_DOC_HOMEOWNER_USER && 
              <>
          <Box sx={{ display: { xs: 'none',sm:'none', md: 'inline-flex'}, flexDirection:{md:'row'}, gap:1, alignItems:'center',  }}>
               <Badge badgeContent={8} color="error">
                <MailIcon color="action" />
              </Badge>
          </Box>
          <DropdownMenuComponent  menuItems={props.userType ===FireStoreConst.USER_DOC_HOMEOWNER_USER ? menus: menusForMember}/>
        
           </>
          }
         
            </div>
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