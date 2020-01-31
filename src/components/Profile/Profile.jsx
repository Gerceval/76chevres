import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import MyQuotes from './MyQuotes';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { userLogged, userId } = this.props;
    if (userLogged === false) {
      return <Redirect to="/homepage" />
    }
    return (
      <>
        <MyQuotes userId={userId} userLogged={userLogged} />
        <Button onClick={this.props.handleSignOut} variant="outlined" color="primary">Se Déconnecter</Button>
      </>
    );
  }
}

export default Profile;