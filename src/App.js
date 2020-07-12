import React from 'react';
import LandingPage from "./components/LandingPage";
import PrivateCloud from "./components/PrivateCloud";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// const history = useHistory();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/privatecloud" component={PrivateCloud} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
      {/* <LandingPage /> */}
      {/* <PrivateCloud /> */}
    </div> 
  );
}

export default App;
