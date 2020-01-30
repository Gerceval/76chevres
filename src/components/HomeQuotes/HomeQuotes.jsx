import React, { Component } from 'react';
import axios from 'axios';
import HomeQuotesList from './HomeQuotesList';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


class HomeQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      value: 0
    };
    this.getQuotes = this.getQuotes.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
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

  deleteQuote(quoteId) {
    axios
      .delete(`76/quote/${quoteId}`)
      .then(this.getQuotes())
  }

  handleTabChange(event, newValue) {
    this.setState({ value: newValue })
  };

  render() {
    const { quotes, value } = this.state;
    return (
      <>
        <Paper square>
          <Tabs
            value={value}
            onChange={this.handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab icon={<TrendingUpIcon />} aria-label="phone" />
            <Tab icon={<AccessTimeIcon />} aria-label="favorite" />
          </Tabs>
        </Paper>
        <HomeQuotesList quotes={quotes} upVote={this.upVote} downVote={this.downVote} delete={this.deleteQuote} />
      </>
    );
  }
}

export default HomeQuotes;