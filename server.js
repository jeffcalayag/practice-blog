const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3000;

const posts = [];

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("homepage", {addToHome: posts});
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/compose", function(req , res) {
  res.render("compose");
});

app.get("/posts/:postTitle", function(req, res) {
  const paramTitle = req.params.title;


  posts.forEach(function(post) {
    const storedTitle = req.body.title;

    if(paramTitle == storedTitle) {
      res.render("post", {openPost: post});
    }
  })
});

app.post("/compose", function(req, res) {
  console.log(req.body);
  const newPost = {
    title: req.body.title,
    content: req.body.content
  };

  posts.push(newPost);
  res.redirect("/");
})






app.listen(port, function() {
  console.log("Server listening on port " + port);
})
