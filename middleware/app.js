const express = require("express");
const craigslist = require("node-craigslist");

const app = express();

client = new craigslist.Client({
  city: "toronto",
});

// app.use("/api/search", (req, res, next) => {
//   const responseArray = [];
//   client
//     .search("xbox one")
//     .then((listings) => {
//       // play with listings here...
//       listings.forEach((listing) => {
//         res.send(JSON.stringify(listing));
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   //   res.status(200).json(responseArray);
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/search/:query", (req, res) => {
  let craigslist = require("node-craigslist"),
    client = new craigslist.Client({
      city: "toronto",
    });

  client
    .search(`${req.params.query}`)
    .then((listings) => {
      res.send(JSON.stringify(listings));
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = app;
