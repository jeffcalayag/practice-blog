const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("homepage");
});







app.listen(port, function() {
  console.log("Server listening on port " + port);
})
