Goals = new Mongo.Collection('goals');

// Code intended to run only on client
if (Meteor.isClient){
  Template.body.helpers({
    goals: function () {
      return Goals.find({});
    }
  });
}

// Allow user to perform certain functions
Goals.allow({
  update: function(username,) {},
  remove: function() {},
});

// Deny user from performing these functions
Goals.deny({
  update: function() {};
});
   
