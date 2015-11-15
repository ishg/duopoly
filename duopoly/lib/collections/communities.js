Communities = new Mongo.Collection('communities');

if (Meteor.isClient){
  Template.goalCreation.helpers({
    goals: function () {
      return Goals.find({});
    }
  });
}