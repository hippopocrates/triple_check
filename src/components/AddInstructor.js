import React from "react";

class AddInstructor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      rate: 0,
      rating: 0,
      review: "",
      clicked: false
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

  handleAddClick = () => {
    this.setState({ clicked: true });
    console.log("clicked!");
  };

  render() {
    const clicked = this.state.clicked;
    let formDisplay = clicked ? (
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
    ) : (
      <div />
    );

    return (
      <div>
        <h3>can't find your instructor?</h3>
        <button className="btn btn-primary" onClick={this.handleAddClick}>
          add them!
        </button>
        {formDisplay}
      </div>
    );
  }
}

export default AddInstructor;
