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
      review: "",
      date: "",
      time: ""
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

  setDate = () => {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let finalDate = monthNames[month] + " " + date + ", " + year;

    this.setState({
      date: finalDate
    });

    return finalDate;
  };

  setTime = () => {
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();

    let finalTime = "";
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour > 12) {
      hour -= 12;
      finalTime = hour + ":" + minute + "pm";
    } else {
      finalTime = hour + ":" + minute + "am";
    }

    this.setState({
      time: finalTime
    });

    return finalTime;
  };

  onSubmit = e => {
    e.preventDefault();

    const params = {
      newReview: {
        author: this.state.author,
        avatar: faker.image.avatar(),
        rating: this.state.rating,
        rate: this.state.rate,
        review: this.state.review,
        date: this.setDate(),
        time: this.setTime()
      },
      id: this.props.instructorId
    };

    this.props.updateInstructorReviews(params.newReview);

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
