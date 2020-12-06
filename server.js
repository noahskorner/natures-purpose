const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();

// serves files from our dist directory which now contains our index.html file
app.use("/", serveStatic(path.join(__dirname, "/dist")));
// allows for history mode with vue router
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Listening on port: " + port);
