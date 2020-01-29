import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import axios from 'axios';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pseudo: '',
      mail: ''
     };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value })
  };

  handleSubmit(e) {
    const { pseudo, mail } = this.state;
    e.preventDefault();
    axios
      .get('/76/users', {
        pseudo,
        mail
      })
  }

  render() {
    const { pseudo, mail } = this.state;
    return (
      <div className="render-create-user">
        <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        <Button onClick={this.handleSubmit} color="primary">Envoyer</Button>
      </div>
    );
  }
}

export default SignIn;