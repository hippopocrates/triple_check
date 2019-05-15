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
import faker from "faker";

import AddReview from "./AddReview";

const Review = props => (
  <Comment>
    <Comment.Avatar src={faker.image.avatar()} />
    <Comment.Content>
      <Comment.Author as="a">{props.review.author}</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>{props.review.review}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

class InstructorProfile extends React.Component {
  constructor(props) {
    super(props);
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
    //wrap in function -- fetchInstructor()
    axios
      .get("http://localhost:4000/instructors/" + this.props.match.params.id)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({
          name: res.data.name,
          title: res.data.title,
          rate: res.data.rate,
          rating: res.data.rating,
          avatar: res.data.avatar,
          reviews: [...this.state.reviews, ...res.data.reviews]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  instructorReviews() {
    return this.state.reviews.map((currentReview, i) => {
      console.log(...this.state.reviews);
      console.log("this.state.reviews", this.state.reviews);
      console.log("currentReview", currentReview);
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

          <div style={{ marginBottom: "100px" }}>
            {this.instructorReviews()}
          </div>
          <AddReview instructorId={this.props.match.params.id} />
        </Comment.Group>
      </Segment>
    );
  }
}

export default InstructorProfile;
