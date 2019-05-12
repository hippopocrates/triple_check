import React from "react";
import axios from "axios";
import faker from "faker";
import { Redirect } from "react-router-dom";

class AddInstructor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      // rate: 0,
      // rating: 0,
      avatar: "",
      // reviews: [],
      redirect: false
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newInstructor = {
      name: this.state.name,
      title: this.state.title,
      // rate: 0,
      // rating: 0,
      avatar: faker.image.avatar()
      // reviews: []
    };

    console.log(newInstructor);

    axios
      .post("http://localhost:4000/instructors/add", newInstructor)
      .then(res => {
        console.log("axios res.data add instructor", res.data);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      name: "",
      title: "",
      // rate: 0,
      // rating: 0,
      avatar: "",
      // reviews: [],
      redirect: true
    });
  };

  render() {
    let redirect;
    if (this.state.redirect) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="field">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>

          <button type="submit" className="ui button">
            submit
          </button>
        </form>
        {redirect}
      </div>
    );
  }
}

export default AddInstructor;
