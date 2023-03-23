import * as React from 'react';
import './ListingDetailsForm.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { LocalStorageKeysConst } from '../../../constants/AppConstants';
import LocalStorage from '../../../services/storage/LocalStorage'
 class ListingDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyAddress: '',
      startDate: new Date(),
      endDate: new Date(),
      overview: '',
 
    };
  }
  handleSubmit = ()=>{
      LocalStorage.setStorageItem(LocalStorageKeysConst.LISTING_DETAILS, this.state);
  }

  render(){
    return <div className="listing-form">
     <form onSubmit={this.handleSubmit}>
        <div className="form-row gray">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <label  className="label">Publish Date</label>
              <DatePicker label="Start Date" />
              <DatePicker label="End Date" />
          </LocalizationProvider>
            </div>  
          
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
          <div className="form-action-row">
          <Button variant="contained" 
                  onClick={() =>{
                    this.handleSubmit();
                    this.props.handleNextTab()}
                  }>Next
          <ArrowRightAltOutlinedIcon/></Button>
          </div>
          </form>
    </div>
  }
}
export default ListingDetailsForm;
