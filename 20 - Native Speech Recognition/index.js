const div = document.querySelector(".words");
let p = document.createElement("p");
div.appendChild(p)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.interimResults = true


recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement("p");
        div.appendChild(p)
    }
});

recognition.addEventListener("end", recognition.start)

recognition.start()