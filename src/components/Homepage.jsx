import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomeQuotes from './HomeQuotes/HomeQuotes';
import AddQuoteButton from './AddQuote/AddQuoteButton';
import AddQuote from './AddQuote/AddQuote';
import './homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="render-homepage">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <div className="homepage">
                <div className="homepage-addquote-button">
                  <AddQuoteButton />
                </div>
                <HomeQuotes />
              </div>
            )}
          />
          <Route
            path="/addquote"
            render={() => (
              <>
                <AddQuote />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Homepage;