import React, { Component } from 'react';
import axios from 'axios';
import HomeQuotesList from './HomeQuotesList';
import TopTab from '../Navbar/TopTab';


class HomeQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      value: 0,
      cardExpanded: false,
      openedItem: null
    };
    this.getTopQuotes = this.getTopQuotes.bind(this);
    this.getRecentQuotes = this.getRecentQuotes.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.expandCard = this.expandCard.bind(this);
  }

  componentDidMount() {
    this.getTopQuotes();
  }

  getTopQuotes() {
    axios
      .get('/76/quotes/top')
      .then(res => res.data)
      .then(data => this.setState({ quotes: data }));
  }

  getRecentQuotes() {
    axios
      .get('/76/quotes/recent')
      .then(res => res.data)
      .then(data => this.setState({ quotes: data }))
  }

  upVote(quoteId) {
    if (this.props.userLogged || this.props.adminLogged) {
      axios
        .put(`/76/upvote/quote/${quoteId}/`)
        .then(this.getTopQuotes())
    }
  }

  downVote(quoteId) {
    if (this.props.userLogged || this.props.adminLogged) {
      axios
        .put(`/76/downvote/quote/${quoteId}/`)
        .then(this.getTopQuotes())
    }
  }

  deleteQuote(quoteId) {
    if (this.props.adminLogged) {
      axios
        .delete(`76/quote/${quoteId}`)
        .then(this.getTopQuotes())
    }
  }

  expandCard(quoteId, openedItem) {
    const { cardExpanded } = this.state;
    this.setState({
      cardExpanded: !cardExpanded,
      openedItem: quoteId
    })
  }

  render() {
    const { quotes, cardExpanded, openedItem } = this.state;
    const { adminLogged } = this.props
    return (
      <>
        <TopTab getTopQuotes={this.getTopQuotes} getRecentQuotes={this.getRecentQuotes} />
        <HomeQuotesList
          quotes={quotes}
          upVote={this.upVote}
          downVote={this.downVote}
          delete={this.deleteQuote}
          adminLogged={adminLogged}
          expandCard={this.expandCard}
          cardExpanded={cardExpanded} 
          openedItem={openedItem}
          />
      </>
    );
  }
}

export default HomeQuotes;