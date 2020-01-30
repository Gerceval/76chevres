import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomeQuotes from './HomeQuotes/HomeQuotes';
import AddQuoteButton from './AddQuote/AddQuoteButton';
import AddQuote from './AddQuote/AddQuote';
import './homepage.css';
import BottomNavbar from './Navbar/BottomNavbar';
import CreateProfile from './CreateProfile/CreateProfile';
import SignIn from './CreateProfile/SignIn';
import Profile from './Profile/Profile';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.checkUser = this.checkUser.bind(this);
  }

  componentDidMount() {
    this.checkUser();
  }

  checkUser() {
    const pseudo = localStorage.getItem('pseudo');
    const mail = localStorage.getItem('mail');
    this.setState({ pseudo, mail })
  }

  render() {
    return (
      <div className="render-homepage">
        <div className="homepage-bottom-navbar">
          <BottomNavbar />
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
            path="/login"
            render={() => (
              <>
                <SignIn />
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
          <Route
            path="/profile"
            render={() => (
              <>
                <Profile />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Homepage;