const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

let credentials = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE1OTcwODU3MzMsInRva2VuIjoidGlMejVZYkwwRjVzMlFqU0RibVd3UzZRZ0VnQUEyIiwidXNlcl9pZCI6IjA1YTcwZjQyLWE5NWQtNDYxNy05YzU2LTMwNmQxOTJjYTA0ZCIsImRldmljZV9oYXNoIjoiMzQwYThhM2YxODNmZjAzNWUzMWUyY2NiZjNhNmRmZTgiLCJzY29wZSI6ImludGVybmFsIiwidXNlcl9vcmlnaW4iOiJVUyIsIm9wdGlvbnMiOmZhbHNlLCJsZXZlbDJfYWNjZXNzIjpmYWxzZX0.kkGFvdWsLU_NFetmGIqQecmAuzRcoRj55a6FX0bwTz6MEsXH3uF_lHA3xxI53qIf49W9PXiGjSU5KSeNhtMBWbo8ewHQkUe3J7LIePinsq9ty5DgGwZtriAcQQW1Rhp4nn6nbXc1GxpHC75pkhd_EG9Q6hQju_Ign3PsAcY2IJTw2LJCkvBGm32BvGXpWpIwI4dTn7_MOBt4yV3OjdYwoiJWPqkwFWspgC2qAhRT6MqAXM-8u-aYIc5WES8UnthUweWv0TdyR90Tqk1UjVjVgskhU0mdTAq8FE7EaSPw5pnd52xFNPNb73HT-uFHCDO3ENhzJ6Jxm_vb76UxA1GIow",
};

app.get("/search/", (req, res) => {
  const symbol = req.query.sym || "";
  let dt = { name: "", historicals: "" };
  const Robinhood = require("robinhood")(credentials, function () {
    Robinhood.historicals(symbol, "5minute", "day", function (
      historicalsErr,
      response,
      historicalsQuotes
    ) {
      Robinhood.instruments(symbol, function (
        instrumentsErr,
        response,
        instrmnts
      ) {
        if (instrumentsErr || historicalsErr) {
          res.status(500).send("error");
        } else {
          dt = { name: instrmnts, historicals: historicalsQuotes };
          if (
            !dt.historicals.symbol ||
            !dt.historicals.historicals ||
            !dt.name.results
          ) {
            res.status(500).send("error");

            return;
          }
          res.setHeader("Content-Type", "application/json");
          res.send(JSON.stringify(dt));
          console.log(dt);
        }
      });
    });
  });
});
app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
