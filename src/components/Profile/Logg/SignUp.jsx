import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pseudo: null,
      mail: null,
      signedUp: false
     };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value })
  };

  handleSubmit(e) {
    const { pseudo, mail, signedUp } = this.state;
    e.preventDefault();
    axios
      .post('/76/user', {
        pseudo,
        mail
      })
      .then(res => {
        if (res.status === 201) {
          this.setState({ signedUp: true })
        }
      })
  }

  render() {
    const { pseudo, mail, signedUp } = this.state;
    if (signedUp) {
      return <Redirect to="/signin" />
    }
    return (
      <div className="render-create-user">
        <TextField label="Pseudo" name="pseudo" value={pseudo} onChange={this.handleInputChange} variant="outlined" />
        <TextField label="Mail" name="mail" value={mail} onChange={this.handleInputChange} variant="outlined" />
        <Button onClick={this.handleSubmit} color="primary">Créer mon compte</Button>
      </div>
    );
  }
}

export default CreateProfile;