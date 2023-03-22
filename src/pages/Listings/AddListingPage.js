
import {Box, Grid, Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import TabsComponent from '../../components/tabs/TabsComponents';
import './ListingPage.css'




const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:'none',
  borderRadius: 'none',
  minHeight: '80vh',
  border: '1px solid #e3e3e3'
}));


const AddListingPage = () => {
  
  return(
      <div className="form-wrapper"> 
           <h1>Add Listing</h1><div>1</div>
           <div className="form-container">
              <TabsComponent/>
          </div>
      </div>

    );
  };
  
export default AddListingPage;