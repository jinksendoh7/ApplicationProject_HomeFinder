

import MoonLoader from "react-spinners/MoonLoader";
import './SpinnerLoader.css'  

const SpinnerLoader = ({color, loading, size}) => {
    return(
      <div className="spinner-wrapper">      
      <MoonLoader
      color={color}
      loading={loading}
      size={size}
      width={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
    );
  };
  
export default SpinnerLoader;