import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container, Input, Menu, Segment } from "semantic-ui-react";

import AddInstructor from "./components/AddInstructor";
import InstructorProfile from "./components/InstructorProfile";
import InstructorList from "./components/InstructorList";

class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Container>
          <Segment inverted>
            <Menu inverted secondary>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              >
                <Link to="/">Triple Check</Link>
              </Menu.Item>

              <Menu.Item
                name="add"
                active={activeItem === "add"}
                onClick={this.handleItemClick}
              >
                <Link to="/add">Add Instructor</Link>
              </Menu.Item>

              <Menu.Item position="right">
                <Input className="icon" icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                position="right"
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              >
                <a href="#">Logout</a>
              </Menu.Item>
            </Menu>
          </Segment>
          <Route path="/" exact component={InstructorList} />
          <Route path="/add" component={AddInstructor} />
          <Route path="/users/:id" component={InstructorProfile} />
        </Container>
      </Router>
    );
  }
}

export default App;
