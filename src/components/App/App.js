import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../Home/Home.js";
import Gallery1 from "../Gallery1/Gallery1.js";
import Gallery2 from "../Gallery2/Gallery2.js";
import Gallery3 from "../Gallery3/Gallery3.js";
import Gallery4 from "../Gallery4/Gallery4.js";
import Gallery5 from "../Gallery5/Gallery5.js";
import Gallery6 from "../Gallery6/Gallery6.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/react-photo-gallery">React Photo Gallery</Link></li>
          <li><Link to="/pure-react-carousel">Pure React Carousel</Link></li>
          <li><Link to="/react-responsive-carousel">React Responsive Carousel</Link></li>
          <li><Link to="/nuka-carousel">Nuka Carousel</Link></li>
          <li><Link to="/react-grid-gallery">React Grid Gallery</Link></li>
          <li><Link to="/react-image-gallery">React Image Gallery</Link></li>
        </ul>
        </div>
        
        <div>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/react-photo-gallery" component={Gallery1} />
      <Route exact path="/pure-react-carousel" component={Gallery2} />
      <Route exact path="/react-responsive-carousel" component={Gallery3} />
      <Route exact path="/nuka-carousel" component={Gallery4} />
      <Route exact path="/react-grid-gallery" component={Gallery5} />
      <Route exact path="/react-image-gallery" component={Gallery6} />


  </div>
</div>
  </Router>
    );
  }
}

export default App;
