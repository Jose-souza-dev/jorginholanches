function toggleDiv(divId) {
    var div = document.getElementById(divId);
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}



// Declarando constantes relativas a dias, horas, minutos e segundos.
// 1º vamos pegar todos os elementos lá no html

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = " 14 nov 2025";

function countdown(){

    const newYearsDate = new Date(newYears);
    //Constante para a data atual
    const currentDate = new Date();

    //Constante para representar os segundos
    const totalSeconds = (newYearsDate - currentDate)/1000;

    // Constante de dias
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
