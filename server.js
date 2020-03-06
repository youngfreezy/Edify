const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const apiKey = "9952def8e4e171a89ef202376a61cbe6";
const moviesApi = async uri => {
  const response = await fetch(uri);
  const body = await response.json();
  if (response.status !== 200) {
    throw new Error(body.message);
  }
  return body;
};

app.get("/movies", (req, res) => {
  const uri = `http://api.themoviedb.org/3/discover/movie?language=en&sort_by=popularity.asc&primary_release_year=2017&api_key=${apiKey}&page=${req
    .query.page || 1}`;
  moviesApi(uri)
    .then(response => {
      return res.send(response);
    })
    .catch(err => {
      res.status(500);
      res.send({
        message: `There was the following error making the request: ${err}`
      });
    });
});

app.get("*", (req, res) => {
  res.send({ message: `${req.url} isn't implemented yet :)` });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
