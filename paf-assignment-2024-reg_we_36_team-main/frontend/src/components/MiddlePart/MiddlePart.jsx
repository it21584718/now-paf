import React, { useState } from "react";
import { Avatar, Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";

const story = [1, 1, 1, 1, 1];
const posts = [1, 1, 1, 1, 1];

const MiddlePart = () => {
  const [openCreatePostModal, setOpenCreatePostModal]=useState(false);

  const handleCloseCreatePostModal=()=>setOpenCreatePostModal(false);
  const handleOpenCreatePostModal=()=>{
    setOpenCreatePostModal(true);
    console.log("open post model...", openCreatePostModal);
  }
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-5 cursor-pointer">
          <Avatar sx={{ width: "4rem", height: "4rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>Status</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>
      {/* section2 */}
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
          onClick={handleOpenCreatePostModal}
            readOnly
            type="text"
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
          />
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon/>
            </IconButton>
            <span>Pictures</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon/>
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon/>
            </IconButton>
            <span>Write Article</span>
          </div>

        </div>
      </Card>
      {/* section3 */}
      <div className="mt-5 space-y-5 mb-5">
          {posts.map((item)=><PostCard/>)}
      </div>
      <div>
        <CreatePostModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}/>
      </div>
    </div>
  );
};

export default MiddlePart;
