import React, {useEffect, useState} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
 import ExerciseDetail from "./components/exercise/ExerciseDetails";
import Home from "./components/home/Home";
import Bmi2 from "./components/bmi/Bmi2";
import Exercise from "./components/exercise/Exercise";
import Nutrition from "./components/nutrition/Nutrition";
import RecipeSearch from "./components/recipesearch/RecipeSearch";
import FlashScreen from "./components/flashscreen/FlashScreen";


const App = () => {

    const [showFlashScreen, setShowFlashScreen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFlashScreen(false);
        }, 3000); // Show flash screen for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    if (showFlashScreen) {
        return <FlashScreen />;
    }
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
