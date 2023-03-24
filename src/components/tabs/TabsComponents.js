import {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import ListingDetailsForm from '../form/listings/ListingDetailsForm'
import AmenitiesForm  from '../form/listings/AmenitiesForm';
import MediaForm from '../form/listings/MediaForm';
import RentFeesForm from '../form/listings/RentFeesForm'
import SuccessComponent from '../success/SuccessComponent';
import { SuccessMessageConst } from '../../constants/AppConstants';

import Alert from '@mui/material/Alert'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabsComponent(props) {
  const [value, setValue] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextTab = (event, newValue) => {
    setValue(newValue);
  };


  
  return (
    <>
    {!isSuccess ?
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        
    <Box sx={{ width: '100%' }}>

      <Tabs value={value} onChange={handleNextTab} variant="fullWidth">
        <Tab icon={<PinDropOutlinedIcon/>} disabled={value!==0} iconPosition="start" label="Listing Details" {...a11yProps(0)} />
        <Tab icon={<FactCheckOutlinedIcon/>} disabled={value!==1} iconPosition="start" label="Features & Amenities" {...a11yProps(1)} />
        <Tab icon={<AddAPhotoOutlinedIcon/>} disabled={value!==2} iconPosition="start" label="Media and Gallery" {...a11yProps(2)} />
        <Tab icon={<HandymanOutlinedIcon/>}  disabled={value!==3} iconPosition="start" label="Rent and Other Fees" {...a11yProps(3)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <ListingDetailsForm handleNextTab={(e)=>handleNextTab(e, 1)} propertyAddress={props.propertyAddress} />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <AmenitiesForm handleNextTab={(e)=>handleNextTab(e, 2)} handlePrevTab={(e)=>handleNextTab(e, 0)}/>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <MediaForm handleNextTab={(e)=>handleNextTab(e, 3)} handlePrevTab={(e)=>handleNextTab(e, 1)}/>
    </TabPanel>
    <TabPanel   value={value} index={3}>
     <RentFeesForm handlePrevTab={(e)=>handleNextTab(e, 2)} successSubmit={()=> setIsSuccess(true)}/>
    </TabPanel>
   
  </Box>
  :
  <SuccessComponent message={SuccessMessageConst.SUCCESS_SUBMIT_LISTING}></SuccessComponent>
    }
    </>
 
  );
}