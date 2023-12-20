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

import { Anim, createImgTag } from "./utils/3DVerse.js";
import FirstPage from "./pages/firstPage.js";
import LoadingScreen from "./pages/loadingScreen.js";
import Signin from "./pages/signin.js";
import Signup from "./pages/signup.js";
import Shop from "./pages/shop.js";
import Threadcontent from "./components/threadcontent.js";


const SDK3DVerse = window.SDK3DVerse;

function App(props){

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

