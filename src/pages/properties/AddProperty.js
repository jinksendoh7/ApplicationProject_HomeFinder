import {Grid, Box, TextField, Select,Checkbox, MenuItem, FormControlLabel, Button} from '@mui/material';
import './Property.css';
import {useState, useEffect} from 'react';
import StorageService from '../../services/storage/StorageService';
import { FireStoreConst } from '../../constants/FirebaseConstants';
import SnackbarElement from '../../components/snack-bar/SnackbarElement';
import { UserAuth } from '../../contexts/auth/AuthContext';


const AddProperty = ()=>{
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [bedroom, setBedroom] = useState(0);
    const [toilet, setToilet] = useState(0);
    const [parkingSlot, setParkingSlot] = useState(0);
    const [area, setArea] = useState(0);
    const [hasSewerSystem, setHasSewerSystem] = useState(true);
    const [hasWaterSystem, setHasWaterSystem] = useState(true);
    const [owned, setOwned] = useState(true);
    const [shareMyContactDetails, setShareMyContactDetails] = useState(true);
    const [isNew, setIsNew] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const { user,setUser } = UserAuth();

    const getUserInfo = async(user) => {
   
        const userInfo =  await StorageService.getDocWhere(
          FireStoreConst.USER_DOC, 
          FireStoreConst.USER_DOC_KEY,
          user.uid
      )
      setUser(userInfo);
    }

    const handleSave = async()=>{
        setIsSaved(false);
        const docRef = await StorageService.createDoc(FireStoreConst.PROPERTY_DOC,{
            address1: address1,
            address2: address2,
            city: city,
            province: province,
            postalCode: postalCode,
            bedroom: bedroom,
            toilet: toilet,
            parkingSlot: parkingSlot,
            area: area,
            hasSewerSystem: hasSewerSystem,
            hasWaterSystem: hasWaterSystem,
            owned: owned,
            shareMyContactDetails:shareMyContactDetails,
            isNew: isNew,
            createdBy: user.email,
            createdByUserId: user.id,
            bestFeatures:{
                wifi: false,
                aircon: false,
                heater: false,
                parking: false,
                laundry: false,
            }
           
        });
        if(docRef){
            setIsSaved(true);
        }
        else{
            setIsSaved(false);
        }
    }
    useEffect(() => {
        
        user.uid !== undefined && getUserInfo(user);
      }, [user]);

    return (
    <><div className="heading">
        Add Property
    </div>
    <Box  sx={{py:3}} >
    <Grid container spacing={{ xs:1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={6} >
                 <TextField fullWidth value={address1} onChange={(e)=>setAddress1(e.target.value)} label="Address1" sx={{m:1}} />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
            <TextField fullWidth value={address2} onChange={(e)=>setAddress2(e.target.value)} label="Address2" sx={{mb:3}} />
            </Grid>
    </Grid>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
            <TextField fullWidth value={city} onChange={(e)=>setCity(e.target.value)} label="City" sx={{mb:3}} />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Select
                labelId="demo-simple-select-label"
                fullWidth
                sx={{ mt:1}}
                value={province} onChange={(e)=>setProvince(e.target.value)}
                displayEmpty
            >
                 <MenuItem disabled value="">
                    Province
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
                   <TextField fullWidth value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} label="Postal Code" sx={{mb:3}} />
            </Grid>
             
        </Grid>
        <Grid container spacing={{ xs:1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={3} >
                        <div className="text-heading">Bedroom</div>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Bedroom"
                            size="small"
                            fullWidth
                            sx={{ mt:1}}
                            displayEmpty
                            value={bedroom} onChange={(e)=>setBedroom(e.target.value)}
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
                </Grid> 
                <Grid item xs={2} sm={4} md={3} >
                        <div className="text-heading">Toilet and Bath</div>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Toilet & Bath"
                            size="small"
                            fullWidth
                            sx={{ mt:1}}
                            displayEmpty
                            value={toilet} onChange={(e)=>setToilet(e.target.value)}
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
                </Grid>
                <Grid item xs={2} sm={4} md={3} >
                        <div className="text-heading">Parking Slot</div>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Bedroom"
                            size="small"
                            fullWidth
                            sx={{ mt:1}}
                            displayEmpty
                            value={parkingSlot} onChange={(e)=>setParkingSlot(e.target.value)}
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
                    </Grid>
                <Grid item xs={2} sm={4} md={3} >
                     <div className="text-heading">Area (Approx)</div>
                     <TextField fullWidth  
                      value={area} onChange={(e)=>setArea(e.target.value)}
                      label="Area(sq.mtr)" size="small" sx={{mb:3}} type="number" />
                </Grid>
             </Grid>
             <div className="sub-heading" style={{margin:'1rem 0'}}>Other Information</div>
             <Grid container spacing={{ xs:1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             <Grid item xs={2} sm={4} md={6} >
                 <FormControlLabel control={<Checkbox  value={hasWaterSystem} onChange={(e)=>setHasWaterSystem(e.target.value)} />} label="Connected to Water System" />
                 <FormControlLabel control={<Checkbox  value={hasSewerSystem} onChange={(e)=>setHasSewerSystem(e.target.value)} />} label="Sewer System (Sanitary)" />
                 <FormControlLabel control={<Checkbox  value={owned} onChange={(e)=>setOwned(e.target.value)} />} label="Owned" />
                
             </Grid>
             <Grid item xs={2} sm={4} md={6} >
                 <FormControlLabel control={<Checkbox  value={shareMyContactDetails} onChange={(e)=>setShareMyContactDetails(e.target.value)}/>} label="Share my Contact Details" />
                 <FormControlLabel control={<Checkbox  value={isNew} onChange={(e)=>setIsNew(e.target.value)} />} label="New (Never been Repaired or Renovated)" />
             </Grid>
            </Grid>

            <Box sx={{maxWidth:'50%', margin:' 2rem auto'}}>
                <Button variant="contained" sx={{p:1}}
                disableElevation 
                onClick={()=>{handleSave()}}
                fullWidth>Save Property</Button>
            </Box>
            {isSaved && <SnackbarElement isOpen={isSaved} message={'Your property has been successfully saved.'} />}
    </Box>
    </>
    )
}
export default AddProperty;