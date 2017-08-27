function Quiz() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.endGame = false;
}

Quiz.prototype.add = function (question) {
    this.questions.push(question);
};

Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.loadRandomQuestions = function () {
    let questions = [];
    $.getJSON('questions.json', {
        format: 'json'
    }, function (data) {
        if(data.response_code === 0){
            $.each(data.results, function (i, item) {
                let question = new Question(item.question, item.incorrect_answers, item.correct_answer);
                question.answers.push(question.correctAnswer);
                question.answers = question.shuffle(question.answers);
                questions.push(question);
            })
        }
    }); // end getJSON
    this.questions = questions;
};

Quiz.prototype.nextQuestion = function () {
    if(this.currentQuestionIndex < this.questions.length - 1){
        this.currentQuestionIndex ++;
    }
    else
    {
        this.endGame = true;
    }
};