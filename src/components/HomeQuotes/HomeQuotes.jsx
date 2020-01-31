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
      openedItem: null,
      sortedByTop: false,
      sortedByRecent: false
    };
    this.getTopQuotes = this.getTopQuotes.bind(this);
    this.getRecentQuotes = this.getRecentQuotes.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.expandCard = this.expandCard.bind(this);
  }

  componentDidMount() {
    const { quotes } = this.state;
    if (quotes.length === 0) {
      this.getTopQuotes();
      this.setState({ sortedByTop: true })
    }
  }

  getTopQuotes() {
    axios
      .get('/76/quotes/top')
      .then(res => res.data)
      .then(data => this.setState({ quotes: data, sortedByTop: true, sortedByRecent: false }));
  }

  getRecentQuotes() {
    axios
      .get('/76/quotes/recent')
      .then(res => res.data)
      .then(data => this.setState({ quotes: data, sortedByRecent: true, sortedByTop: false }))
  }

  upVote(quoteId) {
    const { sortedByRecent } = this.state;
    const { handleErrorPrivilege, adminLogged, userLogged } = this.props;
    if (userLogged || adminLogged) {
      axios
        .put(`/76/upvote/quote/${quoteId}/`)
        .then(
          sortedByRecent ? this.getRecentQuotes : this.getTopQuotes())
    } else handleErrorPrivilege()
  }

  downVote(quoteId) {
    const { sortedByRecent } = this.state;
    const { handleErrorPrivilege, adminLogged, userLogged } = this.props;
    if (userLogged || adminLogged) {
      axios
        .put(`/76/downvote/quote/${quoteId}/`)
        .then(
          sortedByRecent ? this.getRecentQuotes : this.getTopQuotes()
        )
    } else handleErrorPrivilege()
  }

  deleteQuote(quoteId) {
    const { sortedByRecent } = this.state;
    if (this.props.adminLogged) {
      axios
        .delete(`76/quote/${quoteId}`)
        .then(
          sortedByRecent ? this.getRecentQuotes : this.getTopQuotes()
        )
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