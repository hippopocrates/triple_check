import React from "react";
import axios from "axios";
import faker from "faker";
import { Button, Form, TextArea } from "semantic-ui-react";

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      avatar: "",
      rating: 0,
      rate: 0,
      review: ""
    };
  }

  onChangeAuthor = e => {
    this.setState({
      author: e.target.value
    });
  };

  onChangeRating = e => {
    this.setState({
      rating: e.target.value
    });
  };

  onChangeRate = e => {
    this.setState({
      rate: e.target.value
    });
  };

  onChangeReview = e => {
    this.setState({
      review: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const params = {
      newReview: {
        author: this.state.author,
        avatar: faker.image.avatar(),
        rating: this.state.rating,
        rate: this.state.rate,
        review: this.state.review
      },
      id: this.props.instructorId
    };

    axios
      .patch(
        "http://localhost:4000/instructors/" + this.props.instructorId,
        params
      )
      .then(res => {
        console.log("axios res.data newReview:", res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form style={{ marginTop: "20px" }} onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Name:</label>
          <input
            value={this.state.author}
            onChange={this.onChangeAuthor}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Rating:</label>
          <input
            value={this.state.rating}
            onChange={this.onChangeRating}
            placeholder="Rating"
          />
        </Form.Field>
        <Form.Field>
          <label>Hourly Rate:</label>
          <input
            value={this.state.rate}
            onChange={this.onChangeRate}
            placeholder="Hourly Rate"
          />
        </Form.Field>
        <Form.Field
          value={this.state.review}
          onChange={this.onChangeReview}
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
