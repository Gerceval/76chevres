import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      mail: '',
      redirect: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    const pseudo = localStorage.getItem('pseudo');
    const mail = localStorage.getItem('mail');
    this.setState({ pseudo, mail })
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit(e) {
    const { pseudo, mail } = this.state
    e.preventDefault();
    axios
      .get(`/76/users/${mail}/${pseudo}`)
      .then(res => res.data)
      .then(data => this.setState({ user: data }))
      .then(
        localStorage.setItem('pseudo', pseudo),
        localStorage.setItem('mail', mail),
      )
      .then(this.redirect())
  }

  redirect() {
    this.setState({ redirect: 'profile' })
  }

  render() {
    const { pseudo, mail, redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />
    }
    return (
      <div className="render-create-user">
        <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        <Button onClick={this.handleSubmit} color="primary">Se Connecter</Button>
      </div>
    );
  }
}

export default SignIn;