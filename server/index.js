const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

let credentials = {
  token:
 "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE1OTkxNTc2NjMsInRva2VuIjoiMkwwRVFQVjBmRlBzS0FDRVZ5SDdUUU1CbzFEU3ZkIiwidXNlcl9pZCI6IjA1YTcwZjQyLWE5NWQtNDYxNy05YzU2LTMwNmQxOTJjYTA0ZCIsImRldmljZV9oYXNoIjoiMzQwYThhM2YxODNmZjAzNWUzMWUyY2NiZjNhNmRmZTgiLCJzY29wZSI6IndlYl9saW1pdGVkIiwidXNlcl9vcmlnaW4iOiJVUyIsIm9wdGlvbnMiOmZhbHNlLCJsZXZlbDJfYWNjZXNzIjpmYWxzZX0.I2zvZi8UAaEC4zrAILKJKlUMcmOoQaW5jSSD_OpupwN0u8FTFjq0rlQBShu4IkyYv2QmCYjEMK0h5Ntx8K6lKZOujj0uGanjWlt96o_tKAxGcxEUWymLt0eldk0IJ8LgSSTsm1Rn5Kv9zbCMroLUOzpw9Hn6tFapWVcfnC6cmX_cr8XnKaH4WGcIg0TLuHTeNjE9Tpk_p9bP1_-1B15dk-Z7E4pAtgSfTA-n6vspT1vuv9DU8D5Dtix_qB_wl2aosCADl_AMV_EgEq-6QpOnGZhD_9TWn7dmGdY-fwWCf47GXiVA-jIpbl2lyGsEUNovcX2BzIXERBUIFPMdl6Vuog"   
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
