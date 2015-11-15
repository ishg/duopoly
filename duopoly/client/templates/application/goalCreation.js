Template.goalCreation.events({
        'click #submit': function(event) {
            event.preventDefault();
            // Todo: add goal to database
            Router.go('/');
        }
});

