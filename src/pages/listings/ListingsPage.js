import {Box, Grid, Paper, Container} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import {Outlet} from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import SpinnerLoader from '../../components/spinner-loader/SpinnerLoaderComponent';
import { useState, useEffect } from "react";
import {FireStoreConst} from '../../constants/FirebaseConstants'
import StorageService from '../../services/storage/StorageService'
import { UserAuth } from '../../contexts/auth/AuthContext';
import FilterSidebarComponent from '../../components/filter-sidebar/FilterSidebarComponent';
import './ListingsPage.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  boxShadow:'none',

  color: theme.palette.text.secondary,
}));

function ListingsPage() {
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

    return (
        <Box sx={{ display: 'flex' }}>
        <HeaderComponent 
        userType={userType}/>
        {loading && <SpinnerLoader color={color} size={55} loading={loading}/>}
        {!loading &&          
         <Container fixed  sx={{marginTop: 25, lg:{maxWidth:1366}}}>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
                <Box gridColumn="span 3">
                  <Item><FilterSidebarComponent/></Item>
                </Box>
                <Box gridColumn="span 9">
                  <Item>xs=8</Item>
                </Box>
              </Box>

          </Container>
      }

        </Box>
    );
}

export default ListingsPage;