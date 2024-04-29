import React from "react";
import { Grid, Card } from "@mui/material";
import imagex from "../../assets/imagex.png";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img className="h-full w-full" src={imagex} alt="Login Banner" />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">FitnessFeed</h1>
                <p className="text-center text-sm w-[70%]">
                  Empowering Fitness, Inspiring Lives: <br /> Share Your
                  Journey, Shape Your World
                </p>
              </div>

              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </Routes>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
