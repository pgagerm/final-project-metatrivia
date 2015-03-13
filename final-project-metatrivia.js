Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });

  Template.body.events({
  "submit .submitted-question": function (event) {
    // This function is called when the question submission form is submitted

    var question = event.target.question.value;
    var answer1 = event.target.answer1.value;
    var answer2 = event.target.answer2.value;
    var answer3 = event.target.answer3.value;
    var answer4 = event.target.answer4.value;

    Tasks.insert({
      question: question,
      answers: [
        {text    : answer1, isAnswer : true},
        {text    : answer2, isAnswer : true},
        {text    : answer3, isAnswer : true},
        {text    : answer4, isAnswer : true}
        ],
      createdAt: new Date() // current time
    });

    // Clear form
    $('.submitted-question')[0].reset();

    // Prevent default form submit
    return false;
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
