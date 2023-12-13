import Act from "./pages/act.js"
import Impact from "./pages/impact.js";
import Community from "./pages/community.js";
import Profile from "./pages/profil.js";
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import { useFrameLoop } from "./utils/FrameLoop.js";
import { Anim } from "./utils/3DVerse.js";
import FirstPage from "./pages/firstPage.js";
import LoadingScreen from "./pages/loadingScreen.js";
import Signin from "./pages/signin.js";
import Signup from "./pages/signup.js";
import Shop from "./pages/shop.js";



function App(props){

  const [time,setTime] = useState(0);
  const [deltaTime, setDeltaTime] = useState(0);
  let index = 0

  useFrameLoop((time, deltaTime)=>{


    var labelElements = document.getElementsByClassName('label');

    // Check if the element is found before attempting to modify its style
    for (var i = 0; i < labelElements.length; i++) {
        labelElements[i].style.backgroundImage = "url('img/avatar.png')";
    }

    setTime(time);
    setDeltaTime(deltaTime)
    
  });


  return <Router>
      <Switch>
        <Route exact path="/">
          <FirstPage /> 
        </Route>
        {/* <Route exact path="/loading">
          <LoadingScreen /> 
        </Route> */}
        <Route path ="/act">
          <Act/>
        </Route>
        <Route path ="/signin">
          <Signin/>
        </Route>
        <Route path ="/signup">
          <Signup/>
        </Route>
        <Route path ="/shop">
          <Shop/>
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
        
        
      </Switch>
  </Router>
}

export default App;

