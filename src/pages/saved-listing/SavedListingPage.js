
import {Box, Grid, Paper} from '@mui/material'
import {useState, useEffect} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import ButtonSavedListing from '../../components/button-saved-listing/ButtonSavedListing';
import { v4 as uuidv4 } from 'uuid';
import LocalStorage from '../../services/storage/LocalStorage';
import { LocalStorageKeysConst, SuccessMessageConst } from '../../constants/AppConstants';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SampleHome01 from '../../assets/images/houses/odd.png';
import SampleHome02 from '../../assets/images/houses/even.png';
import Chip from '@mui/material/Chip';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import './SavedListingPage.css'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  boxShadow:'none',
  border:'1px solid',
  borderColor:'#e3e3e3',
  color: theme.palette.text.secondary,
}));

const SavedListingPage = () => {
  const propAddress = '123 A Place Street, London ON, N5Y 5R6';
  const [savedListing, setSavedListing] = useState([]);
  const listing = {
      id:uuidv4(),
      address:  propAddress,
      price: 2500.00,
      isRoomOnly: true,
      wifi: true,
      laundry: true,
      parking: true,
      heater: true,
      aircon: false,
      description: 'The preview text goes here with 50 to 60 characters...'
  }

  const handleDeleteSavedListing = (index) => {
    const data = savedListing;
    console.log(data, 'before')
    console.log(index);
    if (index > -1) { // only splice array when item is found
      
      data.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(data, 'after')

    LocalStorage.setStorageItem(LocalStorageKeysConst.SAVED_LISTING, savedListing);
   
  }

  useEffect(() => {
   setSavedListing(LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING));
  }, [savedListing]);
  return(
      <div className="form-wrapper"> 
           <div className="form-header">
           <h1>Saved Listing</h1>
           <ButtonSavedListing listing ={listing}/>
            </div>
            {savedListing &&
            <div className="form-container">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          {savedListing && Array.from(savedListing).map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} sx={{minWidth: 345}}>
              <Item>
              <Card sx={{  maxWidth:345, border: 0, boxShadow:'none' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={index % 2 ? SampleHome02:SampleHome01 }
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" sx={{color: "#346506", fontWeight:'700', marginBottom: 1}} component="div">
                        {item.address}
                    </Typography>
                    <div className="chip-stacked">
                      {
                      item.isRoomOnly?<Chip color="primary"  icon={<BedroomChildOutlinedIcon />} label="Room Only" /> 
                      : <Chip color="primary" variant="outlined" icon={<HouseOutlinedIcon />} label="Whole House" />
                    }
                    </div>
                    <Typography variant="body2" color="text.secondary">
                     {item.description}
                    </Typography>
                   <div className="chip-stacked">
                        {item.wifi && <Chip color="success" icon={<WifiIcon />} label="Wifi" />}
                        {item.laundry && <Chip color="primary" icon={<LocalLaundryServiceOutlinedIcon />} label="Laundry" />}
                        {item.heater && <Chip color="warning" icon={<LocalFireDepartmentOutlinedIcon  />} label="Heater" />}
                        {item.parking && <Chip color="success"  icon={<LocalParkingOutlinedIcon />} label="Parking" />}
                        {item.aircon && <Chip color="warning"  icon={<AcUnitOutlinedIcon />} label="Air Con" />}
                  </div>
                  </CardContent>
                </CardActionArea>
               <div className="card-actions">
                  <Button variant="outlined" size="small" color="primary">
                    Share
                  </Button>
                  <Button color="error" onClick={() => handleDeleteSavedListing(index)} variant="outlined" size="small" >
                  <DeleteOutlinedIcon/> Delete
                  </Button>
                  </div>
              </Card>

              </Item>
            </Grid>
                  ))}
        </Grid>
          
            </div>
          }
        {
          savedListing.length ===0 &&
          <div className="empty-cards">
              <FavoriteBorderIcon sx={{ fontSize: 64 }} />
              <div className="empty-cards-title">
                    {SuccessMessageConst.EMPTY_SAVED_LISTING}
              </div>
          </div>
        }
      </div>

    );
  };
  
export default SavedListingPage;