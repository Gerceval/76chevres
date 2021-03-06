import React from 'react';
import { Card, CardMedia, CardContent, Typography, Fab, Avatar, Button, CardActions, IconButton, Collapse } from '@material-ui/core';
import { ThumbUp, ThumbDown, MoreHoriz } from '@material-ui/icons';

import './quotes.css';

const HomeQuotesList = props => {
  const { adminLogged, openedItem, nightTheme } = props;
  return props.quotes.map(quote => {
    const date = quote.creation_date
      .substring(0, 10)
      .split('-')
      .reverse()
      .join(' / ');

    return (
      <div className="homequoteslist-items">
        <Card key={quote.quoteId} className={`quote-card ${quote.quoteId}`}>
          <CardMedia
            className="quote-image"
            image={quote.url_img}
            title="Contemplative Reptile"
          >
            <div className="quote-buttons-count">
              <div>
                <Fab onClick={() => props.upVote(quote.quoteId)} size="big" color="primary">
                  <ThumbUp />
                </Fab>
              </div>
              <div>
                <Avatar className="quote-count">
                  {quote.like_count}
                </Avatar>
              </div>
              <div>
                <Fab onClick={() => props.downVote(quote.quoteId)} size="big" color="secondary">
                  <ThumbDown />
                </Fab>
              </div>
            </div>
          </CardMedia>
          <CardContent className={nightTheme ? "nighttheme" : null}>
            <Typography gutterBottom variant="h5" component="h2">
              {quote.personnage}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {quote.citation}
            </Typography>
          </CardContent>
          <CardActions className={nightTheme ? "nighttheme" : null}>
            <IconButton className="quote-expand-on" onClick={() => props.expandCard(quote.quoteId, openedItem)}>
              <MoreHoriz />
            </IconButton>
          </CardActions>
          <Collapse in={props.openedItem === quote.quoteId ? props.cardExpanded : false} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="caption" color="textSecondary" component="p">
                créé par {quote.pseudo} le {date}
              </Typography>
              {adminLogged &&
                <Button onClick={() => props.delete(quote.quoteId)} variant="outlined" color="secondary">
                  supprimer
            </Button>
              }
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  })
}

export default HomeQuotesList;