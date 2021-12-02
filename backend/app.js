const express = require('express');
const bodyParser = require("body-parser");

const app = express(); // its a big chain of middlwares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Header",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.post("/api/posts",(req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: "Post added successfully"
    });
});


app.use("/api/posts",(req, res, next) => {
  const posts = [
    {
      id : "1234",
      title : "First server-side post",
      content: "This is coming from server"
    },
    {
      id : "12345",
      title : "Second server-side post",
      content: "This is coming from server"
    }
  ];
  res.json({
    message : "Posts fetched successfully",
    posts: posts
  });
});

module.exports = app;
