const express = require('express');
const listMoviesByWords = require('./services/getMovies');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

// CORS management
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});


app.get('/', (req,res) => res.send('Welcome'));

app.get('/list/movies/:name/:page', async (req, res) => {
  
  let name = req.params.name;
  let page = req.params.page;
  
  let movies = await listMoviesByWords(name,page);

  res.json(movies ? movies : 'No resources available');
})

app.listen(port, () => console.log(`API up & running, listening at http://${host}:${port}`));