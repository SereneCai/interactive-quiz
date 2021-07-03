const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector('.quiz-form');
const showScore = document.querySelector('.result');

form.addEventListener('submit', (event)=>{
    event.preventDefault(); //prevent default refresh
    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; //form, reference q1(name), value (a / b)

    //check answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
        
    });

    showScore.querySelector('span').textContent = `${score}%`;
    showScore.classList.remove('d-none');


});