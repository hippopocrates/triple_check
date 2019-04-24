import React from "react";
import axios from "axios";
import faker from "faker";

class AddInstructor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      rate: 0,
      rating: 0,
      review: "",
      avatar: ""
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

  onChangeRate = e => {
    this.setState({
      rate: e.target.value
    });
  };

  onChangeRating = e => {
    this.setState({
      rating: e.target.value
    });
  };

  onChangeReview = e => {
    this.setState({
      review: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.name);
    console.log(this.state.title);
    console.log(this.state.rate);
    console.log(this.state.rating);
    console.log(this.state.review);

    const newInstructor = {
      name: this.state.name,
      title: this.state.title,
      rate: this.state.rate,
      rating: this.state.rating,
      review: this.state.review,
      avatar: faker.image.avatar()
    };

    axios
      .post("http://localhost:4000/instructors/add", newInstructor)
      .then(res => {
        console.log("axios res.data", res.data);
      });

    this.setState = {
      name: "",
      title: "",
      rate: "",
      rating: 0,
      review: ""
    };
  };

  render() {
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

          <div className="field">
            <label>Hourly Rate</label>
            <input
              type="number"
              value={this.state.rate}
              onChange={this.onChangeRate}
            />
          </div>

          <div className="field">
            <label style={{ marginRight: "10px" }}>Rating</label>

            <input
              type="number"
              placeholder="rating"
              min="1"
              max="5"
              style={{ width: "60px", display: "inline" }}
              value={this.state.rating}
              onChange={this.onChangeRating}
            />
          </div>

          <div className="field">
            <label>Review</label>
            <textarea
              rows="2"
              type="text"
              placeholder="Review"
              value={this.state.review}
              onChange={this.onChangeReview}
            />
          </div>

          <button type="submit" className="ui button">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddInstructor;
