Goals = new Mongo.Collection('goals');

// Code intended to run only on client
if (Meteor.isClient){
  Template.profile.helpers({
    goals: function () {
      return Goals.find({});
    }
  });
}

