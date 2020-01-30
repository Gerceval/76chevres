import React, { Component } from 'react';
import axios from 'axios';

class MyQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.getMyQuotes = this.getMyQuotes.bind(this);
  }

  componentDidMount() {
    this.getMyQuotes();
  }

  getMyQuotes() {
    const { userId } = this.props;
    axios
      .get(`/76/quotes/user/${userId}`)
      .then(res => res.data)
      .then(data => this.setState({ quotes: data }));
  }

  render() {
    return (
      <p>yo</p>
    );
  }
}

export default MyQuotes;