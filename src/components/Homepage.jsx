import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeQuotes from './HomeQuotes/HomeQuotes';
import AddQuoteButton from './AddQuote/AddQuoteButton';
import AddQuote from './AddQuote/AddQuote';
import './homepage.css';
import BottomNavbar from './Navbar/BottomNavbar';
import SignUp from './Profile/Logg/SignUp';
import SignIn from './Profile/Logg/SignIn';
import Profile from './Profile/Profile';
import Admin from './Profile/Admin';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: false,
      adminLogged: false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignIn(user) {
    this.setState({
      userLogged: true,
      user
    })
    if (user[0].profil_type === 'admin') {
      this.setState({ adminLogged: true, userLogged: false })
    }
  }

  handleSignOut() {
    this.setState({
      user: null, userLogged: false, adminLogged: false
    })
  }

  render() {
    const { userLogged, adminLogged } = this.state;
    return (
      <div className="render-homepage">
        <div className="homepage-bottom-navbar">
          <BottomNavbar userLogged={userLogged} adminLogged={adminLogged} />
        </div>
        <Switch>
          <Route
            exact path="/homepage"
            render={() => (
              <div className="homepage">
                <div className="homepage-addquote-button">
                  <AddQuoteButton />
                </div>
                <HomeQuotes adminLogged={adminLogged} userLogged={userLogged} />
              </div>
            )}
          />
          <Route
            path="/addquote"
            render={() => (
              <>
                <AddQuote adminLogged={adminLogged} userLogged={userLogged} />
              </>
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <SignIn handleSignIn={this.handleSignIn} userLogged={userLogged} />
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
                <Profile
                  userId={this.state.user[0].id}
                  handleSignOut={this.handleSignOut}
                  userLogged={userLogged}
                />
              </>
            )}
          />
          <Route
            path="/admin"
            render={() => (
              <>
                <Admin adminLogged={adminLogged} handleSignOut={this.handleSignOut} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Homepage;