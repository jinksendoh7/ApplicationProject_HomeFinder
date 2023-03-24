
import {Box, Grid, Paper} from '@mui/material'
import {useState} from 'react';
import TabsComponent from '../../components/tabs/TabsComponents';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SavedListingPage = () => {
  const propAddress = '123 A Place Street, London ON, N5Y 5R6';
  const propAddress1 = '889 Somewhere Boulevard, London ON, N5Y 5R6';
  const [propAddr, setPropAddr] = useState(propAddress);
  return(
      <div className="form-wrapper"> 
          
           <div className="form-header">
           <h1>SAVED Listing</h1>
            </div>
      </div>

    );
  };
  
export default SavedListingPage;