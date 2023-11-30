import Act from "./pages/act.js"
import Impact from "./pages/impact.js";
import Community from "./pages/community.js";
import Signup from "./pages/signup.js";
import Signin from "./pages/signin.js";
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
        <Route exact path="/community">
          <Community /> 
        </Route>
        <Route exact path="/signup">
          <Signup /> 
        </Route>
        <Route exact path="/signin">
          <Signin /> 
        </Route>
      </Switch>
  </Router>
}

export default App;