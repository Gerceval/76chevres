import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.disconnect = this.disconnect.bind(this);
  }

  // getUser() {
  //   const pseudo = localStorage.getItem('pseudo');
  //   const mail = localStorage.getItem('mail');
  //   axios
  //     .get(`/76/users/${mail}/${pseudo}`)
  // }

  disconnect() {
    localStorage.removeItem('mail');
    localStorage.removeItem('pseudo');
    console.log('yo')
  }

  render() {
    return (
      <Button onClick={this.disconnect}>Se Déconnecter</Button>
    );
  }
}

export default Profile;