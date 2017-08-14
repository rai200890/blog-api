import express from "express";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";

import posts from "./routes/posts";

let app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/posts", posts);

app.use(function handle404(req, res, next) {
  let err = new Error("Resource not Found");
  err.status = 404;
  next(err);
});

app.use(function handleError(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development"
    ? err
    : {};

  res.status(err.status || 500);
  res.json({"error": err.message});
});

module.exports = app;
