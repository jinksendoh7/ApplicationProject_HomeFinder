import * as React from 'react';
import './ListingDetailsForm.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { LocalStorageKeysConst } from '../../../constants/AppConstants';
import LocalStorage from '../../../services/storage/LocalStorage'
import dayjs from 'dayjs';
import Divider from '@mui/material/Divider'
import { v4 as uuidv4 } from 'uuid';
 class ListingDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS) !==null ?  LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS).id:uuidv4(),
      propertyAddress: props.propertyAddress,
      startDate:LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS) !==null ? dayjs(LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS).startDate) : dayjs(),
      endDate: LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS) !==null ?  dayjs(LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS).endDate) : dayjs().add(7, "day"),
      overview: LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS) !==null ?  LocalStorage.getStorageItem(LocalStorageKeysConst.LISTING_DETAILS).overview: '',
    };
  }
  saveInLocalStorage = ()=>{
      LocalStorage.setStorageItem(LocalStorageKeysConst.LISTING_DETAILS, this.state);
  }

  render(){
    return <div className="listing-form">
        <div className="form-row gray">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <label  className="label">Publish Date</label>
              <DatePicker label="Start Date" onChange={(v)=>this.setState({startDate:v}) } value={this.state.startDate} minDate={dayjs()} />
              <DatePicker label="End Date" onChange={(v)=>this.setState({endDate:v}) } value={this.state.endDate} minDate={dayjs().add(7, 'day')} />
          </LocalizationProvider>
       
          </div>
          { 
            (this.state.startDate.length === 0 || this.state.endDate.length === 0) && 
            <div className="form-error-text">Start and End dates are required and must be valid.</div>
          }
        <div className="form-row">
        <div className="label">Description</div>
             <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.overview}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({overview: data})
                    } }
                    
                />
        </div>
        { 
            (this.state.overview.length === 0) && 
            <div className="form-error-text">Description is required.</div>
          }
          <div className="form-action-row">
          <Button variant="contained" 
               disabled={(this.state.overview.length === 0)}
                  onClick={() =>{
                    this.saveInLocalStorage();
                    this.props.handleNextTab()}
                  }>Next
             <EastOutlinedIcon/></Button>
          </div>

    </div>
  }
}
export default ListingDetailsForm;
