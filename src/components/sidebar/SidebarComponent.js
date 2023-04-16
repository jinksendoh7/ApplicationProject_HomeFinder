
import './SidebarComponent.css'  
import {Avatar, Typography, ListItem, Box, ListItemButton, ListItemText, List, Divider} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useLocation, useNavigate} from 'react-router-dom';
import { RoutesConst } from '../../constants/AppConstants';
const SidebarComponent = ({user}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (linkTo) =>{
    navigate(linkTo)

  }
    return(
        <>    
        <div className="sidebar-container">
               <Avatar sx={{ bgcolor: ' #ff9832;'}}>A</Avatar>
              <div className='display-name'>
                {user.displayName}
                <span className="inline-block">
                       <CheckCircleOutlineIcon color={'success'}/>
                </span>
                
              </div>

        </div>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                 <nav aria-label="main mailbox folders">
                   <List>
                     <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemText primary="Home" />
                       </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                       <ListItemButton 
                       selected={location.pathname.split("/")[1]==='listing'}
                       onClick={()=> handleNavigate(RoutesConst.LISTING_ROUTE)}>
                         <ListItemText primary="Listings" />
                       </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemText primary="Payments" />
                       </ListItemButton>
                     </ListItem>
                   </List>
                 </nav>
                 <Divider />
                 <nav aria-label="secondary mailbox folders">
                   <List>
                   <ListItem disablePadding>
                       <ListItemButton    
                       selected={location.pathname.split("/")[1]==='property'}
                       onClick={()=> handleNavigate(RoutesConst.PROPERTY_ROUTE)}>
                         <ListItemText primary="Properties" />
                       </ListItemButton>
                      </ListItem>
                     <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemText primary="Maintenance" />
                       </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemText primary="Insurance" />
                       </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemText primary="Shared Documents" />
                       </ListItemButton>
                     </ListItem>
                  
                   </List>
              
                 </nav>
                 <Divider/><nav aria-label="secondary mailbox folders">
                   <List>
                   <ListItem disablePadding>
                       <ListItemButton>
                         <ListItemText primary="Account Details" />
                       </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                       <ListItemButton component="a" href="#simple-list">
                         <ListItemText primary="Contact Support" />
                       </ListItemButton>
                     </ListItem>
                   </List>
                   <Divider />
                 </nav>
               </Box>
               </>

    );
  };
  
export default SidebarComponent;