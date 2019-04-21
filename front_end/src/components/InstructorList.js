import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Instructor = props => (
  <tr>
    <td>{props.instructor.name}</td>
    <td>{props.instructor.title}</td>
    <td>{props.instructor.rate}</td>
    <td>{props.instructor.rating}</td>
    <td>{props.instructor.review}</td>
  </tr>
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
      .get("http:localhost:4000/instructors/")
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
      <div>
        <h3>Instructor List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Rate</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          // <tbody>{this.instructorList()}</tbody>
        </table>
      </div>
    );
  }
}

export default InstructorList;
