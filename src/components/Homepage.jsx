import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomeQuotes from './HomeQuotes/HomeQuotes';
import AddQuoteButton from './AddQuote/AddQuoteButton';
import AddQuote from './AddQuote/AddQuote';
import './homepage.css';
import BottomNavbar from './Navbar/BottomNavbar';
import SignUp from './Profile/Logg/SignUp';
import SignIn from './Profile/Logg/SignIn';
import Profile from './Profile/Profile';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      adminLogged: false
    };
    this.handleConnection = this.handleConnection.bind(this);
  }

  handleConnection() {
    const { isConnected, adminLogged } = this.state;
    this.setState({
      isConnected: !isConnected
    })
  }

  render() {
    const { isConnected } = this.state;
    return (
      <div className="render-homepage">
        <div className="homepage-bottom-navbar">
          <BottomNavbar isConnected={isConnected} />
        </div>
        <Switch>
          <Route
            exact path="/homepage"
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
            path="/signin"
            render={() => (
              <SignIn handleConnection={this.handleConnection} isConnected={isConnected} />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <>
                <SignUp />
              </>
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <>
                <Profile handleConnection={this.handleConnection} isConnected={isConnected} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Homepage;