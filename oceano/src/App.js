import Act from "./pages/act.js"
import Impact from "./pages/impact.js";
import Community from "./pages/community.js";
import Test from "./pages/test.js"
import Profile from "./pages/profil.js";
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import { useFrameLoop } from "./utils/FrameLoop.js";
import { Anim } from "./utils/3DVerse.js";
import { createImgTag } from "./utils/3DVerse.js";
import FirstPage from "./pages/firstPage.js";
import LoadingScreen from "./pages/loadingScreen.js";
import Signin from "./pages/signin.js";
import Signup from "./pages/signup.js";
import Shop from "./pages/shop.js";
import Threadcontent from "./components/threadcontent.js";



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

    var labelElements = document.getElementsByClassName('label');

    // Check if the element is found before attempting to modify its style

    if (labelElements[0])
    {
      for (var i = 0; i < labelElements.length; i++) 
      {
        //labelElements[i].style.backgroundImage = "url('img/avatar.png')";
        /*
        labelElements[i].addEventListener('mouseenter', function() {
          var newParagraph = document.createElement('p');
          newParagraph.textContent = '342';
          newParagraph.classList.add('label-text');

          var referenceElement = document.getElementById('label');

          referenceElement.parentNode.insertBefore(newParagraph, referenceElement);
        })
        labelElements[i].addEventListener('mouseleave'), function() {
          return;
        }*/
        labelElements[i].innerHTML = '';
      }
    }
    createImgTag();

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
        <Route exact path="/test">
          <Test /> 
        </Route>
        <Route exact path="/threadcontent">
          <Threadcontent /> 
        </Route>
        
        
      </Switch>
  </Router>
}

export default App;

