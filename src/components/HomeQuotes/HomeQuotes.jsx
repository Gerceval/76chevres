import React, { Component } from 'react';
import axios from 'axios';
import HomeQuotesList from './HomeQuotesList';

class HomeQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      quotes: []
     };
     this.getQuotes = this.getQuotes.bind(this);
     this.upVote = this.upVote.bind(this);
     this.downVote = this.downVote.bind(this);
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

  upVote(quoteId) {
    axios 
      .put(`/76/upvote/quote/${quoteId}/`)
      .then(this.getQuotes())
  }

  downVote(quoteId) {
    axios 
      .put(`/76/downvote/quote/${quoteId}/`)
      .then(this.getQuotes())
  }

  render() {
    const { quotes } = this.state;
    return (
      <HomeQuotesList quotes={quotes} upVote={this.upVote} downVote={this.downVote} />
    );
  }
}

export default HomeQuotes;