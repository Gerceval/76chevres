import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     };
    this.disconnect = this.disconnect.bind(this);
  }

  disconnect() {
    this.props.handleConnection()
  }

  render() {
    const { isConnected } = this.props;
    if (isConnected === false) {
      return <Redirect to="/homepage" />
    }
    return (
      <Button onClick={this.disconnect}>Se Déconnecter</Button>
    );
  }
}

export default Profile;