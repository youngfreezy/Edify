const apiKey = "9952def8e4e171a89ef202376a61cbe6";
const fetch = require("node-fetch");
moviesController = (req, res) => {
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
};

const moviesApi = async uri => {
  const response = await fetch(uri);
  const body = await response.json();
  if (response.status !== 200) {
    throw new Error(body.message);
  }
  return body;
};

module.exports = moviesController;
