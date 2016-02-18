var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg"},
  {name: "Granite Hill", image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"}
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
  res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, function(){
  console.log("The RateCamp Server Has Started on Port 3000");
});
