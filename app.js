var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://www.flickr.com/photos/musubk/14527995244/"},
  {name: "Granite Hill", image: "https://www.flickr.com/photos/amalakar/7299820870/"},
  {name: "Mountain Goat's Rest", image: "https://www.flickr.com/photos/alanenglish/3844623716/"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
  //Get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //Redirect back to the campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, function(){
  console.log("The RateCamp Server Has Started on Port 3000");
});
