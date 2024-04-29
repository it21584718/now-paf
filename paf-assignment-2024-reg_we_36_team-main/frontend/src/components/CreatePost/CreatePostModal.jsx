import React, { useState } from "react";
import {
  Modal,
  Box,
  Avatar,
  IconButton,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import VideoIcon from "@mui/icons-material/VideoCall";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //-------------------------------
  const handleSelectImages = async (event) => {
    setIsLoading(true);
    const files = event.target.files;
    const imageUrls = [];

    if (files.length > 3) {
      setIsLoading(false);
      alert("You can only upload up to 3 images at a time.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      if (i < 3) {
        const imageUrl = await uploadToCloudinary(files[i], "image");
        imageUrls.push(imageUrl);
      }
    }

    setSelectedImages(imageUrls);
    setIsLoading(false);

    // formik.setFieldValue("image", imageUrls);
    // If a video is already selected, reset it
    if (selectedVideos.length > 0) {
      setSelectedVideos([]);
      formik.setFieldValue("video", "");
    }
  };

  //----------------------------------------

  const handleSelectVideos = async (event) => {
    setIsLoading(true);
    const files = event.target.files;
    const videoUrls = [];

    if (files.length > 3) {
      setIsLoading(false);
      alert("You can only upload up to 3 videos at a time.");
      return;
    }

    let uploadCount = 0;

    //====================

    const handleMetadataLoaded = (file, video) => {
      return function () {
        window.URL.revokeObjectURL(video.src);
        if (video.duration <= 30) {
          uploadToCloudinary(file, "video").then((videoUrl) => {
            videoUrls.push(videoUrl);
            uploadCount++;

            if (
              uploadCount === files.length ||
              videoUrls.length === files.length
            ) {
              setSelectedVideos([...videoUrls]); // Update state after all uploads are completed
              setIsLoading(false); // Hide loading spinner when all uploads are completed
            }
          });
        } else {
          alert(
            `Video ${file.name} is longer than 30 seconds and will not be uploaded.`
          );

          uploadCount++;

          if (
            uploadCount === files.length ||
            videoUrls.length === files.length - 1
          ) {
            setIsLoading(false); // Hide loading spinner if all uploads are completed except for the current one
          }
        }
      };
    };

    //================

    for (let i = 0; i < files.length; i++) {
      if (i < 3) {
        const file = files[i];
        // Check video length
        const video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = handleMetadataLoaded(file, video);
        video.src = URL.createObjectURL(file);
      }
    }

    // Reset image selection if any images were previously selected
    if (selectedImages.length > 0) {
      setSelectedImages([]);
      formik.setFieldValue("image", "");
    }
  };

  //==============================
  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("formik values", values);
    },
  });

  return (
    <Modal
      open={open}
    //   onClose={handleClose}
    onClose={() => {
      if (
        selectedImages.length === 0 &&
        selectedVideos.length === 0
      ) {
        handleClose();
      } else if (
        window.confirm(
          "You have unsaved uploads. Are you sure you want to discard them?"
        )
      ) {
        handleClose();
      }
    }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">V.S. Gunasekara</p>
                <p className="text-sm">@it21320378</p>
              </div>
            </div>
            <textarea
              className="outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054] rounded-sm"
              placeholder="write caption..."
              name="caption"
              id=""
              onChange={formik.handleChange}
              value={formik.values.caption}
              rows="4"
            ></textarea>
            <div className="flex space-x-5 items-center mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImages}
                  multiple //select multiple images
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideos}
                  multiple
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <VideoIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>
            <div className="flex mt-5"> 
            {selectedImages.map((imageUrl, index) => (
              <div key={index} className="mr-2">
                <img className="h-[10rem]" src={imageUrl} alt="" />
              </div>
            ))}

            {selectedVideos.map((videoUrl, index) => (
              <div key={index} className="mr-2">
                <video controls className="h-[10rem]" src={videoUrl} alt="" />
              </div>
            ))}
            </div>

            <div className="flex w-full justify-end mt-2">
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "1.5rem" }}
              >
                Post
              </Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
