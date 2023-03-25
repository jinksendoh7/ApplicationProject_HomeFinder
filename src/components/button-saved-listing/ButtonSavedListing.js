import Button from '@mui/material/Button';

import LocalStorage from '../../services/storage/LocalStorage';
import { LocalStorageKeysConst} from '../../constants/AppConstants';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ButtonSavedListing({listing}) {
    const handleSavedListing = (listing) =>{
        let currentSavedListing = LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING) === null ?[] : LocalStorage.getStorageItem(LocalStorageKeysConst.SAVED_LISTING);
        currentSavedListing.push(listing);
        LocalStorage.setStorageItem(LocalStorageKeysConst.SAVED_LISTING, currentSavedListing);
    }
    return (
       <Button variant="outlined" color="primary" onClick={() => handleSavedListing(listing)}><FavoriteBorderIcon /> </Button>
    );
}

export default ButtonSavedListing;