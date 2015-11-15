Template.profile.events({
        'click #addNewGoal': function(event) {
            event.preventDefault();
            Router.go('/goalCreation');
        }
});
