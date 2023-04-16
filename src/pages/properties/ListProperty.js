
import StorageService from "../../services/storage/StorageService";
import { FireStoreConst } from "../../constants/FirebaseConstants";
import {useEffect, useState} from 'react';
import {Box, Grid, Paper} from '@mui/material';
import { UserAuth } from '../../contexts/auth/AuthContext';

import { experimentalStyled as styled } from '@mui/material/styles';

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
          {Array.from(Array(properties)).map((data, index) => (
            <Grid item xs={2} sm={4} md={12} key={index}>
              <Item>
                {data.address1}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
);

}
export default ListProperty;