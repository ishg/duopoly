Template.profile.rendered = function () {
  $('.panel-title').text(Meteor.user().emails[0].address);
};

Template.profile.helpers({
  
  goals: function() {
    return Goals.find();
  }
  
});