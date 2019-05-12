import React from "react";
import axios from "axios";

import {
  Image,
  Divider,
  Header,
  Segment,
  Button,
  Comment,
  Form
} from "semantic-ui-react";

import AddReview from "./AddReview";

const Review = props => (
  <Comment>
    <Comment.Author as="a">{props.review.author}</Comment.Author>
    <Comment.Text>{props.review.review}</Comment.Text>
  </Comment>
);

class InstructorProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      name: "",
      title: "",
      rate: 0,
      rating: 0,
      avatar: "",
      reviews: []
    };
  }

  componentDidMount() {
    console.log("instructor profile component did mount");
    axios
      .get("http://localhost:4000/instructors/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          title: res.data.title,
          rate: res.data.rate,
          rating: res.data.rating,
          avatar: res.data.avatar
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/instructors/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          reviews: [...this.state.reviews, res.data.reviews]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  instructorReviews() {
    return this.state.reviews.map((currentReview, i) => {
      return <Review review={currentReview} key={i} />;
    });
  }

  render() {
    return (
      <Segment>
        <Image src={this.state.avatar} size="medium" floated="left" circular />

        <Divider clearing />

        <Comment.Group>
          <Header as="h2">Reviews</Header>

          {this.instructorReviews()}
          <AddReview instructorId={this.props.match.params.id} />
        </Comment.Group>
      </Segment>
    );
  }
}

export default InstructorProfile;
