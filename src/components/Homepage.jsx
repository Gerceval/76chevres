import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomeQuotes from './HomeQuotes/HomeQuotes';
import AddQuoteButton from './AddQuote/AddQuoteButton';
import AddQuote from './AddQuote/AddQuote';
import './homepage.css';
import BottomNavbar from './Navbar/BottomNavbar';
import CreateProfile from './CreateProfile/CreateProfile';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.getUser = this.getUser.bind(this);
  }

  getUser(userId) {
    this.setState({
      user: userId
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="render-homepage">
        <div className="homepage-bottom-navbar">
          <BottomNavbar user={user} getUser={this.getUser} />
        </div>
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
          <Route
            path="/createprofile"
            render={() => (
              <>
                <CreateProfile />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Homepage;