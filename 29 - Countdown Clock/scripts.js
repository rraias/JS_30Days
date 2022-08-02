let countdown;
const fullDisplay = document.querySelector(".display")
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll('[data-time]');


function timer (seconds){
    clearInterval(countdown); //Limpar qualquer intervalo e prevenir que vários timers sejam iniciados.
    fullDisplay.classList.remove("shake")
    const now = Date.now();
    const then = now + seconds * 1000; //1000 Ms
    displayTimeLeft(seconds)
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if(secondsLeft < 0){
            fullDisplay.classList.add("shake")
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
        displayEndTime(then)
    }, 1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60 //Divide o valor e captura a "sobra". É o módulo;
    const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    timerDisplay.textContent = display
    document.title = display
    console.log(seconds)
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : 12}:${minutes < 10 ? "0" : ""}${minutes}`

}

buttons.forEach(button => button.addEventListener("click", startTimer ));

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds)
}

//Se o elemento possui um nome, podemos acessá-lo diretamente, como demonstrado abaixo:

document.customForm.addEventListener("submit", function(e){ 
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60)
    this.reset()
})