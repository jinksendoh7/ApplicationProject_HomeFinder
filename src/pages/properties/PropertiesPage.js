import {Box, Grid, Paper, Container} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import {Outlet} from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import SpinnerLoader from '../../components/spinner-loader/SpinnerLoaderComponent';
import { useState, useEffect } from "react";
import {FireStoreConst} from '../../constants/FirebaseConstants'
import StorageService from '../../services/storage/StorageService'
import { UserAuth } from '../../contexts/auth/AuthContext';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import { useLocation } from 'react-router-dom';
import { LocalStorageKeysConst, RoutesConst } from '../../constants/AppConstants';
import LocalStorage from '../../services/storage/LocalStorage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  boxShadow:'none',

  color: theme.palette.text.secondary,
}));


function PropertiesPage() {

    let [results, setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [savedListing,setSavedListing] = useState([]);
    const [filterValues, setFilterValues] = useState({keyword: '', listingType: 'All', price: 1000});
    let location = useLocation();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0d61b6");
    const [userType, setUserType] = useState(FireStoreConst.USER_DOC_HOMEOWNER_USER  );
    const { user,setUser } = UserAuth();
    const getUserType = async(user) => {
        const userInfo =  await StorageService.getDocWhere(
          FireStoreConst.USER_DOC, 
          FireStoreConst.USER_DOC_KEY,
          user.email
      )
      setUserType(userInfo.usertype);
      setUser(userInfo);
     
      };
      const getResults = async()=>{
        const result_data = await StorageService.getDocs(FireStoreConst.LISTING_DOC);
        return result_data;
      }

      const handleSavedListing = () =>{
        setSavedListing(LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING));
      }
     
      useEffect(() => {
        
        user.uid !== undefined && getUserType(user);
        const timer = setTimeout(() => {
          setLoading(false);
        //  getResults().then(d => setResults(d));
     
        }, 1500);
        return () => clearTimeout(timer);
      }, [user,location]);
    return (
        <Box sx={{ display: 'flex' }}>
        <HeaderComponent 
        userType={userType}/>
        {loading && <SpinnerLoader color={color} size={55} loading={loading}/>}
           {!loading 
              && 
              <Container fixed  sx={{marginTop: 1, lg:{maxWidth:1366}}}>
              <Box sx={{ flexGrow: 1, marginTop:21}}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={3} sx={{display:{sm:'none', md:'block'}}} >
                    <Item ><SidebarComponent user={user}/></Item>
                  </Grid>
                  <Grid item  xs={12} sm={12} md={9}>
                    <Item>
                        <Outlet/>
                    </Item>
                  </Grid>
                </Grid>
                </Box>
                </Container>
              }
        </Box>
    );
}

export default PropertiesPage;