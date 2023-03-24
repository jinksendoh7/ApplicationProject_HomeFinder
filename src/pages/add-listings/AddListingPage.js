
import {Box, Grid, Paper} from '@mui/material'
import {useState} from 'react';
import TabsComponent from '../../components/tabs/TabsComponents';
import './ListingPage.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddListingPage = () => {
  const propAddress = '123 A Place Street, London ON, N5Y 5R6';
  const propAddress1 = '889 Somewhere Boulevard, London ON, N5Y 5R6';
  const [propAddr, setPropAddr] = useState(propAddress);
  return(
      <div className="form-wrapper"> 
          
           <div className="form-header">
           <h1>Add Listing</h1>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Select Property</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={propAddr}
                label="Select Property"
                onChange ={(e)=> setPropAddr(e.target.value)}
              >
                <MenuItem value={propAddress}>{propAddress}</MenuItem>
                <MenuItem value={propAddress1}>{propAddress1}</MenuItem>
              </Select>
            </FormControl>
           </div>
            <div>
              <TabsComponent propertyAddress={propAddr}/>
          </div>
      </div>

    );
  };
  
export default AddListingPage;