var requireLogin = function() { 
  if (! Meteor.user()) {
   // If user is not logged in render landingpage
   this.render('landing'); 
 } else {
   //if user is logged in render whatever route was requested
   this.next(); 
 }
}

Router.configure({
	
});

//Router.onBeforeAction(requireLogin, {except: ['landing']});

Router.route('/', {name: 'landing'});
Router.route('/profile', {name: 'profile'});
Router.route('/register', {name: 'register'});
Router.route('/communities', {name: 'communities'});
Router.route('/requests', {name: 'requests'});
