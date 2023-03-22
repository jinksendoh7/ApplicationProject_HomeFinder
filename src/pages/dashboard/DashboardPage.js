
import {Box, Grid, Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import {Outlet} from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import SearchListingInputComponent from '../../components/search-listing-input/SearchListingInputComponent';
import './DashboardPage.css'

import { useState, useEffect } from "react";
import SpinnerLoader from '../../components/spinner-loader/SpinnerLoaderComponent';
import {FireStoreConst} from '../../constants/FirebaseConstants'
import StorageService from '../../services/storage/StorageService'
import { UserAuth } from '../../contexts/auth/AuthContext';
import SidebarComponent from '../../components/sidebar/SidebarComponent';



const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
  borderRadius: 'none',
  minHeight: '80vh',
  border: '1px solid #e3e3e3'
}));


const DashboardPage = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0d61b6");
  const [userType, setUserType] = useState('');
  const { user,setUser } = UserAuth();

  const getUserType = async(user) => {
    const userInfo =  await StorageService.getDocWhere(
      FireStoreConst.USER_DOC, 
      FireStoreConst.USER_DOC_KEY,
      user.uid
  )
  setUserType(userInfo.usertype);
  setUser(userInfo);
 
  };
  useEffect(() => {
    
    user.uid !== undefined && getUserType(user);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [user]);
  
  return(
     <Box sx={{ display: 'flex' }}>
      <HeaderComponent 
      userType={userType}/>
      {loading && <SpinnerLoader color={color} size={55} loading={loading}/>}
      {!loading && userType === FireStoreConst.USER_DOC_MEMBER_USER && <SearchListingInputComponent/>}
      {!loading && userType === FireStoreConst.USER_DOC_HOMEOWNER_USER 
      && 
      <div className="container-wrapper">
      <Box sx={{ flexGrow: 1, marginTop:21}}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={3} sx={{display:{sm:'none', md:'block'}}} >
            <Item > <SidebarComponent user={user}/></Item>
          </Grid>
          <Grid item  xs={12} sm={12} md={9}>
            <Item>
                <Outlet/>
            </Item>
          </Grid>
        </Grid>
        </Box>
        </div>
      }
     </Box>

    );
  };
  
export default DashboardPage;