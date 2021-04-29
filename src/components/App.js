import React from "react";
import "../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import ActivityList from "./ActivityList";
import ParticipantsList from "./ParticipantsList";
import PriceList from "./PriceList";
import About from "./About";
import NavBar from "./NavBar";

// import ScrollReload from "./ScrollReload";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/random" component={Cards} />
          <Route exact path="/ActivityList" component={ActivityList} />
          <Route exact path="/ActivityList/:type" component={Cards} />
          <Route exact path="/ParticipantsList" component={ParticipantsList} />
          <Route
            exact
            path="/ParticipantsList/:participants"
            component={Cards}
          />
          <Route exact path="/PriceList" component={PriceList} />
          <Route exact path="/PriceList/:price" component={Cards} />
          <Route exact path="/About" component={About} />
          <Route exact path="/About/:about" component={Cards} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
