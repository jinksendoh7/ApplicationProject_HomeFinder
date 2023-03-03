import './SearchListingInput.css'
import {Box} from '@mui/material'

const SearchListingInputComponent = () => {
    return(
        <>
        <div className='search-box-bg'>
        </div>
              <Box
                sx={{
                    width: '90%',
                    height: 320,
                    marginTop: {xs: 20, sm: 25, md: 28, lg:30},
                    marginLeft: {xs:3, sm:5, md:'15%'},
                    marginRight: {xs:3, sm:5, md:'15%'},
                    borderRadius:2,
                    backgroundColor: 'primary.dark',
                    opacity: [0.9, 0.8, 0.8],
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    cursor:'pointer'
                    },
                }}
            />
    </>
    );
  };
  
export default SearchListingInputComponent;