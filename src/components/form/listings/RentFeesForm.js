import * as React from 'react';
import './ListingDetailsForm.css'
import Button from '@mui/material/Button';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { LocalStorageKeysConst } from '../../../constants/AppConstants';
import { FireStoreConst } from '../../../constants/FirebaseConstants';
import StorageService from '../../../services/storage/StorageService'
import LocalStorage from '../../../services/storage/LocalStorage'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import Alert from '@mui/material/Alert'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import Box from '@mui/material/Box'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';


class RentFeesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isRoomOnly: true,
        rentPerMonth: 500,
          wifi: 0.0,
          laundry: 0.0,
          aircon: 0.0,
          heater: 0.0,
          parking: 0.0,
          totalFee: 0.0
     };
  }
  saveInLocalStorage = ()=>{
    LocalStorage.setStorageItem(LocalStorageKeysConst.RENT_OTHER_FEES, this.state);
}

  handleSubmit = async() =>{
  
    try {
      const docRef = await StorageService.createDoc(FireStoreConst.LISTING_DOC,{
        listing: LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS),
        amenities:  LocalStorage.getStorageItem(LocalStorageKeysConst.AMENITIES_FEATURES),
        fees:  LocalStorage.getStorageItem(LocalStorageKeysConst.RENT_OTHER_FEES)
      });
    console.log('success', docRef.id);

     
  } catch (e) {
      console.error('Error adding user: ', e);
       } 
  }
  
   sum = () => {
      const total = 
                    parseFloat(this.state.wifi) + 
                    parseFloat(this.state.aircon) + 
                    parseFloat(this.state.heater)+
                    parseFloat(this.state.parking) +
                    parseFloat(this.state.laundry) +
                    parseFloat(this.state.rentPerMonth);

      return this.setState({totalFee: parseFloat(total)});
   
  }
  render(){
  
    
    const formatter = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    });
    const amenities = LocalStorage.getStorageItem(LocalStorageKeysConst.AMENITIES_FEATURES);
    return <div className="listing-form">
              <div className="form-row">
          <TextField
          id="outlined-number"
          label="Rent per Month (CAD $)"
          type="number"
          onChange={
              (e) => {
                    this.setState({rentPerMonth: e.target.value});
                    }
          }
          helperText={this.state.rentPerMonth === 0 ? "Please double check on the rate per month.": ""}
          value={this.state.rentPerMonth}
         
        />
            <ToggleButtonGroup
              color="primary"
              value={this.state.isRoomOnly}
              exclusive
              onChange={() => this.setState({isRoomOnly: !this.state.isRoomOnly})}
              aria-label="Platform"
            >
            <ToggleButton value={true}>Room Only</ToggleButton>
            <ToggleButton value={false}>Whole House</ToggleButton>
            </ToggleButtonGroup>
            <Button variant="contained"  onClick={() => this.sum()} color="warning" sx={{mt:2}}>
              Compute Fees
            </Button>
          </div>
          {
       amenities &&
            <div className="form-row">
            <Box sx={{border:1, borderColor: '#e3e3e3', borderRadius: 1, padding: .5, width: '100%'}}>
          <h3>Additional Fees Per Month</h3>
          <List
              sx={{ width: '100%',  bgcolor: 'background.paper' }}
            >
              {
                amenities.wifi &&
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                <TextField
                    id="outlined-number"
                    type="number"
                    onChange={
                      (e) => {
                            this.setState({wifi: e.target.value});
                            }
                  }
                    value={this.state.wifi}
                    min={0}
                  />
              </ListItem>
              }
              {
                amenities.laundry &&
              <ListItem>
                <ListItemIcon>
                  <LocalLaundryServiceOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Laundry" />
                <TextField
                    id="outlined-number"
                    type="number"
                    onChange={
                      (e) => {
                            this.setState({laundry: e.target.value});
                            }
                  }
                    value={this.state.laundry}
                    min={0}
                  />
              </ListItem>
                }
                {
                amenities.heater &&
              <ListItem>
                <ListItemIcon>
                  <LocalFireDepartmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Heater" />
                <TextField
                    id="outlined-number"
                    type="number"
                    onChange={
                      (e) => {
                            this.setState({heater: e.target.value});
                            }
                  }
                    value={this.state.heater}
                    min={0}
                    
                  />
              </ListItem>
                }
                {
                amenities.aircon &&
              <ListItem>
                <ListItemIcon>
                  <AcUnitOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Air Conditioned" />
                <TextField
                    id="outlined-number"
                    type="number"
                    onChange={
                      (e) => {
                            this.setState({aircon: e.target.value});
                            }
                  }
                    value={this.state.aircon}
                    min={0}
                    
                  />
              </ListItem>
               }
               {
                amenities.parking && 
              <ListItem>
                <ListItemIcon>
                  <LocalParkingOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Parking" />
                <TextField
                    id="outlined-number"
                    type="number"
                    min={0}
                    onChange={
                      (e) => {
                            this.setState({parking: e.target.value});
                            }
                  }
                    value={this.state.parking}
                  
                  />
              </ListItem>
              }
            </List></Box>
            </div>
          } <div>*Click on the compute fees button to calculate.</div>
           
            <div className="form-row">
            <Box sx={{border:1, borderColor: '#e3e3e3', borderRadius: 1, padding: 2, width: '100%', display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
              <h3>Total Fees/ Month</h3>
              <h3>C{formatter.format(this.state.totalFee)}</h3>
             </Box>
            </div>
           
          <div className="form-action-row">
          <Button variant="contained" 
                 color="success"
                  onClick={() =>{
                    this.props.handlePrevTab()}
                  }>
                  <WestOutlinedIcon/>Prev</Button>
          <Button variant="contained" 
                  onClick={() =>{
                    this.saveInLocalStorage();
                    this.handleSubmit();
                    this.props.successSubmit();
                  }
                  }>
                  <AddTaskOutlinedIcon /> Submit</Button>
            </div>
    </div>
  }
}
export default RentFeesForm;
