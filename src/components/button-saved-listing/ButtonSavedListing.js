import Button from '@mui/material/Button';

import LocalStorage from '../../services/storage/LocalStorage';
import { LocalStorageKeysConst} from '../../constants/AppConstants';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ButtonSavedListing({listing, isSaved, onHandleSaved}) {
    const handleSavedListing = (listing) =>{
        let currentSavedListing = LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING) === null ?[] : LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING);
        currentSavedListing.push(listing);
        LocalStorage.setStorageItem(LocalStorageKeysConst.SAVED_LISTING, currentSavedListing);
        onHandleSaved();
    }
    return (
        <>      
      {isSaved ?
             <Button variant="contained" color="primary" onClick={() => handleSavedListing(listing)}><FavoriteBorderIcon /> Saved</Button>
                :
          <Button variant="outlined" color="primary" onClick={() => handleSavedListing(listing)}><FavoriteBorderIcon /> Save</Button>
        }
            </>
    );
}

export default ButtonSavedListing;