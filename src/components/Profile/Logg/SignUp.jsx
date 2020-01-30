import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


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
      <div className="render-create-user">
        <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        <Button onClick={this.handleSubmit} color="primary">Créer mon compte</Button>
        {errorOccured && <Alert severity="error">This is an error alert — check it out!</Alert>}
      </div>
    );
  }
}

export default SignUp;