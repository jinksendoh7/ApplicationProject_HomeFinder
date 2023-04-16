import {Box, Grid, Paper, Container} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import {Outlet} from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import SpinnerLoader from '../../components/spinner-loader/SpinnerLoaderComponent';
import { useState, useEffect } from "react";
import {FireStoreConst} from '../../constants/FirebaseConstants'
import StorageService from '../../services/storage/StorageService'
import { UserAuth } from '../../contexts/auth/AuthContext';
import FilterSidebarComponent from '../../components/filter-sidebar/FilterSidebarComponent';
import './ListingsPage.css'
import SearchResultsComponent from '../../components/search-results/SearchResultsComponent';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import { useLocation } from 'react-router-dom';
import { LocalStorageKeysConst, RoutesConst } from '../../constants/AppConstants';
import LocalStorage from '../../services/storage/LocalStorage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  boxShadow:'none',

  color: theme.palette.text.secondary,
}));


function ShowListingsPage() {

    let [results, setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [savedListing,setSavedListing] = useState([]);
    const [filterValues, setFilterValues] = useState({keyword: '', listingType: 'All', price: 1000});
    let location = useLocation();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0d61b6");
    const [userType, setUserType] = useState( FireStoreConst.USER_DOC_HOMEOWNER_USER  );
    const { user,setUser } = UserAuth();
    const getUserType = async(user) => {
        const userInfo =  await StorageService.getDocWhere(
          FireStoreConst.USER_DOC, 
          FireStoreConst.USER_DOC_KEY,
          user.uid
      )
      setUserType(userInfo.usertype);
      setUser(userInfo);
     
      };
      const getResults = async()=>{
        const result_data = await StorageService.getDocs(FireStoreConst.LISTING_DOC);
        return result_data;
      }

      const handleSavedListing = () =>{
        setSavedListing(LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING));
      }
      const onHandleSearch = (filterData) =>{
        setFilterValues(filterData);
        setIsLoading(true);
        setTimeout(() =>{
          getResults().then(d => {
            let filteredResults = d.filter((el)=>{
              if(filterData.isRoomOnly==='All'){
                  return el.listing.propertyAddress.includes(filterData.keyword) &&
                   el.fees.totalFee >= filterData.price 
               
              }
              else if(filterData.isRoomOnly === true){
                  return el.listing.propertyAddress.includes(filterData.keyword) &&
                         el.fees.totalFee >= filterData.price && el.fees.isRoomOnly === true
                  }
                  else{
                    return el.listing.propertyAddress.includes(filterData.keyword) &&
                    el.fees.totalFee >= filterData.price && !el.fees.isRoomOnly
                  
                  }
              })
            // Drilling down results further
            if(filterData.wifi){
               filteredResults = filteredResults.filter((el)=> el.amenities.wifi);
              }
            if(filterData.laundry){
              filteredResults = filteredResults.filter((el)=> el.amenities.laundry);
             }   
            if(filterData.heater){
              filteredResults = filteredResults.filter((el)=> el.amenities.heater);
                }
              if(filterData.aircon){
                  filteredResults = filteredResults.filter((el)=> el.amenities.aircon);
              }
              if(filterData.parking){
                filteredResults = filteredResults.filter((el)=> el.amenities.parking);
              }
              if(filterData.nearToPark){
                filteredResults = filteredResults.filter((el)=> el.amenities.nearToPark);
              }
              if(filterData.nearToMall){
                filteredResults = filteredResults.filter((el)=> el.amenities.nearToMall);
              }
              if(filterData.nearToGrocery){
                filteredResults = filteredResults.filter((el)=> el.amenities.nearToGrocery);
              }
              if(filterData.nearToGovernment){
                filteredResults = filteredResults.filter((el)=> el.amenities.nearToGovernment);
              }
              if(filterData.nearToBank){
                filteredResults = filteredResults.filter((el)=> el.amenties.nearToBank);
              }
             
             setResults(filteredResults)
             setIsLoading(false)
          });

        }, 1500);
    
    
       
        
      }
      useEffect(() => {
        
        user.uid !== undefined && getUserType(user);
         
          getResults().then(d => setResults(d));
          setLoading(false);
       
      }, [user,location, userType]);
    
    return (
        <Box sx={{ display: 'flex' }}>
        <HeaderComponent 
        userType={userType}/>
        { userType === FireStoreConst.USER_DOC_HOMEOWNER_USER  
              &&   
         <Container fixed  sx={{marginTop: 1, lg:{maxWidth:1366}}}>
          <Outlet/>
              <Box display="grid" gap={1}>
                <Box>
                  <Item>
                    
                    {
                    <SearchResultsComponent 
                      data={results} 
                      filterValues={filterValues}
                      handleSaved = {handleSavedListing}
                      isHomeOwner={userType===FireStoreConst.USER_DOC_HOMEOWNER_USER}/>
                    }
                    </Item>
                </Box>
              </Box>

          </Container>
        }
        </Box>
    );
}

export default ShowListingsPage;