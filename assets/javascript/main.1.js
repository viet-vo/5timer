var quest1 = {
    question: "I am asking question 1?",
    answer1: "right answer",
    answer2: "wrong",
    answer3: "wrong",
    answer4: "wrong"
};
var quest2 = {
    question: "I am asking question 2?",
    answer1: "wrong",
    answer2: "right answer",
    answer3: "wrong",
    answer4: "wrong"
};
var quest3 = {
    question: "I am asking question 3?",
    answer1: "wrong",
    answer2: "wrong",
    answer3: "right answer",
    answer4: "wrong"
};
var quest4 = {
    question: "I am asking question 4?",
    answer1: "wrong",
    answer2: "wrong",
    answer3: "wrong",
    answer4: "right answer"
};
var allQAs = [quest1, quest2, quest3, quest4];
var runningTimer = false;
var number = 20;

var intervalId;

$("#questionPool").on("click", stop);

for (i = 0; i < allQAs.length; i++) {
    if (!runningTimer) {
        console.log(allQAs[i]);
        var questionAns = "'#" + i + "Answer'"
        $("#questionPool").append(allQAs[i].question "<div id=" + i + "Answers" + "></div>");
        $(questionAns).append(allQAs[i].answer1 + "<br>" + allQAs[i].answer2 + "<br>" + allQAs[i].answer3 + "<br>" + allQAs[i].answer4 + "<br>");
    }
};

function run() {
    if (!intervalId) {
        intervalId = setInterval(decrement, 1000);
    }
}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 20;
    }

}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

run();