import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './logg.css';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: undefined,
      mail: undefined,
      signedUp: false,
      errorOccured: false
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
      .post('/76/user', {
        pseudo,
        mail
      })
      .then(res => {
        this.setState({
          signedUp: true
        })
      })
      .catch(err => {
        if (err) {
          this.setState({ errorOccured: true })
        }
      })
  }

  render() {
    const { pseudo, mail, signedUp, errorOccured } = this.state;
    if (signedUp) {
      return <Redirect to="/signin" />
    }
    return (
      <div className="render-signup">
        <div className="signup-pseudo">
          <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        </div>
        <div className="signup-mail">
          <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        </div>
        <div className="signup-submit">
          <Button onClick={this.handleSubmit} variant="outlined" color="primary">Créer mon compte</Button>
        </div>
        {errorOccured &&
          <div className="signup-error-message">
            <Alert severity="error">Une erreur est survenue</Alert>
          </div>
        }
      </div>
    );
  }
}

export default SignUp;