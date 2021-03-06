import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeQuotes from './HomeQuotes/HomeQuotes';
import AddQuoteButton from './AddQuote/AddQuoteButton';
import AddQuote from './AddQuote/AddQuote';
import BottomNavbar from './Navbar/BottomNavbar';
import SignUp from './Profile/Logg/SignUp';
import SignIn from './Profile/Logg/SignIn';
import Profile from './Profile/Profile';
import Admin from './Profile/Admin';
import { Alert } from '@material-ui/lab';
import './homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: false,
      adminLogged: false,
      error: false,
      user: [],
      nightTheme: false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleErrorPrivilege = this.handleErrorPrivilege.bind(this);
    this.handleNightTheme = this.handleNightTheme.bind(this);
  }

  handleSignIn(user) {
    if (user[0] === undefined) {
      this.handleErrorPrivilege();
    } else {
      this.setState({
        userLogged: true,
        user
      })
      if (user[0].profil_type === 'admin') {
        this.setState({ adminLogged: true, userLogged: false })
      }
    }
  }

  handleSignOut() {
    this.setState({
      user: [], userLogged: false, adminLogged: false
    })
  }

  handleErrorPrivilege() {
    this.setState({ error: !this.state.error })
    setTimeout(() => {
      this.setState({ error: !this.state.error });
    }, 3500)
  }

  handleNightTheme() {
    this.setState({ nightTheme: !this.state.nightTheme })
  }

  render() {
    const { userLogged, adminLogged, user, error, nightTheme } = this.state;
    return (
      <div className={nightTheme ? 'render-homepage night' : 'render-homepage'}>
        {error &&
          <div className="homepage-error-privilege">
            <Alert severity="error">Veuillez vous connecter</Alert>
          </div>}
        <div className="homepage-bottom-navbar">
          <BottomNavbar userLogged={userLogged} adminLogged={adminLogged} handleNightTheme={this.handleNightTheme} nightTheme={nightTheme} />
        </div>
        <Switch>
          <Route
            exact path="/homepage"
            render={() => (
              <div className={nightTheme ? "homepage nighttheme" : "homepage"}>
                <div className="homepage-addquote-button">
                  <AddQuoteButton />
                </div>
                <HomeQuotes adminLogged={adminLogged} userLogged={userLogged} handleErrorPrivilege={this.handleErrorPrivilege} nightTheme={nightTheme} />
              </div>
            )}
          />
          <Route
            path="/addquote"
            render={() => (
              <>
                <AddQuote adminLogged={adminLogged} userLogged={userLogged} user={this.state.user[0]} />
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
              <div>
                {user[0] !== undefined ?
                  <Profile
                    userId={this.state.user[0].id}
                    handleSignOut={this.handleSignOut}
                    userLogged={userLogged}
                    user={this.state.user[0]}
                    nightTheme={nightTheme}
                  />
                  :
                  <Redirect to="homepage" />
                }
              </div>
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