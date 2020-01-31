import React, { Component } from 'react';
import axios from 'axios';
import EditMyQuotes from './EditMyQuotes';
import './profile.css';

class MyQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      openedItem: null
    };
    this.getMyQuotes = this.getMyQuotes.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.editQuote = this.editQuote.bind(this);
    this.remover = this.remover.bind(this);
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

  deleteQuote(quoteId) {
    axios
      .delete(`76/quote/${quoteId}`)
      .then(this.getMyQuotes())
  }

  editQuote(quoteId) {
    this.setState({ 
      isEditing: 'isEditing', 
      openedItem: quoteId })
  }

  remover() {
    this.setState({ isEditing: false, openedItem: null })
    this.getMyQuotes();
  }

  render() {
    const { quotes, isEditing, openedItem } = this.state;
    const { userLogged } = this.props;
    return (
      <div>
        <h2>Editer mes quotes</h2>
        <div className="profile-editmyquotes">
          {quotes ?
            <EditMyQuotes
              quotes={quotes}
              delete={this.deleteQuote}
              isEditing={isEditing}
              editQuote={this.editQuote}
              userLogged={userLogged}
              openedItem={openedItem}
              remover={this.remover}
            />
            :
            <p>0 quotes</p>}
        </div>
      </div>
    )
  }
}

export default MyQuotes;