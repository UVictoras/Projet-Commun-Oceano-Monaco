import Act from "./pages/act.js"
import Impact from "./pages/impact.js";
import Community from "./pages/community.js";
import Profile from "./pages/profil.js";

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"



function App(props){
  return <Router>
      <Switch>
        <Route exact path="/">
          <Act /> 
        </Route>
        <Route exact path="/impact">
          <Impact /> 
        </Route>
        <Route exact path="/pages/profil.js">
          <Profile/>
        </Route>
        <Route exact path="/community">
          <Community /> 
        </Route>
      </Switch>
  </Router>
}

export default App;