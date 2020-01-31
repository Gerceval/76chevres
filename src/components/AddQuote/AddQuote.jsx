import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TextField, Button, Typography } from '@material-ui/core/';
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
    const id_uploader = this.props.user.id
    e.preventDefault();
    axios
      .post('/76/quote', {
        personnage,
        citation,
        url_img,
        id_uploader
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
            <div className={isEditing ? 'render-addquote-page-editing' : 'render-addquote-page'}>
              <div className="addquote-personnage">
                <TextField label="Personnage" name="personnage" value={personnage} onChange={this.handleInputChange} variant="outlined" />
              </div>
              <div className="addquote-citation">
                <TextField label="Citation" name="citation" value={citation} onChange={this.handleInputChange} variant="outlined" multiline rowsMax="6" />
              </div>
              <div className="addquote-url_image">
                <TextField label="image url" name="url_img" value={url_img} onChange={this.handleInputChange} variant="outlined" multiline rowsMax="6" />
              </div>
              <div className="addquote-submit">
                {isEditing ?
                  <div className="addquote-edit-button">
                    <Button variant="outlined" color="primary" onClick={this.handleEdit}>Editer</Button>
                  </div>
                  :
                  <div className="addquote-submit-button">
                    <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Envoyer</Button>
                  </div>
                }
              </div>
            </div>
          )
          :
          (
            <div className="render-addquote-page">
              <div className="addquote-notlogged-p">
                <Typography variant="body1" color="textSecondary" component="p">
                  Vous devez être connecté pour ajouter une citation
              </Typography>
              </div>
              <div className="addquote-notlogged-gosignin">
                <NavLink to="/signin">
                  <Button variant="outlined" color="primary">Se Connecter</Button>
                </NavLink>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default AddQuote;