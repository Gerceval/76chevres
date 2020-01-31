import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Fab, Avatar, Button, CardActions, IconButton, Collapse } from '@material-ui/core';
import { ThumbUp, ThumbDown, MoreHoriz } from '@material-ui/icons';
import AddQuote from '../AddQuote/AddQuote';
import './profile.css';

const HomeQuotesList = props => {
  const { isEditing, userLogged } = props;
  return props.quotes.map(quote => {
    const date = quote.creation_date
      .substring(0, 10)
      .split('-')
      .reverse()
      .join(' / ');

    return (
      <div className="editmyquotes-items">
        <Card key={quote.quoteId}>
          <div className={`card-structure ${isEditing}`}>
            <CardMedia
              className="quote-image"
              image={quote.url_img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {quote.personnage}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {quote.citation}
              </Typography>
              <Typography className="editmyquotes-date" variant="caption" color="textSecondary" component="p">
                créé le {date}
              </Typography>
              <div className="editmyquotes-delete-edit-buttons">
                <Button onClick={() => props.delete(quote.quoteId)} variant="outlined" color="secondary">
                  supprimer
            </Button>
                <Button onClick={() => props.editQuote(quote.quoteId)} variant="outlined" color="secondary">
                  editer
            </Button>
              </div>
            </CardContent>
          </div>
          {isEditing &&
            <div className="editmyquotes-addquote-editing">
              <AddQuote
                citation={quote.citation}
                personnage={quote.personnage}
                url_img={quote.url_img}
                userLogged={userLogged}
                isEditing={isEditing}
                quoteId={quote.quoteId}
              />
            </div>
          }
        </Card>
      </div>
    )
  })
}

export default HomeQuotesList;