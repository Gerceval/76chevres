import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { TextField, Button, Typography, Fab } from '@material-ui/core/';
import { ThumbUp, ThumbDown, MoreHoriz } from '@material-ui/icons';
import QueuePlayNext from '@material-ui/icons/QueuePlayNext';



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
      .then(res => res.data)
      .then(data => this.setState({ user: data }))
      .then(() => this.props.handleSignIn(this.state.user))
  }

  render() {
    const { pseudo, mail } = this.state;
    const { userLogged } = this.props;
    if (userLogged) {
      return <Redirect to="/homepage" />
    }
    return (
      <div className="render-signin">
        <div className="signin-pseudo">
          <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        </div>
        <div className="signin-mail">
          <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        </div>
        <div className="signin-submit">
          <Button onClick={this.handleSubmit} variant="outlined" color="primary">Me Connecter</Button>
        </div>
        <div className="signin-go-signup">
          <Typography variant="body1" color="textSecondary" component="p">
            Nouveau sur 76C ?
          </Typography>
          <NavLink to="/signup">
            <Fab
              variant="extended"
              size="large"
              color="primary"
            >
              <QueuePlayNext />
              Créer mon compte
        </Fab>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SignIn;