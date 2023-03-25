import './SearchBoxForm.css';
import {TextField, Select, MenuItem,FormControl, InputLabel, Slider, Button } from '@mui/material';

function SearchBoxForm() {
  
  return (
    <>
    <div className="form-item-row">
      <div>
      <div className="form-group-control">
      <div className="item-control-stretch">
          <TextField
             sx={{ m: 2 }}
            margin="normal"
            name="streetName"
            fullWidth={true}
            label="Street Name, Keywords etc."
            placeholder='Street Name, Keywords etc.'
            type="text"
            value=""  
            variant='filled'
            />
        </div>
        <div className="item-control">
            <FormControl sx={{ m: 2, minWidth: 80 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-autowidth-label">Bedrooms</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="bedroom"
                value=""
                label="All Bedrooms"
                fullWidth={true}
              >
                <MenuItem value="All Beedrooms">2 Bedrooms</MenuItem>
              </Select>
              </FormControl>
          </div>
          <div className="item-control">
              <FormControl sx={{ m: 2, minWidth: 80 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-autowidth-label">Bathrooms</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="bedroom"
                value=""
                label="Bathrooms"
                fullWidth={true}
              >
                <MenuItem value="All Beedrooms">2 Bathrooms</MenuItem>
              </Select>
              </FormControl>
          </div>
          
      </div>

      
      </div>

      {/* Second Row */}
      <div>
      <div className="form-group-control">
    
        <div className="item-control">
            <FormControl sx={{ m: 2, minWidth: 80 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-autowidth-label">All Types</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="bedroom"
                value=""
                label="All Types"
                fullWidth={true}
              >
                <MenuItem value="All Types">All Types</MenuItem>
              </Select>
              </FormControl>
          </div>
          <div className="item-control">
              <FormControl sx={{ m: 2, minWidth: 80 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-autowidth-label">Availability</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="bedroom"
                value=""
                label="Bathrooms"
                fullWidth={true}
              >
                <MenuItem value="All Beedrooms">In a week</MenuItem>
                <MenuItem value="All Beedrooms">In 2 weeks</MenuItem>
              </Select>
              </FormControl>
          </div>

          <div className="item-control-stretch">
          <FormControl sx={{ m: 2, minWidth: 80 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-autowidth-label" sx={{mt:2, color:'#FFF !important', fontSize:'.8rem !important'}}>Price ($0 to $3,000)</InputLabel>
              <Slider sx={{ml:2}}defaultValue={500} aria-label="Default" step={500} valueLabelDisplay="auto" max={3000} min={0} />
            </FormControl>
              </div>
          
      </div>
      <div className="form-group-control">

      <Button variant="contained" color="success" 
            sx={{display:'block',width: {lg:'40%', md: '55%', sm: '80%'},mt:1, backgroundColor:'#ff9832', borderRadius: 2, padding:2, fontSize: '1.2rem', opacity: 1}}>
          Search
        </Button>
      </div>
      
      </div>
      </div>
     
    </>
  );
   
}

export default SearchBoxForm;
