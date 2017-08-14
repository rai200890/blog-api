import express from "express";
import db from "../db";

let router = express.Router();

router.get("/", function(req, res, next) {
  let Post = db.model("Post");
  Post.find({}, function(err, posts) {
    res.json(posts);
  });
});

module.exports = router;
