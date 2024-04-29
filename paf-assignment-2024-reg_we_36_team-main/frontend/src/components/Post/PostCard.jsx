import React, { useState } from "react";
import { red } from "@mui/material/colors";
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const PostCard = ({item}) => {
const [showComments, setShowComments]=useState(false);
const handleShowComment=()=>setShowComments(!showComments);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="V.S. Gunasekara"
        subheader="@it21320378"
      />

      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2017/11/13/15/09/biceps-2945912_1280.jpg"
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Biceps, Triceps, Fit image. Free for use.
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton color="error">
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton onClick={handleShowComment}>{<ChatBubbleIcon />}</IconButton>
          <IconButton color="primary">{<ShareIcon />}</IconButton>
        </div>

        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
      {showComments && <section>
        <div className="flex items-center space-x-5 mx-3 my-5">
          <Avatar sx={{}} />

          <input onKeyPress={(e)=>{
            if(e.key==="Enter"){
              console.log("enter pressed ---", e.target.value)
            }
          }}
            placeholder="write your comment..."
            className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
            type="text"
          />
        </div>
        <Divider/>
        <div className="mx-3 space-y-2 my-5 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-5">
              <Avatar sx={{height:"2rem", width:"2rem", forntSize:".8rem"}}>
                    P
              </Avatar>
              <p>nice image</p>
            </div>

          </div>
        </div>
      </section>}
    </Card>
  );
};

export default PostCard;
