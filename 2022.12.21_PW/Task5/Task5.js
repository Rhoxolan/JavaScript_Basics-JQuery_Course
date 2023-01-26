document.forms.newQuestionForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    let questionText = document.forms.newQuestionForm.elements.questionInput.value;
    let correctAnswerText = document.forms.newQuestionForm.elements.correctAnswerInput.value;
    let wrongAnswerText = document.forms.newQuestionForm.elements.wrongAnswerInput.value;
    document.getElementById("qestionsDiv").appendChild(createQestionDiv(questionText, correctAnswerText, wrongAnswerText));
}

function createQestionDiv(questionText, correctAnswerText, wrongAnswerText) {
    let newDiv = document.createElement("div");
    newDiv.className = "qestionDiv";
    newDiv.appendChild(createP(questionText, true));
    newDiv.appendChild(createP(correctAnswerText, false));
    newDiv.appendChild(createP(wrongAnswerText, false));
    return newDiv;
}

function createP(text, isUnderlined) {
    let p = document.createElement('p');
    p.innerText = text;
    if(isUnderlined) {
        p.style.textDecoration = "underline";
    }
    return p;
}