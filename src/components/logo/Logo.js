import React from 'react';
import '../logo/Logo.css';

function Logo({url, mainLogo}) {
    return (
            <img src={url} alt="home-logo" className={mainLogo} ></img>
      
    )
}

export default Logo;