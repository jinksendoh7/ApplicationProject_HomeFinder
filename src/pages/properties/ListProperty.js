
import StorageService from "../../services/storage/StorageService";
import { FireStoreConst } from "../../constants/FirebaseConstants";
import {useEffect, useState} from 'react';
import {Box, Grid, Paper, Typography, Divider, Button, Alert} from '@mui/material';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { UserAuth } from '../../contexts/auth/AuthContext';
import Tooltip from '@mui/material/Tooltip';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import { experimentalStyled as styled } from '@mui/material/styles';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ModalElement from "../../components/modal/ModalElement";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SnackbarElement from "../../components/snack-bar/SnackbarElement";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'left',
  boxShadow:'none',
  border:'1px solid',
  borderColor:'#e3e3e3',
  color: theme.palette.text.secondary,
  padding:10,
}));

const ListProperty = () =>{
const [properties, setProperties] = useState([]);
const { user,setUser } = UserAuth();
const [open,setOpen] = useState(false);
const [wifi, setWifi] = useState(false);
const [aircon, setAircon] = useState(false);
const [laundry, setLaundry] = useState(false);
const [heater, setHeater] = useState(false);
const [parking, setParking] = useState(false);
const [isUpdate, setIsUpdate] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0)
const handleModalOpen = (index) => {
  setOpen(true);
  updateBestFeatures(index);
  setCurrentIndex(index)

};
const handleModalClose = () => {
  setOpen(false);
};
const handleSavebestFeatures = async(index)=>{
  setIsUpdate(false);
  const update =  await StorageService.update(
    FireStoreConst.PROPERTY_DOC, 
    {bestFeatures:{
      wifi: wifi,
      heater: heater,
      laundry: laundry,
      aircon: aircon,
      parking: parking
    }},
    properties[index].id);
    if(update){
      setIsUpdate(true);
      handleModalClose();
      updateBestFeatures(index);
    }
}
    const getProperties = async()=>{
        const result_data =  await StorageService.getDocsById(
            FireStoreConst.PROPERTY_DOC,
            user.email)
        return result_data;
      }
      const getUserInfo = async(user) => {
   
        const userInfo =  await StorageService.getDocWhere(
          FireStoreConst.USER_DOC, 
          FireStoreConst.USER_DOC_KEY,
          user.uid
      )
      setUser(userInfo);
    }
    
    const updateBestFeatures = (index) =>{
      setWifi(properties[index].bestFeatures.wifi);
      setLaundry(properties[index].bestFeatures.laundry);
      setAircon(properties[index].bestFeatures.aircon);
      setParking(properties[index].bestFeatures.parking);
      setHeater(properties[index].bestFeatures.heater);
    }

      useEffect(() => {
            user.uid !== undefined && getUserInfo(user);
          (async()=>{
            const data = await getProperties();
            setProperties(data);
     
          })()
      }, [user]);
   
    return (
    <>
     <Box sx={{ display: 'flex' }}>
       <div className="heading">
            {properties.length > 1 ? 'Properties' + '('+ properties.length + ')':  'Property' + '('+ properties.length + ')'}
        </div>
    </Box>
    <Box sx={{ display: 'flex', mt:5 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(properties).map((data, index) => (
            <Grid item xs={2} sm={4} md={12} key={index} sx={{px:3}}>
              <Item>
              <div className="flex-row">
                <div className="flex-item">
                  <Typography component="div" variant="body1" sx={{color: "#346506", mt:2, fontWeight:'700', marginBottom: 1}} color="text.primary">
                      <div style={{fontSize: 18}}> <LocationOnOutlinedIcon sx={{verticalAlign:'middle'}}/>  {data.address1.concat('',data.address2,' ', data.city,' ', data.province,' ', data.postalCode)}</div>
                  </Typography>
                  <div style={{fontSize:15,margin:5}}> <b>{data.area} sq mtr</b></div>
                  </div>
                  <div style={{flex:10}}></div>
                  <div className="flex-item">
                    <Button variant="contained" color="warning" disableElevation sx={{my:2}}>Update</Button>
                    <Button variant="contained" color="error" disableElevation sx={{my:2, ml:2}}><DeleteOutlinedIcon/></Button>
                    <Button variant="outlined" disableElevation sx={{my:2, ml:2}}>Upload Media</Button>
                    <Button variant="outlined" onClick={()=>handleModalOpen(index)} disableElevation sx={{my:2, ml:2}}>Best Features</Button>
                  </div>
               
                </div>
               <Divider/>
                 <div className="flex-row">
                    <div className="flex-item">
                    <Tooltip title="Bedroom">
                       <BedOutlinedIcon color="success" sx={{ fontSize: 28 }}/>
                       </Tooltip> 
                      <div style={{marginLeft:5}}>
                        <b>{data.bedroom}</b></div>
                    </div>
                    <div className="flex-item">
                    <Tooltip title="Toilet and Bath">
                       <BathtubOutlinedIcon  color="success" sx={{ fontSize: 28 }}/>
                    </Tooltip>
                    <div style={{marginLeft:5}}><b>{data.toilet}</b></div>
                    </div>
                    <div className="flex-item">
                    <Tooltip title="Parking Slot">
                       <LocalParkingOutlinedIcon  color="success" sx={{ fontSize: 28 }}/>
                    </Tooltip>
                    <div style={{marginLeft:5}}  color="success"><b>{data.parkingSlot}</b></div>
                    </div>
                    <div className="flex-item">
                       <div style={{fontSize:15}}>
                       {data.isNew &&
                           <Tooltip title="The house is new">
                            <CheckCircleOutlinedIcon color="success" sx={{ fontSize: 28, m:1 }}/>
                          </Tooltip>
                          }
                        {data.hasSewerSystem &&
                           <Tooltip title="Sewer System">
                            <CleanHandsOutlinedIcon sx={{ fontSize: 28, m:1  }}/>
                          </Tooltip>
                          }
                              {data.hasWaterSystem &&
                           <Tooltip title="Water System">
                            <InvertColorsOutlinedIcon sx={{ fontSize: 28, m:1  }}/>
                          </Tooltip>
                          }
                     </div>
                     </div>
                 </div>
               
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      {open && (
        <ModalElement
          title={"Best Features"}
          isOpen={open}
          handleCloseModal={handleModalClose}
          element={
            <>
            <Alert severity="info">Select the best features of your property that you want to highlight.</Alert>
            <List
            sx={{ width: '100%',  bgcolor: 'background.paper' }}
          >
            <ListItem>
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
              <Checkbox
                onChange={() => setWifi(!wifi)}
                checked={wifi}
               />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalLaundryServiceOutlinedIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Laundry" />
              <Checkbox
                 onChange={() => setLaundry(!laundry)}
                 checked={laundry}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalFireDepartmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Heater" />
              <Checkbox
                 onChange={() => setHeater(!heater)}
                 checked={heater}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AcUnitOutlinedIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Air Conditioned" />
              <Checkbox
                  onChange={() => setAircon(!aircon)}
                  checked={aircon}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalParkingOutlinedIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Parking" />
              <Checkbox
                 onChange={() => setParking(!parking)}
                 checked={parking}
              />
            </ListItem>
          </List>
          <Button variant="contained" 
            onClick={()=>handleSavebestFeatures(currentIndex)}
            color="warning" disableElevation sx={{my:2, width: '100%'}}>Save</Button>
          </>
          }
        />
      )}
       {isUpdate && <SnackbarElement isOpen={isUpdate} message={'Best Features of the property is successfully updated!'} />}
    </>
);

}
export default ListProperty;