import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import AddInstructor from "./components/AddInstructor";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <ReactSearchBox placeholder="search" />
          <AddInstructor />
        </div>
      </Router>
    );
  }
}

export default App;
