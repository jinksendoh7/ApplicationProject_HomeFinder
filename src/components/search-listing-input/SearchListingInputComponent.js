import './SearchListingInput.css'
import {Box} from '@mui/material'
import SearchBoxForm from '../form/search-box/SearchBoxForm';


const SearchListingInputComponent = () => {
    return(
        <>
        <div className='search-box-bg'>
      
              <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    height:{ xs:650, sm: 520, md: 450, lg:380},
                    borderRadius:2,
                    backgroundColor: 'primary.dark',
                    color: '#FFF',
                    opacity: [0.9, 0.9, 0.9],
                   
                }}
            >
            <SearchBoxForm/>
            </Box>
            <div className='wrap'>&nbsp;</div>
            </div>
    </>
    );
  };
  
export default SearchListingInputComponent;