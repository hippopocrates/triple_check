import React from "react";
import axios from "axios";

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
      <div>
        <h1> instructor profile</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default InstructorProfile;
