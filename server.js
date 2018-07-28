const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const callEightBallApi = async uri => {
  const response = await fetch(uri);
  const body = await response.json();
  if (response.status !== 200) {
    throw new Error(body.message);
  }
  return body;
};
app.get("/eight-ball/:searchTerm", (req, res) => {
  console.log(req, "req");
  const requestParams = encodeURIComponent(req.params.searchTerm);
  const uri = `https://8ball.delegator.com/magic/JSON/${requestParams}`;
  callEightBallApi(uri)
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
