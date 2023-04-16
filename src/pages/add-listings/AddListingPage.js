
import {Box, Grid, Paper} from '@mui/material'
import {useState, useEffect} from 'react';
import TabsComponent from '../../components/tabs/TabsComponents';
import './AddListingPage.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StorageService from '../../services/storage/StorageService';
import { FireStoreConst } from '../../constants/FirebaseConstants';

import { UserAuth } from '../../contexts/auth/AuthContext';

const AddListingPage = () => {
  const propAddress = '123 A Place Street, London ON, N5Y 5R6';
  const propAddress1 = '889 Somewhere Boulevard, London ON, N5Y 5R6';
  const propAddress2 = '1228 Cheaphere, London ON, N5U 9I6';
  const propAddress3 = '318 Expensive Ville Rd, London ON, N3U 1B1';
  const propAddress4 = '634 Baumgardner St, London ON, N8T 3L6';
  const propAddress5 = '999 York Rd, London ON, N6U 0L3';
  const [propAddr, setPropAddr] = useState(propAddress);
  const { user,setUser } = UserAuth();
  const [properties, setProperties] = useState([]);
  const getProperties = async()=>{
    const result_data =  await StorageService.getDocsById(
        FireStoreConst.PROPERTY_DOC,
        user.email)
    return result_data;
  }
  const getUserInfo = async(user) => {
   
    const userInfo =  await StorageService.getDocWhere(
      FireStoreConst.USER_DOC, 
      FireStoreConst.USER_DOC_KEY,
      user.uid
  )
  setUser(userInfo);
}
useEffect(() => {
  user.uid !== undefined && getUserInfo(user);
(async()=>{
  const data = await getProperties();
  setProperties(data);
  setPropAddr(data[0].address1.concat('',data[0].address2,' ', data[0].city,' ', data[0].province,' ', data[0].postalCode))
  
})()
}, [user]);
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
                {Array.from(properties).map((data, index) => (
                <MenuItem selected={propAddr === data.address1.concat('',data.address2,' ', data.city,' ', data.province,' ', data.postalCode)} value={data.address1.concat('',data.address2,' ', data.city,' ', data.province,' ', data.postalCode)}>
                  {data.address1.concat('',data.address2,' ', data.city,' ', data.province,' ', data.postalCode)}
                  </MenuItem>
             
                ))}
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