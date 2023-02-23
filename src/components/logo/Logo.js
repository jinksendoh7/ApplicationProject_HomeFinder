import React from 'react';
import '../logo/Logo.css';

function Logo({url, mainLogo}) {
    return (
        <div className='initialLogo'>
            <img src={url} alt="home-logo" className={mainLogo} ></img>
        </div>
    )
}

export default Logo;