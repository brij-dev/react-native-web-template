// App.js

import React, { Component } from "react";
import Components from "./components";
import Typography from "./screens/typography";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Components} />
          <Route path="/typography"  component={Typography} />
        </Switch>
      </Router>
  );
  }
}

export default App;
