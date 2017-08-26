let qst = $('#question');
let score = $('#score');
let progress = $('#progress');

function renderQuestion (question){
    qst.text(question.title);
    $.each(question.answers,function (i,answer) {
        score.append('<p id="choice' + i + '">'+answer+'</p>');
        score.append('<button id="guess' + i +'" class="btn--default">Select Answer</button>');
    })
}

function renderQuestionNumber(x, y) {
    progress.text('Question ' + x + ' of ' + y);
}

function clearQuiz() {
    qst.text('');
    progress.text('');
    $('h3 > p').remove();
    $('h3 > button').remove();
}

function renderEndGame(scorePoints) {
    clearQuiz();
    qst.text('Game Over!');
    score.text('Your score: ' + scorePoints);
}

