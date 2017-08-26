function renderQuestion (question){
    $('#question').text(question.title);
    $.each(question.answers,function (i,answer) {
        let quiz = $('#quiz');
        quiz.append('<p id="choice' + i + '">'+answer+'</p>');
        quiz.append('<button id="guess' + i +'" class="btn--default">Select Answer</button>')
    })
}