import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { Avatar, Button, Tabs, Tab, Box, Card } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import ProfileModal from "./ProfileModal";
import UserStatusCard from "../../components/WorkoutStatus/UserStatusCard";

const Profile = () => {
  // const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tabs = [
    { value: "post", name: "Posts" },
    { value: "workoutStatus", name: "My Workout Status" },
    { value: "saved", name: "Saved" },
    { value: "share", name: "Shares" },
  ];

  const posts = [1, 1, 1, 1];
  const workoutStatuss= [1,1,1,1,1];
  const savedPosts= [1,1];
  const sharedPosts= [1];

  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md overflow-hidden">
        <div className="h-[15rem]">
          <img
            className="w-full h-full object-cover rounded-t-md"
            src="https://cdn.pixabay.com/photo/2019/08/28/14/58/body-4436985_1280.jpg"
            alt="profile banner"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem", border:"4px solid white" }}
            src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          {true ? (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="outlined"
              onClick={handleOpenProfileModal}
            >
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="pl-7">
          <div>
            <h1 className=" font-bold text-xl">V.S. Gunasekara</h1>
            <p>@it21320378</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>41 posts</span>
            <span>35 followers</span>
            <span>5 following</span>
          </div>
          <div className="pb-3">
            Fitness Enthusiast 🏋️‍♂️ & Coach 💪 Helping you achieve your fitness
            goals one rep at a time!
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[80%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value==="workoutStatus"?<div className="w-[31rem] flex items-center justify-center flex-wrap my-10 gap-2">
{workoutStatuss.map((item)=><div className={workoutStatuss.length % 2 !== 0 ? "mr-auto" : "ml-auto"}><UserStatusCard/></div>)}
            </div> : value === "saved" ? (
              <div className="space-y-5 w-[80%] my-10">
                {savedPosts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "share" ? (
              <div className="space-y-5 w-[80%] my-10">
                {sharedPosts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) :(
              ""
            )}
          </div>
        </section>
      </div>
      {/* profileModel */}
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
