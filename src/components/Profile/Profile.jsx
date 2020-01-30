import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { userLogged } = this.props;
    if (userLogged === false) {
      return <Redirect to="/homepage" />
    }
    return (
      <Button onClick={this.props.handleSignOut}>Se Déconnecter</Button>
    );
  }
}

export default Profile;