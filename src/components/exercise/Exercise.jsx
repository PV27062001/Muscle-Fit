import React,{useState} from 'react'
import { Box } from "@mui/material";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
        <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Exercise