const express = require('express');

const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const connection = require('./conf');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// GET TOP QUOTES
app.get('/76/quotes/top', (req, res) => {
  connection.query('SELECT q.*, q.id AS quoteId, u.* from quote AS q JOIN user AS u on u.id = q.id_uploader ORDER BY q.like_count DESC', (err, results) => {
    if (err) {
      res.status(500).send('Error');
      console.log(err)
    } else {
      res.json(results);
    }
  });
});

// GET RECENT QUOTES
app.get('/76/quotes/recent', (req, res) => {
  connection.query('SELECT q.*, q.id AS quoteId, u.* from quote AS q JOIN user AS u on u.id = q.id_uploader ORDER BY q.creation_date DESC', (err, results) => {
    if (err) {
      res.status(500).send('Error');
      console.log(err)
    } else {
      res.json(results);
    }
  });
});

// GET ALL QUOTES FROM USER
app.get('/76/quotes/user/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`SELECT q.*, q.id AS quoteId, u.* from quote AS q JOIN user AS u on u.id = q.id_uploader WHERE q.id_uploader = ${id}`, (err, results) => {
    if (err) {
      res.status(500).send('Error');
      console.log(err)
    } else {
      res.json(results);
    }
  });
});

// GET 1 LOGGED USER
app.get('/76/users/:mail/:pseudo', (req, res) => {
  const { mail, pseudo } = req.params;
  connection.query(`SELECT * FROM user WHERE mail = '${mail}' AND pseudo = '${pseudo}'`, (err, results) => {
    if (err) {
      res.status(500).send('Error');
      console.log(err)
    } else {
      res.json(results).status(200);
    }
  });
});

// POST 1 QUOTE
app.post('/76/quote', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO quote SET ?', formData, err => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.status(201).send('Quote created');
    }
  });
});

// DELETE 1 QUOTE
app.delete('/76/quote/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM quote WHERE id = ${id}`, err => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.status(201).send(`Quote deleted`);
    }
  });
});

// UPVOTE 1 QUOTE
app.put('/76/upvote/quote/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`UPDATE quote SET like_count = like_count + 1 WHERE id = ${id}`, err => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.status(201).send(`Quote deleted`);
    }
  });
});

// DOWNVOTE 1 QUOTE
app.put('/76/downvote/quote/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`UPDATE quote SET like_count = like_count - 1 WHERE id = ${id}`, err => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.status(201).send(`Quote deleted`);
    }
  });
});

// EDIT 1 QUOTE
app.put('/76/quote/edit/:id', (req, res) => {
  const { id } = req.params;
  const formData = req.body;
  connection.query(`UPDATE quote SET ? WHERE id = ${id}`, formData, err => {
    if (err) {
      res.status(500).send('Error');
    } else {
      res.status(201).send(`Quote edited`);
    }
  });
});

// CREATE USER
app.post('/76/user', (req, res) => {
  const formData = req.body;
  connection.query(`INSERT INTO user SET ?`, formData, err => {
    if (err) {
      res.sendStatus(500);
      console.log(err)
    } else {
      res.sendStatus(201);
    }
  });
});


app.listen(port, err => {
  if (err) {
    throw new Error('On en a gros');
  }
  // eslint-disable-next-line no-console
  console.log(`Le serveur est considéré en tant que tel : ${port}`);
});