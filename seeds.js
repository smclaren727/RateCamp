var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {name: "Cloud's Rest",
   image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
   description: "some words go here."
  },
  {name: "Desert Mesa",
   image: "https://farm4.staticflickr.com/3327/4593576497_835bbd10cd.jpg",
   description: "some words go here."
  },
  {name: "Canyon Floor",
   image: "https://farm8.staticflickr.com/7068/6780970858_9b0e519daf.jpg",
   description: "some words go here."
  }
];

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed campgrounds");

    //Add campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err);
        } else {
          console.log("added a campground");
          //Create a comment
          Comment.create(
            {
              text: "This place is great. No wifi!",
              author: "Traveler"
            }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
              }
            });
        }
      });
    });
  });
}

module.exports = seedDB;
