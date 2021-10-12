import React from "react";
import {Redirect,useHistory,useLocation ,Route , Switch} from 'react-router-dom'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3 } from "./pages/Projects";
function App() {
  const location= useLocation()
  const history= useHistory()
  return (
<Switch>
        <Route exact path='/'  component={Home}/>
        <Route exact path='/projet1'  component={Project1}/>
        <Route exact path='/projet2'  component={Project2}/>
        <Route exact path='/projet3'  component={Project3}/>
        <Route exact path='/contact'  component={Contact}/>
        <Redirect to='/' />
</Switch>

  );
}

export default App;
