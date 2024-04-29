import * as React from "react";
import {
  Avatar,
  Button,
  Box,
  Modal,
  TextField,
  IconButton,
} from "@mui/material";
// import { updateProfileAction } from "../../Redux/Auth/auth.action";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
// import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overFlow: "scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  //   const dispatch=useDispatch();

  //   const handleSubmit = (values) => {
  //     console.log("values", values);
  //   };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // onSubmit:(values,)=>{
    //     console.log("values",values)
    //     dispatch(updateProfileAction(values))
    // },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div>
              <div className="h-[14rem]">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src="https://cdn.pixabay.com/photo/2019/08/28/14/58/body-4436985_1280.jpg"
                  alt="profile banner"
                />
              </div>
              <div className="pl-5 h-[6rem]">
                <Avatar
                  className="transform -translate-y-24"
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    border: "4px solid white",
                  }}
                  src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
            <div className="space-y-3 ">
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                // value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                // value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
