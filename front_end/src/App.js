import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import AddInstructor from "./components/AddInstructor";
import InstructorProfile from "./components/InstructorProfile";
import InstructorList from "./components/InstructorList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <ReactSearchBox placeholder="search" />
          <Link to="/">Home</Link>
          <Link to="/add">Add Instructor</Link>
          <Route path="/" exact component={InstructorList} />
          <Route path="/add" component={AddInstructor} />
        </div>
      </Router>
    );
  }
}

export default App;
