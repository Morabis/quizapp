let quiz = new Quiz();

quiz.loadRandomQuestions();
$(document).ajaxSuccess(function () {
   renderQuestion(quiz.getCurrentQuestion());
   renderQuestionNumber(quiz.currentQuestionIndex + 1, quiz.questions.length);
});


$(document).on('click','button',function () {
    let btn = $('#' + this.id);
    let p = btn.prev();
    if(p.text() === quiz.getCurrentQuestion().correctAnswer){
        quiz.score ++;
    }
    console.log(quiz.currentQuestionIndex);
    quiz.nextQuestion();
    if(!quiz.endGame){
        clearQuiz();
        renderQuestion(quiz.getCurrentQuestion());
        renderQuestionNumber(quiz.currentQuestionIndex + 1, quiz.questions.length);
    }
    else{
        renderEndGame(quiz.score);
    }
});

