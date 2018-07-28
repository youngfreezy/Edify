const requestPromise = require("request-promise");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/eight-ball/:searchTerm", (req, res) => {
  const params = encodeURIComponent(req.params.searchTerm);
  const uri = `https://8ball.delegator.com/magic/JSON/${params}`;
  requestPromise(uri)
    .then(response => {
      return res.send(response);
    })
    .catch(err => {
      res.status(500);
      res.send({ message: "There was an error making the request" });
    });
});

app.get("*", (req, res) => {
  res.send({ message: "hi" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
