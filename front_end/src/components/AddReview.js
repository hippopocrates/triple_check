import React from "react";
import axios from "axios";
import faker from "faker";
import { Button, Form } from "semantic-ui-react";

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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

    const newReview = {
      name: this.state.name,
      rating: this.state.rating,
      review: this.state.review,
      avatar: faker.image.avatar()
    };

    axios
      .post(
        "http://localhost:4000/instructors/" + this.props.match.params.id,
        newReview
      )
      .then(res => {
        console.log("axios res.data newReview:", res.data);
      });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Name:</label>
          <input
            value={this.state.name}
            onChange={this.state.onChangeName}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Rating:</label>
          <input
            value={this.state.rating}
            onChange={this.state.onChangeRating}
            placeholder="Rating"
          />
        </Form.Field>
        <Form.Field
          value={this.state.review}
          onChange={this.state.onChangeReview}
          control={TextArea}
          label="Review"
          placeholder="Tell us about your experience..."
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default AddReview;
