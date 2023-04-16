
import StorageService from "../../services/storage/StorageService";
import { FireStoreConst } from "../../constants/FirebaseConstants";
import {useEffect, useState} from 'react';
import {Box, Grid, Paper, Typography, Divider, Button} from '@mui/material';
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

      useEffect(() => {
            user.uid !== undefined && getUserInfo(user);
          (async()=>{
            const data = await getProperties();
            setProperties(data);
            
          })()
          console.log(properties);
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
                      <div> <LocationOnOutlinedIcon sx={{verticalAlign:'middle'}}/>  {data.address1.concat('',data.address2,' ', data.city,' ', data.province,' ', data.postalCode)}</div>
                  </Typography>
                  <div style={{fontSize:15,margin:5}}> <b>{data.area} sq mtr</b></div>
                  </div>
                  <div className="flex-item">
                    <Button variant="contained" disableElevation>Update</Button>
                    </div>
                </div>
               <Divider/>
                 <div className="flex-row">
                    <div className="flex-item">
                    <Tooltip title="Bedroom">
                       <BedOutlinedIcon sx={{ fontSize: 28 }}/>
                       </Tooltip> 
                      <div style={{marginLeft:5}}>
                        <b>{data.bedroom}</b></div>
                    </div>
                    <div className="flex-item">
                    <Tooltip title="Toilet and Bath">
                       <BathtubOutlinedIcon sx={{ fontSize: 28 }}/>
                    </Tooltip>
                    <div style={{marginLeft:5}}><b>{data.toilet}</b></div>
                    </div>
                    <div className="flex-item">
                    <Tooltip title="Parking Slot">
                       <LocalParkingOutlinedIcon  sx={{ fontSize: 28 }}/>
                    </Tooltip>
                    <div style={{marginLeft:5}}><b>{data.parkingSlot}</b></div>
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
    </>
);

}
export default ListProperty;