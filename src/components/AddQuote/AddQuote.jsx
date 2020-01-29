import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import axios from 'axios';

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      personnage: '',
      citation: '',
      url_image: ''
     };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value })
  };

  handleSubmit(e) {
    const { personnage, citation, url_img } = this.state;
    e.preventDefault();
    axios
      .post('/76/quote', {
        personnage,
        citation,
        url_img,
        id_uploader: 1
      })
  }

  render() {
    const { personnage, citation, url_img } = this.state;
    return (
      <div className="render-addquote-page" >
        <form onSubmit={this.handleSubmit}>
          <TextField label="Personnage" name="personnage" value={personnage} onChange={this.handleInputChange} variant="outlined" />
          <TextField label="Citation" name="citation" value={citation} onChange={this.handleInputChange} variant="outlined" multiline rowsMax="6" />
          <TextField label="image url" name="url_img" value={url_img} onChange={this.handleInputChange} variant="outlined" multiline rowsMax="6" />
          <Button type="submit">Envoyer</Button>
        </form>
      </div>
    );
  }
}

export default AddQuote;