import React from "react";

class AddInstructor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      rate: "",
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

    this.setState = {
      name: "",
      title: "",
      rate: "",
      rating: 0,
      date: Date,
      review: ""
    };
  };

  render() {
    return (
      <div>
        <h3>can't find your instructor?</h3>
        <button>add here</button>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <br />
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <br />
          <input
            type="text"
            placeholder="rate"
            value={this.state.rate}
            onChange={this.onChangeRate}
          />
          <br />
          <input
            type="number"
            placeholder="rating"
            min="1"
            max="5"
            style={{ width: "60px" }}
            value={this.state.rating}
            onChange={this.onChangeRating}
          />
          <br />
          <input
            type="text"
            placeholder="review"
            value={this.state.review}
            onChange={this.onChangeReview}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddInstructor;
