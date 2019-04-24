import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Instructor = props => (
  <div className="card">
    <div className="image">
      <img src={props.instructor.avatar} alt={props.instructor.name} />
    </div>

    <div className="content">
      <div className="header">{props.instructor.name}</div>
      <div className="meta">{props.instructor.title}</div>

      <div className="description">{props.instructor.review}</div>
    </div>
    <div className="extra">
      Rating:
      <div className="ui star rating" data-rating="3" data-max-rating="5" />
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
