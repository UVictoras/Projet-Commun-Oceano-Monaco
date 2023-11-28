import Act from "./pages/act.js"
import Impact from "./pages/impact.js";

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
      </Switch>
  </Router>
}

export default App;