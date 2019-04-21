import React from "react";
import axios from "axios";

class AddInstructor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      rate: 0,
      rating: 0,
      review: ""
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
      review: this.state.review
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
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="rate"
              className="form-control"
              value={this.state.rate}
              onChange={this.onChangeRate}
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: "10px" }}>rating:</label>

            <input
              type="number"
              placeholder="rating"
              className="form-control"
              min="1"
              max="5"
              style={{ width: "60px", display: "inline" }}
              value={this.state.rating}
              onChange={this.onChangeRating}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="review"
              className="form-control"
              value={this.state.review}
              onChange={this.onChangeReview}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddInstructor;
