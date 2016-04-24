Meteor.publish('goals', function() {
	return Goals.find();
});

Meteor.publish('communities', function(){
	return Communities.find();
})