function Question(title, answers, correctAnswer) {
    this.title = title;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.guess = '';
    this.answered = false;
}

Question.prototype.shuffle = function (answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }
    return answers;
};

