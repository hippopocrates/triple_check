import PropTypes from "prop-types";
import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import axios from "axios";
import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";

const resultRenderer = ({ name }) => <Label content={name} />;

resultRenderer.propTypes = {
  name: PropTypes.string
};

const initialState = {
  isLoading: false,
  results: [],
  value: "",
  instructors: []
};

export default class SearchExampleStandard extends Component {
  state = initialState;

  componentDidMount() {
    axios
      .get("http://localhost:4000/instructors")
      .then(res => {
        this.setState({ instructors: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name });
    window.location = `/users/${result._id}`;
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => {
        return re.test(result.name);
      };

      this.setState({
        isLoading: false,
        results: _.filter(this.state.instructors, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
