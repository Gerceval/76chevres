import React, { Component } from 'react';
import HomeQuotes from './HomeQuotes/HomeQuotes';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <HomeQuotes />
    );
  }
}

export default Homepage;