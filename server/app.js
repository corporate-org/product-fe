const createError = require("http-errors");
const express = require("express");
const proxy = require("express-http-proxy");
const path = require("path");
const logger = require("morgan");

// Environmental variable for configuring backend
const PUBLIC_SERVER_URL=process.env.PUBLIC_SERVER_URL || "http://sample-service:8080";

const app = express();


app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", proxy(PUBLIC_SERVER_URL));

app.use("/", express.static("public"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if (req.path.startsWith("/api/")) {
    // error from Proxy
    const proxiedPath = req.path.substring("/api/".length);
    console.error(`Unable to complete request: "${PUBLIC_SERVER_URL}/${proxiedPath}"`);
    if (err.code === "ENOTFOUND") {
      console.error(`Unable to find host "${err.host}"`);
    } else if (err.code === "ECONNREFUSED") {
      console.error(`Unable to connect to host "${err.address} on port ${err.port}. Connection Refused."`);
    }
  }
  else {
    console.log(err);
  }

  // set locals, only providing error in development
  res.status(err.status || 500);
  res.send(err.message);
  next();
});

module.exports = app;
