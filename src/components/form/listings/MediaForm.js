import * as React from 'react';
import './ListingDetailsForm.css'
import Button from '@mui/material/Button';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { LocalStorageKeysConst } from '../../../constants/AppConstants';
import LocalStorage from '../../../services/storage/LocalStorage'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider';
class MediaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }
  
 
  render(){
    return <div className="listing-form">
          <div className="form-row">
              <Alert severity="warning">This part is done in different USER STORY in future sprints. Refer to US-18 and 19 in JIRA</Alert>          
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
                    this.props.handleNextTab()}
                  }>Next
          <EastOutlinedIcon/></Button>
            </div>
    </div>
  }
}
export default MediaForm;
