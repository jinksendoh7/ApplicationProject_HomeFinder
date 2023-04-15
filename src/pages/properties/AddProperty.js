import {Grid, Box, TextField, Select,Menu, MenuItem} from '@mui/material';
import './Property.css';

const AddProperty = ()=>{
    return (
    <><div className="heading">
        Add Property
    </div>
    <Box  sx={{py:3}} >
    <Grid container spacing={{ xs:1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={6} >
                 <TextField fullWidth label="Address1" sx={{m:1}} />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
            <TextField fullWidth label="Address2" sx={{mb:3}} />
            </Grid>
    </Grid>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
            <TextField fullWidth label="City" sx={{mb:3}} />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Select
                labelId="demo-simple-select-label"
                fullWidth
                sx={{ mt:1}}
                displayEmpty
            >
                 <MenuItem disabled value="">
                    <em>Province</em>
                </MenuItem>
                <MenuItem value="Alberta">Alberta</MenuItem>
                <MenuItem value="British Columbia">Britis Columbia</MenuItem>
                <MenuItem value="Manitoba">Manitoba</MenuItem>
                <MenuItem value="New Brunswick">New Brunswick</MenuItem>
                <MenuItem value="NewFooundland and Labrador">NewFooundland and Labrador</MenuItem>
                <MenuItem value="Northwest Territories">Northwest Territories</MenuItem>
                <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
                <MenuItem value="Nunavut">Nunavut</MenuItem>
                <MenuItem value="Ontario">Ontario</MenuItem>
                <MenuItem value="Prince Edward Island">Prince Edward Island</MenuItem>
                <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
                <MenuItem value="Yukon">Yukon</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                   <TextField fullWidth label="Postal Code" sx={{mb:3}} />
            </Grid>
             
        </Grid>
        <Grid container spacing={{ xs:1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={6} sx={{ my:2, pb:3, borderRadius:1, border: 1, borderColor: '#e6e6e6'}}>
                <div className="sub-heading">
                        Home Features    
                </div>
                <Grid item xs={2} sm={4} md={6}>
                <div className="flex-row">
                    <div className="flex-item">
                        <div className="text-heading">Bedroom</div>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Bedroom"
                            size="small"
                            fullWidth
                            sx={{ mt:1}}
                            displayEmpty
                            >
                            <MenuItem disabled value="">
                                <em>Bedroom</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={1.5}>1.5</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={2.5}>2.5</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3.5}>3.5</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={4.5}>4.5</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        </div>
                        <div className="flex-item">
                        <div className="text-heading">Toilet and Bath</div>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Bedroom"
                            size="small"
                            fullWidth
                            sx={{ mt:1}}
                            displayEmpty
                            >
                            <MenuItem disabled value="">
                                <em>Toilet & Bath</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={1.5}>1.5</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={2.5}>2.5</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3.5}>3.5</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={4.5}>4.5</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        </div>
                        <div className="flex-item">
                        <div className="text-heading">Parking Slot</div>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Bedroom"
                            size="small"
                            fullWidth
                            sx={{ mt:1}}
                            displayEmpty
                            >
                            <MenuItem disabled value="">
                                <em>Parking Slot</em>
                            </MenuItem>
                            <MenuItem value={1}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={1.5}>1.5</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={2.5}>2.5</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3.5}>3.5</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={4.5}>4.5</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                        </div>
                </div>  
                </Grid>
            </Grid>
            <Grid item xs={2} sm={4} md={6}  sx={{ my:2, pb:3, borderRadius:1, border: 1, borderColor: '#e6e6e6'}}>
            <Grid item xs={2} sm={4} md={6}>
            <div className="sub-heading">
                        Lot Information   
                </div>
                    <Grid item xs={2} sm={4} md={6}>
                    <div className="flex-row">
                        <div className="flex-item">
                        </div>
                    </div>
                    </Grid>
             </Grid>
            </Grid>
    </Grid>
    </Box>
    </>
    )
}
export default AddProperty;