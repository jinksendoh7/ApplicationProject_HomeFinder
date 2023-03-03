

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';


function TopBarComponent({message}) {

    return (
        <div className='top-header'>
          <div className='left-header'><PhoneIphoneOutlinedIcon fontSize='small'/><span className="hidden-sm">(519) 567 8890</span>
            &nbsp; <LocalPostOfficeOutlinedIcon fontSize='small'/> <span className="hidden-sm">&nbsp;info@homefinder.com</span></div>
          <div className="right-header"><FacebookOutlinedIcon/> &nbsp; <GoogleIcon/></div>
        </div>
    );
}

export default TopBarComponent;