function checkAnswer() {
   let correctAnswer ="4";
 const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
 function comparison() {
    if (correctAnswer === userAnswer) {
        document.getElementById('feedback').textContent="Correct! Well done.";
        
    } else {
        document.getElementById('feedback').textContent="That's incorrect. Try again!";


        
    }
    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    
 }

}