import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
 import ExerciseDetail from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Bmi2 from "./pages/Bmi2/Bmi2";
import Exercise from "./pages/Exercise";
import Nutrition from "./pages/Nutrition";
import RecipeSearch from "./pages/RecipeSearch";


const App = () => {
  return (

    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <br></br>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Exercise" element={<Exercise />} />
          {<Route path="/exercise/:id" element={<ExerciseDetail />} /> }
          <Route path="/Bmi2" element={<Bmi2 />}/>
          <Route exact path="/nutrition" element={<Nutrition />} /> 
          <Route exact path="/RecipeSearch" element={<RecipeSearch />} /> 
      </Routes></Box>
  );
};

export default App;
