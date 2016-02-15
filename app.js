var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Salmon Creek", image: "https://www.flickr.com/photos/musubk/14527995244/"},
    {name: "Granite Hill", image: "https://www.flickr.com/photos/amalakar/7299820870/"},
    {name: "Mountain Goat's Rest", image: "https://www.flickr.com/photos/alanenglish/3844623716/"}
  ];

  res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(3000, function(){
  console.log("The RateCamp Server Has Started on Port 3000");
});
