import Act from "./pages/act.js"
import Impact from "./pages/impact.js";
import Community from "./pages/community.js";
import Profile from "./pages/profil.js";
import React, {useState} from 'react'
import Signin from "./components/signin.js";

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import { useFrameLoop } from "./utils/FrameLoop.js";
// import { Anim } from "./utils/3DVerse.js";



function App(props){

  const [time,setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);
  let index = 0

  useFrameLoop((time, deltaTime)=>{

    // if(Math.floor(time/1000)%10){
    //   if(index){
    //     Anim(index)
    //     index +=1
    //   }else{
    //     Anim(index)
    //     index -=1
    //   }
    // }


    setTime(time);
    setDeltaTime(deltaTime)
    
  });


  return <Router>
      <Switch>

        <Route exact path="/">
          <Act /> 
        </Route>
        <Route path="/impact">
          <Impact /> 
        </Route>
        <Route path="/profil">
          <Profile/>
        </Route>
        <Route path="/community">
          <Community /> 
        </Route>
        <Route path="/signin">
          <Signin /> 
        </Route>
        
        
      </Switch>
  </Router>
}

export default App;

