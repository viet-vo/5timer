var quest1 = {
    question: "who",
    answer1: "me",
    answer2: "you",
    answer3: "we",
    answer4: "tea"
};
var quest2 = {
    question: "what",
    answer1: "bannana",
    answer2: "apple",
    answer3: "orange",
    answer4: "kiwi"
};
var quest3 = {
    question: "why",
    answer1: "because",
    answer2: "due_to",
    answer3: "i_said_so",
    answer4: "do_it"
};
var quest4 = {
    question: "when",
    answer1: "now",
    answer2: "later",
    answer3: "in_awhile",
    answer4: "crocodile"
};
// var movie;
// var apiKey;
var allQAs = [quest1, quest2, quest3, quest4];
// var timeoutId = setTimeout(stopwatch.count, 1000);
var runningTimer = false;
// var timer = {

//     reset: function () {
//         $("#timerDisplay").text("00:00")
//     },

//     start: function() {
//     if (!clockRunning) {
//         itimeoutId = setTimeout(stopwatch.count, 1000);
//         clockRunning = true;
//       }
// }
// }

// make sure everything loads before running
// setTimeout(quizTimer, 1000 * 3);

// function quizTimer() {
window.onload = function () {

    for (i = 0; i < allQAs.length; i++) {
        console.log(allQAs[i]);
        var answerIdAdd =  "<div class='h3' id=" +  + i + "answers";
        $("#questionPool").append(allQAs[i].question + "<br>");
        $("#questionPool").append(allQAs[i].answer1 + "<br>");
        
        
        // $("#questionPool").append("<div class='h3'" + answerIdAdd + ">" + allQAs[i].answer1 + "<br>" + allQAs[i].answer2 + "<br>" + allQAs[i].answer3 + "<br>" + allQAs[i].answer4 + "<br></div>");

    };
}
// }


