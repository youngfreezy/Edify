const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const moviesController = require("./controllers/movies");

app.get("/movies", moviesController);

app.get("*", (req, res) => {
  res.send({ message: `${req.url} isn't implemented yet :)` });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
