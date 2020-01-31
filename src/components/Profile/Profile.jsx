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
    const { userLogged, userId, user } = this.props;
    if (userLogged === false) {
      return <Redirect to="/homepage" />
    }
    return (
      <>
      <p className="userGreeting">Bonjour {user.pseudo}</p>
        <MyQuotes userId={userId} userLogged={userLogged} />
        <div className="profile-signout">
          <Button onClick={this.props.handleSignOut} variant="outlined" color="primary">Se Déconnecter</Button>
        </div>
      </>
    );
  }
}

export default Profile;