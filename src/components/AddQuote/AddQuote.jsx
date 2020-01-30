import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core/';
import axios from 'axios';

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personnage: '',
      citation: '',
      url_img: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { personnage, citation, url_img, isEditing } = this.props;
    if (isEditing) {
      this.setState({
        personnage, 
        citation, 
        url_img
      })
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
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

  handleEdit() {
    const { personnage, citation, url_img } = this.state;
    const { quoteId } = this.props;
    axios
      .put(`/76/quote/edit/${quoteId}`, {
        personnage,
        citation,
        url_img
      })
  }

  render() {
    const { personnage, citation, url_img } = this.state;
    const { adminLogged, userLogged, isEditing, quoteId } = this.props;
    return (
      <div>
        {userLogged === true || adminLogged === true ?
          (
            <div className="render-addquote-page" >
              <TextField label="Personnage" name="personnage" value={personnage} onChange={this.handleInputChange} variant="outlined" />
              <TextField label="Citation" name="citation" value={citation} onChange={this.handleInputChange} variant="outlined" multiline rowsMax="6" />
              <TextField label="image url" name="url_img" value={url_img} onChange={this.handleInputChange} variant="outlined" multiline rowsMax="6" />
              {isEditing ?
              <Button onClick={this.handleEdit}>Editer</Button>
              :
              <Button onClick={this.handleSubmit}>Envoyer</Button>
              }
            </div>
          )
          :
          <p>Vous devez être connecté pour pouvoir ajouter une citation</p>
        }
      </div>
    )
  }
}

export default AddQuote;