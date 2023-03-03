
import {Box} from '@mui/material'
import HeaderComponent from '../../components/header/HeaderComponent';
import SearchListingInputComponent from '../../components/search-listing-input/SearchListingInputComponent';
import './DashboardPage.css'

import { useState, useEffect } from "react";
import SpinnerLoader from '../../components/spinner-loader/SpinnerLoaderComponent';

const DashboardPage = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0d61b6");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return(
     <Box sx={{ display: 'flex' }}>
      <HeaderComponent/>
      {loading && <SpinnerLoader color={color} size={55} loading={loading}/>}
      {!loading && <SearchListingInputComponent/>}
     </Box>
    );
  };
  
export default DashboardPage;