import { useState } from "react";
import { ThumbUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../likes-button/LikesButton.css";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

export default function LikesButton({likeCount}) {
    const [likes, setLikes] = useState( likeCount);
    const [liked, setLiked] = useState(false);
    const handleLikes = () => {
        setLikes(!liked ? likes + 1 : likes-1);
        setLiked(!liked)
    }
    return (
        <div className="likes-container">
            <IconButton
                color= "primary"
                sx={{ height: 1 }}
                className={`likes-button ${liked ? 'liked' : ''}`}
                onClick={
                    handleLikes
                }>
                    {liked ? <ThumbUp /> : <ThumbUpOffAltOutlinedIcon/>}
                
            </IconButton>
            <div className="likes-counter">
                {likes}
            </div>
        </div>
    );
}
