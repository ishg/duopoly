Template.landing.rendered = function () {
  $('#signupbox').hide();
  $('.login').parsley({trigger: 'change'});
  $('.signup').parsley({trigger: 'change'});
};

Template.landing.events({
    'submit .signup': function(){
      event.preventDefault();
      var username = $('[name=username-signup').val();
      var email = $('[name=email-signup]').val();
      var password = $('[name=password-signup]').val();
      console.log(username);
      console.log(email);
      console.log(password);
      Accounts.createUser({
        username: username,
        email: email,
        password: password
      }, function(error){
        if(error){
        	alert(error)
          console.log(error.reason); // Output error if registration fails
        } else {
        	alert('Register Success');
        	Meteor.loginWithPassword(username, password, function(error){
        	  if(error){
        	  	console.log(email);
        	  	console.log(password);
        	  	alert(error);
        	    console.log(error.reason);
        	  } else {
        	  	alert('Login Success');
        	    Router.go("/");
        	  }
        	});
        }
      });
    },

    'submit .login': function(){
    	event.preventDefault();
      var email = $('[name=email-login]').val();
      var password = $('[name=password-login]').val();
      console.log(email);
    	console.log(password);
    	alert("Logging");
      Meteor.loginWithPassword(email, password, function(error){
        if(error){
        	alert(error);
          console.log(error.reason);
        } else {
        	alert('Login Success');
          Router.go("/");
        }
      });
    }
});