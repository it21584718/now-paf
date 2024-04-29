import React from "react";
import { Grid } from "@mui/material";
import { useLocation, Routes, Route } from "react-router-dom";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import WorkoutStatus from "../../components/WorkoutStatus/WorkoutStatus";
import CreateWorkoutStatus from "../../components/WorkoutStatus/CreateWorkoutStatus";
import CreateWorkoutPlan from "../../components/CreateWorkoutPlan/CreateWorkoutPlan";
import CreateMealPlan from "../../components/CreateMealPlan/CreateMealPlan";
import Profile from "../Profile/Profile";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeRight from "../../components/HomeRight/HomeRight";
import Notifications from "../../components/Notifications/Notifications";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={2.5}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        <Grid
          item
          className="px-5 flex justify-center"
          xs={12}
          lg={location.pathname === "/" ? 6.8 : 9}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/status" element={<WorkoutStatus />} /> {/* Anjana */}
            <Route
              path="/create-status"
              element={<CreateWorkoutStatus />}
            />{" "}
            {/* Anjana */}
            <Route
              path="/create-workout-plan"
              element={<CreateWorkoutPlan />}
            />{" "}
            {/* Wije */}
            <Route path="/create-meal-plan" element={<CreateMealPlan />} />{" "}
            {/* Hasri */}
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        {location.pathname === "/" && (
          <Grid item lg={2.7} relative>
            <div className="sticky top-0 w-full">
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
