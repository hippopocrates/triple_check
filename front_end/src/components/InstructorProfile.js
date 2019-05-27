import React from "react";
import axios from "axios";

import {
  Image,
  Divider,
  Header,
  Segment,
  Button,
  Comment,
  Form,
  Rating
} from "semantic-ui-react";
import faker from "faker";
import StarRatings from "react-star-ratings";

import AddReview from "./AddReview";

const Review = props => (
  <Comment>
    <Comment.Avatar src={props.review.avatar} />
    <Comment.Content>
      <Comment.Author as="a">{props.review.author}</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
        <div>
          {" "}
          <Rating
            icon="star"
            defaultRating={props.review.rating}
            maxRating={5}
            disabled
          />
        </div>
      </Comment.Metadata>

      <Comment.Text>{props.review.review}</Comment.Text>
      <Comment.Text />
      <Comment.Text>Hourly Rate: {props.review.rate}</Comment.Text>
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
      reviews: [],
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
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

  instructorRateLowToHigh() {
    let rates = [];
    this.state.reviews.map(currentReview => {
      rates.push(currentReview.rate);
    });
    let highestRate = Math.max(...rates);
    let lowestRate = Math.min(...rates);
    return (
      <Header as="h3">
        Hourly Rate: {lowestRate} - {highestRate}
      </Header>
    );
  }

  instructorReviews() {
    return this.state.reviews.map((currentReview, i) => {
      return <Review review={currentReview} key={i} />;
    });
  }

  render() {
    return (
      <Segment>
        <Image
          src={this.state.avatar}
          style={{ marginRight: "30px" }}
          size="medium"
          floated="left"
          circular
        />
        <div>
          <Header as="h1">{this.state.name}</Header>
          <Header as="h2">{this.state.title}</Header>
          {this.instructorRateLowToHigh()}
          <StarRatings
            rating={this.state.rating}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <Divider clearing />
        <Comment.Group>
          <Header as="h2">Reviews</Header>
          <div>{this.instructorReviews()}</div>
          <Button
            onClick={this.toggleHidden.bind(this)}
            style={{ marginTop: "20px" }}
          >
            Add Review
          </Button>
          {!this.state.isHidden && (
            <AddReview instructorId={this.props.match.params.id} />
          )}
        </Comment.Group>
      </Segment>
    );
  }
}

export default InstructorProfile;
