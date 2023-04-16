import { useState } from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import "../total-views/TotalViews.css";


export default function TotalViews({viewsCount}) {
    const [views, setViews] = useState(viewsCount);
    const [viewed, setViewed] = useState(false);

    return (
        <div className="view-container">
            <IconButton
                color= "primary"
                sx={{ height: 1 }}
                className={`view-button ${viewed ? 'viewed' : ''}`}
                onClick={() => {
                    setViews(views + 1);
                    setViewed(true);
                }}>
                <VisibilityIcon />
            </IconButton>
            <div className="view-counter">
                {views}
            </div>
        </div>
    );
}
