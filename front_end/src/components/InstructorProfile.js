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

class InstructorProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      name: "",
      title: "",
      rate: 0,
      rating: 0,
      review: "",
      avatar: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/instructors/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          title: res.data.title,
          rate: res.data.rate,
          rating: res.data.rating,
          review: res.data.review,
          avatar: res.data.avatar
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Segment>
        <Image src={this.state.avatar} size="medium" floated="left" circular />

        <Divider clearing />

        <Comment.Group>
          <Header as="h2">Reviews</Header>

          <Comment />
        </Comment.Group>
      </Segment>
    );
  }
}

export default InstructorProfile;
