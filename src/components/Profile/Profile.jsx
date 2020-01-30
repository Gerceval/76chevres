import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
    this.disconnect = this.disconnect.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    console.log('bonjouryo')
  }

  disconnect(e) {
    e.preventDefault();
    localStorage.clear()
    this.redirect();
  }

  redirect() {
    this.setState({ redirect: '/' })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />
    }
    return (
      <Button onClick={this.disconnect}>Se Déconnecter</Button>
    );
  }
}

export default Profile;