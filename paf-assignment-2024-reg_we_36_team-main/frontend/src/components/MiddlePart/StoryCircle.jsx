import React from "react";
import { Avatar } from "@mui/material";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-5 cursor-pointer">
        <Avatar
          sx={{ width: "4rem", height: "4rem" }}
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"
        ></Avatar>
        <p>virajSg</p>
      </div>
    </div>
  );
};

export default StoryCircle;
