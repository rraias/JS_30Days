
setInterval(() => {
    var actualDate = new Date();
    var hours = actualDate.getHours();
    var minutes = actualDate.getMinutes();
    var seconds = actualDate.getSeconds();

    var hourElement = document.querySelector(".hour-hand")
    var minuteElement = document.querySelector(".min-hand")
    var secondElement = document.querySelector(".sec-hand")


    hourElement.style.transform = `rotate( ${hours * 30}deg )`;
    minuteElement.style.transform = `rotate( ${minutes * 6}deg )`;
    secondElement.style.transform = `rotate( ${seconds * 6}deg )`;
}, 1000);
