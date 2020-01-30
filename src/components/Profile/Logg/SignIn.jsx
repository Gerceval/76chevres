import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core/';
import axios from 'axios';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      mail: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit(e) {
    const { pseudo, mail } = this.state;
    e.preventDefault();
    axios
      .get(`/76/users/${mail}/${pseudo}`)
      .then(res =>  res.data)
      .then(data => this.setState({ user: data }))
      .then(() => this.props.handleConnection(this.state.user))
  }

  render() {
    const { pseudo, mail } = this.state;
    const { isConnected } = this.props;
    if (isConnected) {
      return <Redirect to="/homepage" />
    }
    return (
      <div className="render-create-user">
        <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        <Button onClick={this.handleSubmit} color="primary">Se Connecter</Button>
        <h4>Pas de compte 76C ?</h4>
        <NavLink to="/signup">
          <Button color="primary">Creer mon compter</Button>
        </NavLink>
      </div>
    );
  }
}

export default SignIn;