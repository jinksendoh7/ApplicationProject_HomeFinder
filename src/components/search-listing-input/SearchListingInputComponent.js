import './SearchListingInput.css'
import {Box} from '@mui/material'

const SearchListingInputComponent = () => {
    return(
        <>
        <div className='search-box-bg'>
        </div>
              <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    height:{ xs:520, sm: 400, md: 350, lg:320},
                    marginTop: {xs: 22, sm: 28, md: 30, lg:35},
                    marginLeft: {xs:'3%', sm:'5%', md:'15%'},
                    marginRight: {xs:'-15px', sm:'5%', md:'15%'},
                    borderRadius:2,
                    backgroundColor: 'primary.dark',
                    opacity: [0.9, 0.8, 0.8],
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    cursor:'pointer'
                    },
                }}
            />
            <div className='wrap'>111</div>
    </>
    );
  };
  
export default SearchListingInputComponent;