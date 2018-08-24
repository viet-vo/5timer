var quest1 = {
    question: "who",
    answer1: "1++",
    answer2: "2",
    answer3: "3",
    answer4: "4"
};
var quest2 = {
    question: "what",
    answer1: "2++",
    answer2: "3",
    answer3: "4",
    answer4: "1"
};
var quest3 = {
    question: "why",
    answer1: "3++",
    answer2: "4",
    answer3: "1",
    answer4: "2"
};
var quest4 = {
    question: "when",
    answer1: "4++",
    answer2: "1",
    answer3: "2",
    answer4: "3"
};
var allQAs = [quest1, quest2, quest3, quest4];
var timeoutId = setTimeout(stopwatch.count, 1000);
var runningTimer = false;
var timer = {

    reset: function () {
        $("#timerDisplay").text("00:00")
    },

    start: function() {
    if (!clockRunning) {
        itimeoutId = setTimeout(stopwatch.count, 1000);
        clockRunning = true;
      }
}
}

// make sure everything loads before running
// setTimeout(quizTimer, 1000 * 3);

// function quizTimer() {
window.onload = function () {

    for (i = 0; i < allQAs.length; i++) {
        console.log(allQAs[i]);
        $("#questionPool").append("<div class=>" + '""' + i + '""' + allQAs[i].question + "</div><br>");
        $("#questionPool").append(allQAs[i].answer1 + "<br>" + allQAs[i].answer2 + "<br>" + allQAs[i].answer3 + "<br>" + allQAs[i].answer4 + "<br>");

    };
}
// }


// var movie;
// var apiKey;