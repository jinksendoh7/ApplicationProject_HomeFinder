
import {Box, Grid, Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import TabsComponent from '../../components/tabs/TabsComponents';
import './ListingPage.css'
import Alert from '@mui/material/Alert'


const AddListingPage = () => {
  
  return(
      <div className="form-wrapper"> 
           <h1>Add Listing</h1>
           <Alert severity="info">Fill up the form completely and make sure that all information is accurate.</Alert>
           <div className="form-container">
              <TabsComponent/>
          </div>
      </div>

    );
  };
  
export default AddListingPage;