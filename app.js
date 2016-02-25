var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/rate_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Campground.create(
//   {
//     name: "Granite Hill",
//     image: "https://farm4.staticflickr.com/3514/3844623716_427ed81275.jpg",
//     description: "This is a granite hill. No bathrooms or running water. Bring supplies."
//   },
//   function(err, campground){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("New campground: ");
//       console.log(campground);
//     }
//   });

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  Campground.find({}, function(err, AllCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("index",{campgrounds:AllCampgrounds});
    }
  });
});

app.post("/campgrounds", function(req, res){
  //Get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(3000, function(){
  console.log("The RateCamp Server Has Started on Port 3000");
});
