
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Chip, Divider, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import ButtonSavedListing from '../button-saved-listing/ButtonSavedListing'
import SampleHome01 from '../../assets/images/houses/odd.png';
import SampleHome02 from '../../assets/images/houses/even.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import './SearchResultsComponent.css'
import { v4 as uuidv4 } from 'uuid';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalStorage from '../../services/storage/LocalStorage';
import { LocalStorageKeysConst, RoutesConst } from '../../constants/AppConstants';
import { useState, useEffect } from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import ModalElement from '../modal/ModalElement';
import ListRenovations from '../list-renovations/ListRenovations';
import LikesButton from '../likes-button/LikesButton';
import TotalViews from '../total-views/TotalViews';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  boxShadow: 'none',
  border: '1px solid',
  borderColor: '#e3e3e3',
  marginBottom: 10,
  color: theme.palette.text.secondary,
}));

export default function SearchResultsComponent({ data, filterValues, handleSaved }) {
  const theme = useTheme();

  console.log("data", data);
  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
   const [open, setOpen] = useState(false);
  const [dataItem, setDataItem] = useState([]);
  const [dataItem2, setDataItem2] = useState([]);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  const handleModalOpen = (getID) => {
    setOpen(true);
    setDataItem(getID);
  };
  const handleModalClose = () => {
    setOpen(false);
  };

const checkIfSaved = (id)=>{
  let bool = false; 
  const savedListing = LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING);
  if(savedListing !==null) {
    for (let key in savedListing) {
       if(savedListing[key].listing.id === id){
          bool = true;
        }
      }

    }
    else {
      bool = false;
    }

    return bool;
  }

  const shareOnFacebook = () => {
    const navUrl = RoutesConst.SHARE_ON_FACEBOOK_ROUTE;
    window.open(navUrl, '_blank');
  }
  useEffect(()=>{
      setLikes(Math.floor(Math.random() * 500))
      setViews(Math.floor(Math.random() * 1000))
  },[setLikes, setViews])

  return (
    <>
    
    <div className='form-header'>
       <h1>Search Results ({data.length})</h1>
    </div>
    <Box sx={{ width: '100%', margin:1 }}>
    <Stack>
        {
          data && Array.from(data).map((item, index) => (
            <Item key = {uuidv4()} > 
            <Grid container spacing={2} key={item.listing.id}>
            <Grid item xs={12} md={3}>
            <CardMedia
                    component="img"
                    height="100%"
                    image={index % 2 ? SampleHome02:SampleHome01 }
                  />
            </Grid>
               <Grid item xs={12} md={6}>
                  <Typography component="div" variant="body1" sx={{color: "#346506", mt:2, fontWeight:'700', marginBottom: 1}} color="text.primary">
                 <div> <LocationOnOutlinedIcon sx={{verticalAlign:'middle'}}/>  {item.listing.propertyAddress}</div>
                  </Typography>
                  <div className="chip-stacked">
                      {
                        item.fees.isRoomOnly ? <Chip color="error" icon={<BedroomChildOutlinedIcon />} label="Room Only" />
                          : <Chip color="success" icon={<HouseOutlinedIcon />} label="Whole House" />
                      }
                    </div>
                    <div> {item.listing.overview.replace(/(<([^>]+)>)/ig, '').substring(0, 150)}...</div>
                    <div className="chip-stacked">
                      {item.amenities.wifi && <Chip color="success" variant="outlined" icon={<WifiIcon />} label="Wifi" />}
                      {item.amenities.laundry && <Chip color="warning" variant="outlined" icon={<LocalLaundryServiceOutlinedIcon />} label="Laundry" />}
                      {item.amenities.heater && <Chip color="error" variant="outlined" icon={<LocalFireDepartmentOutlinedIcon />} label="Heater" />}
                      {item.amenities.parking && <Chip color="info" variant="outlined" icon={<LocalParkingOutlinedIcon />} label="Parking" />}
                      {item.amenities.aircon && <Chip color="primary" variant="outlined" icon={<AcUnitOutlinedIcon />} label="Air Con" />}
                    </div>
                    <div className="chip-stacked">
                      {item.amenities.nearToPark && <Chip color="error" variant="outlined" icon={<ParkOutlinedIcon />} label="Park" />}
                      {item.amenities.nearToMall && <Chip color="info" variant="outlined" icon={<ShoppingBagOutlinedIcon />} label="Shopping Mall" />}
                      {item.amenities.nearToGrocery && <Chip color="success" variant="outlined" icon={<ShoppingCartOutlinedIcon />} label="Groceries" />}
                      {item.amenities.nearToGovernment && <Chip color="primary" variant="outlined" icon={<AccountBalanceOutlinedIcon />} label="Government Offices" />}
                      {item.amenities.nearToBank && <Chip color="warning" variant="outlined" icon={< PriceChangeOutlinedIcon />} label="ATM and Bank" />}
                    </div>

                    <div className="like-views">
                      <div className='total-likes'>
                        <LikesButton likeCount={likes} />
                      </div>
                      <div className='total-views'>
                        <TotalViews viewsCount={views}/>
                      </div>
                    </div>

                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className="actions-listing">
                      <div className="listing-title">
                        C{formatter.format(item.fees.totalFee)}
                      </div>
                      <div className="listing-button">
                        <ButtonSavedListing
                          listing={item}
                          isSaved={checkIfSaved(item.listing.id)}
                          onHandleSaved={handleSaved} />
                        <div className="margin-break"></div>
                         <Button
                            sx={{minWidth: 180}}
                           variant="contained" disabledElevation onClick={shareOnFacebook} color="warning"> <FacebookOutlinedIcon /> Share</Button>
                         <div className="margin-break"></div>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{minWidth: 180}}
                          disableElevation
                          disabled ={item.renovations === undefined}
                          onClick={(e) => {
                            handleModalOpen(e.target.value);
                          }}
                          value={item.renovations}
                        >
                          <HandymanIcon />RENOVATIONS<b>
                          {item.renovations === undefined ? '': ' ('.concat(item.renovations.length,')')
                          }
                          </b>
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Item>
            ))}
        </Stack>
      </Box>
      {open && (
        <ModalElement
          title={"List of Renovations"}
          isOpen={open}
          handleCloseModal={handleModalClose}
          element={<ListRenovations dataItem={dataItem} />}
        />
      )}
    </>
  );
}
