import React, { Component } from 'react';
import axios from 'axios';

class HomeQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      quotes: []
     };
     this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes() {
    axios
      .get('/76/quotes')
      .then(res => res.data)
      .then(data => this.setState({ quotes: data }));
  }

  render() {
    return (
      <p>lol</p>
    );
  }
}

export default HomeQuotes;