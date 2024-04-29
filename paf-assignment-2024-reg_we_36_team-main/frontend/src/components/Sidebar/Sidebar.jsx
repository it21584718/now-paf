import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Divider, Avatar, Button, Menu, MenuItem, Card } from "@mui/material";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      // navigate(`/profile/${auth.user?.id}`)
      navigate(`/profile/:id`);
    } else {
      navigate(item.path);
    }
  };

  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div className="">
          <span className="logo font-bold text-xl">FitnessFeed</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div
              onClick={() => handleNavigate(item)}
              className="flex space-x-3 items-center cursor-pointer"
            >
              {item.icon}
              <p className="text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
            <div>
              <p className="font-bold" style={{ fontSize: "14px" }}>
                PAF GROUP 36
              </p>
              <p className="opacity-70" style={{ fontSize: "13px" }}>
                @reg_we_36
              </p>
            </div>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertTwoToneIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div style={{ width: "100px", fontSize: "12px" }}>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </div>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
