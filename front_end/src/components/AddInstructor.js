import React from "react";
import axios from "axios";
import faker from "faker";

class AddInstructor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      avatar: "",
      success: false
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value,
      success: false
    });
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value,
      success: false
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newInstructor = {
      name: this.state.name,
      title: this.state.title,
      rating: 0,
      avatar: faker.internet.avatar()
    };

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
      rating: 0,
      avatar: "",
      success: true
    });
  };

  render() {
    let success;
    if (this.state.success) {
      success = (
        <p style={{ color: "green", marginTop: "7px" }}>
          instructor successfully added!
        </p>
      );
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
        {success}
      </div>
    );
  }
}

export default AddInstructor;
