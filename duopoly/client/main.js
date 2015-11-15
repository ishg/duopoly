Meteor.subscribe('goals');
Meteor.subscribe('communities');

/* Landing Page */
Template.landing.rendered = function () {
  $('#signupbox').hide();
  $('#login').parsley({trigger: 'change'});
};

Template.landing.events({
  'click #login-submit': function(event, template) {
    // 1. Collect the username and password from the form
    var email = $('#email').val(),
        password = $('#password').val();

    console.log(email);
  	console.log(password);
    // 2. Attempt to login.
    Meteor.loginWithPassword(email, password, function(error) {
      // 3. Handle the response
      if (Meteor.user()) {
          // Redirect the user to where they're loggin into. Here, Router.go uses
          // the iron:router package.
          Router.go('/');
      } else {
          // If no user resulted from the attempt, an error variable will be available
          // in this callback. We can output the error to the user here.
          var message = "There was an error logging in: <strong>" + error.reason + "</strong>";

          $('#login-form-messages').html(message);
      }
    });
  },
  'click #signup-submit':function(event,template){
  	var email = $('#email').val(),
  			password = $('#password').val();
  	
  	Accounts.createUser({
	    email: email,
	    password: password
  	}, function(error){
	    if(error){
        var message = "There was an error signing up: <strong>" + error.reason + "</strong>";
        $('#login-form-messages').html(message);
	    } else {
        Router.go("/"); // Redirect user if registration succeeds
	    }
  	});
  }
});

/* Profile page */
Template.profile.rendered = function () {
  $('.panel-title').text(Meteor.user().emails[0].address);
};

Template.profile.helpers({
  goals: function() {
    return Goals.find();
  },
  currentUserPicture: function(){
    var email = Meteor.user().emails[0].address;
    var hash = CryptoJS.MD5(email);
    console.log(hash);
    return "http://www.gravatar.com/avatar/" + hash;
  }
});

Template.profile.events({
    'click #addNewGoal': function(event) {
        event.preventDefault();
        Router.go('/goalCreation');
    }
});

/* Goal Creation Page */
Template.goalCreation.events({
  'submit form': function(event) {
      event.preventDefault();
      Router.go('/');
  }
});

/* Communities */
Template.communities.helpers({
  goals: function() {
    return Goals.find();
  }
});

/* Header */
Template.header.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

/* Misc Helpers */
