import React from "react";

//Components
import Config from "./components/Config";
import Console from "./components/Console";
import Home from "./components/Home";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./data/store";

//Leaflet
import "leaflet/dist/leaflet.css";
import Data from "./components/Data";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Data />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/map" exact component={Map} />
          <Route path="/console" exact component={Console} />
          <Route path="/config" exact component={Config} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
