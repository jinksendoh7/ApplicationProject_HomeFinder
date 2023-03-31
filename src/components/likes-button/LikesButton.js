import { useState } from "react";
import { ThumbUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../likes-button/LikesButton.css";


export default function LikesButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    return (
        <div className="likes-container">
            <IconButton
                color= "primary"
                sx={{ height: 1 }}
                className={`likes-button ${liked ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(likes + 1);
                    setLiked(true)
                }}>
                <ThumbUp />
            </IconButton>
            <div className="likes-counter">
                {likes}
            </div>
        </div>
    );
}
