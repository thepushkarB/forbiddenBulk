import React from "react";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/trainerAlgo";


function App() {

  const [workout, setWorkout] = useState(null);

  //? nagivation
  useEffect(() => {
    if (workout) {
      window.location.href = "#workout";
    }
  }, [workout]);

  //* clicked value state of buttons
    //? 01 Pick your poison -> workout type - Obj: WORKOUTS
    const [poison, setPoison] = useState("individual");

    //? 02 Lock on targets -> select muscle grp - Obj: WORKOUTS > muscle grps
    const [muscles, setMuscles] = useState([]);

    //? 03 Become Juggernaut -> select goal - Obj: SCHEMES
    const [goal, setGoal] = useState("strength_power");
  //

  function updateWorkout() {
    if(muscles.length <= 0) {
      return;
    }
    
    /* 
    * let newWorkout = generateWorkout(poison, muscles, goal);
      
      ? Why use `{poison, muscles, goal}` instead of `(poison, muscles, goal)` ?
          Order doesn’t matter – avoids mistakes when passing arguments.
          More readable – instantly see which parameter is which.
          Easier to extend – adding new parameters doesn’t break existing function calls.
          Default values work better – prevents undefined errors without needing extra code.
    */
    let newWorkout = generateWorkout({poison, muscles, goal});

    console.log(newWorkout);
    setWorkout(newWorkout);
    // console.log("hii from App.jsx>updateWorkout()");
  }

  return (
    <main className="min-h-screen flex flex-col font-mono bg-gradient-to-r from-slate-800 to-slate-950 text-sm sm:text-base">
      <Hero />
      {/* //todo: do condition rendering, when 'Hell yeah!' Button is clicked on Hero.jsx render <Generator/> & redirect  */}
      <Generator 
        poison={poison} setPoison={setPoison}
        muscles={muscles} setMuscles={setMuscles}
        goal={goal} setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout ? <Workout workout={workout}/> : null}
      {/* {workout && <Workout workout={workout}/>} */}
    </main>
  )
}

export default App
