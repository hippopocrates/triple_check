import React from "react";
import axios from "axios";

import { Rating } from "semantic-ui-react";

const Instructor = props => (
  <div
    onClick={() => (window.location = `/users/${props.instructor._id}`)}
    className="card"
  >
    <div className="image">
      <img src={props.instructor.avatar} alt={props.instructor.name} />
    </div>

    <div className="content">
      <div className="header">{props.instructor.name}</div>
      <div className="meta">{props.instructor.title}</div>
    </div>
    <div className="extra">
      Rating:
      <Rating
        icon="star"
        defaultRating={props.instructor.rating}
        maxRating={5}
        disabled
      />
    </div>
  </div>
);

class InstructorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/instructors/")
      .then(res => {
        this.setState({ instructors: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  instructorList() {
    return this.state.instructors.map((currentInstructor, i) => {
      console.log("this.state.instructors", this.state.instructors);
      console.log("currentInstructor", currentInstructor);
      return <Instructor instructor={currentInstructor} key={i} />;
    });
  }
  render() {
    return (
      <div className="ui three stackable cards">{this.instructorList()}</div>
    );
  }
}

export default InstructorList;
