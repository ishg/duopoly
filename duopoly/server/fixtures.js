Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Goals.find().count() === 0) {

    // create sample polls
    var sampleGoals = [
      {
        user: '',
        patner: '',
        completed: false,
        progress: 30,
        name: "Run 3 miles every day",
        description: "Run a 5K every day to get better. Blah blah blah. Training for a half marathon.",
        partner_bool: true,
        communities: [
          'fitness',
          'running'
        ],
        deadline: moment("12-25-2015", "MMM Do YY" ).format("MMM Do YYYY"),
        frequency: 'daily',
        notifications_bool: true,
        sentRequests: ["Bob", "Billy", "Joe"],
        receivedRequests: ["Mohinder", "Baldev"]
      },
      {
        user: '',
        partner: '',
        completed: false,
        progress: 70,
        name: "Read one book every week",
        description: "Knowledged is supreme for understanding the mysteries of the universe. Also, Zuckerberg does this.",
        partner_bool: false,
        communities: [
          'literature'
        ],
        deadline: moment("11-14-2016", "MMM Do YY" ).format("MMM Do YYYY"),
        frequency: 'weekly',
        notifications_bool: true,
        sentRequests: ["Brendan"],
        receivedRequests: ["Vladmir", "Joseph"]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleGoals, function(goal) {
      Goals.insert(goal);
    });

  }

  if (Communities.find().count() === 0) {

    // create sample polls
    var sampleCommunities = [
      {
        name:'fitness'
      },
      {
        name:'running',
      },
      {
        name:'literature',
      }
    ];

    // loop over each sample poll and insert into database
    _.each(sampleCommunities, function(comm) {
      Communities.insert(comm);
    });

  }

});

