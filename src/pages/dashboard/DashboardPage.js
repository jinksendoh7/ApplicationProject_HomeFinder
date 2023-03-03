
import {Box} from '@mui/material'

import HeaderComponent from '../../components/header/HeaderComponent';
import SearchListingInputComponent from '../../components/search-listing-input/SearchListingInputComponent';
import './DashboardPage.css'


const DashboardPage = () => {
    return(
     <Box sx={{ display: 'flex' }}>
      <HeaderComponent/>
      <SearchListingInputComponent/>
     </Box>
    );
  };
  
export default DashboardPage;