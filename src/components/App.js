
import React from "react";
import './../styles/App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
       
            <Navigation />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default App
