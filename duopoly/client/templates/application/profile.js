Template.profile.rendered = function () {
  $('.panel-title').text(Meteor.user().emails[0].address);
};

Template.profile.helpers({
  
  goals: function() {
    return Goals.find();
  }
  
});

Template.profile.events({
    'click #addNewGoal': function(event) {
        event.preventDefault();
        Router.go('/goalCreation');
    }
});

