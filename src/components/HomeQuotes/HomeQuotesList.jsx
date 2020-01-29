import React from 'react';
import { Card, CardMedia, CardContent, Typography, Fab, Avatar } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import './quotes.css';

const HomeQuotesList = props => {
  return props.quotes.map(quote => {
    return (
      <Card className="quote-card">
        <CardMedia
          className="quote-image"
          image={quote.url_img}
          title="Contemplative Reptile"
        >
          <div className="quote-buttons-count">
            <div>
              <Fab size="big" color="primary">
                <ThumbUp />
              </Fab>
            </div>
            <div>
              <Avatar className="quote-count">
                {quote.like_count}
              </Avatar>
            </div>
            <div>
              <Fab size="big" color="secondary">
                <ThumbDown />
              </Fab>
            </div>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {quote.personnage}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {quote.citation}
          </Typography>
        </CardContent>
        <Typography variant="caption" color="textSecondary" component="p">
          envoyé par {quote.pseudo}
        </Typography>
      </Card>
    )
  })
}

export default HomeQuotesList;