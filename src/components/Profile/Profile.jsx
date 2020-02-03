import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import MyQuotes from './MyQuotes';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userLogged, userId, user, nightTheme } = this.props;
    if (userLogged === false) {
      return <Redirect to="/homepage" />
    }
    return (
      <div className="render-profile">
        <p className="userGreeting">Bonjour {user.pseudo}</p>
        <div className="profile-myquotes">
          <MyQuotes userId={userId} userLogged={userLogged} nightTheme={nightTheme} />
        </div>
        <div className="profile-signout">
          <Button onClick={this.props.handleSignOut} variant="outlined" color="primary">Me Déconnecter</Button>
        </div>
      </div>
    );
  }
}

export default Profile;