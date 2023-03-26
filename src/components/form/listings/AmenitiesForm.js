import * as React from 'react';
import './ListingDetailsForm.css'
import Button from '@mui/material/Button';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { LocalStorageKeysConst } from '../../../constants/AppConstants';
import LocalStorage from '../../../services/storage/LocalStorage'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import Alert from '@mui/material/Alert'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import Box from '@mui/material/Box'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import Divider from '@mui/material/Divider'

class AmenitiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = LocalStorage.getStorageItem(LocalStorageKeysConst.AMENITIES_FEATURES) === null ?{
      wifi: false,
      laundry: true,
      aircon: false,
      heater: false,
      parking: false,
      nearToPark: false,
      nearToMall: false,
      nearToGrocery: true,
      nearToGovernment: false,
      nearToBank: false,
    }:
    LocalStorage.getStorageItem(LocalStorageKeysConst.AMENITIES_FEATURES);
  }
  
  saveInLocalStorage = ()=>{
    LocalStorage.setStorageItem(LocalStorageKeysConst.AMENITIES_FEATURES, this.state);
}

  render(){
    return <div className="listing-form">
          <div className="form-row">
          <Box sx={{border:1, borderColor: '#e3e3e3', borderRadius: 1, padding: .5, width: '100%'}}>
          <h3>Home Features</h3>
          <Alert severity="warning">Include only features that is part of the rent or fees.</Alert>
          <List
              sx={{ width: '100%',  bgcolor: 'background.paper' }}
            >
              <ListItem>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                <Checkbox
                  onChange={() => this.setState({wifi: !this.state.wifi})}
                  checked={this.state.wifi}
                 />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalLaundryServiceOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Laundry" />
                <Checkbox
                  onChange={() => this.setState({laundry: !this.state.laundry})}
                  checked={this.state.laundry}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalFireDepartmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Heater" />
                <Checkbox
                  onChange={() => this.setState({heater: !this.state.heater})}
                  checked={this.state.heater}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AcUnitOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Air Conditioned" />
                <Checkbox
                  onChange={() => this.setState({aircon: !this.state.aircon})}
                  checked={this.state.aircon}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalParkingOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Parking" />
                <Checkbox
                  onChange={() => this.setState({parking: !this.state.parking})}
                  checked={this.state.parking}
                />
              </ListItem>
            </List></Box>
            <Box sx={{border:1, borderColor: '#e3e3e3', borderRadius: 1, padding: .5, width: '100%'}}>
          <h3>Property Nearby</h3>

          <Alert severity="warning">Establishment is within 10km radius.</Alert>
          <List
              sx={{ width: '100%',  bgcolor: 'background.paper' }}
            >
              <ListItem>
                <ListItemIcon>
                  <ParkOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Park and Playground" />
                <Checkbox
                  edge="end"
                  onChange={() => this.setState({nearToPark: !this.state.nearToPark})}
                  checked={this.state.nearToPark}
                 />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ShoppingBagOutlinedIcon/>
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Shopping Malls" />
                <Checkbox
                  onChange={() => this.setState({nearToMall: !this.state.nearToMall})}
                  checked={this.state.nearToMall}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ShoppingCartOutlinedIcon  />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Groceries" />
                <Checkbox
                  edge="end"
                  onChange={() => this.setState({nearToGrocery: !this.state.nearToGrocery})}
                  checked={this.state.nearToGrocery}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  < AccountBalanceOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Government Offices" />
                <Checkbox
                  edge="end"
                  onChange={() => this.setState({nearToGovernment: !this.state.nearToGovernment})}
                  checked={this.state.nearToGovernment}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  < PriceChangeOutlinedIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="ATM and Banks" />
                <Checkbox
                  edge="end"
                  onChange={() => this.setState({nearToBank: !this.state.nearToBank})}
                  checked={this.state.nearToBank}
                />
              </ListItem>
            </List></Box>
          </div>
          <Divider/>
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
                    this.props.handleNextTab()}
                  }>Next
          <EastOutlinedIcon/></Button>
            </div>
    </div>
  }
}
export default AmenitiesForm;
