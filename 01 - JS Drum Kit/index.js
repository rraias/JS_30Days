addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key= "${e.key}"]`);
    if(!audio) {return}
    audio.play();
    audio.currentTime = 0
    const active = document.querySelector(`.item[data-key= "${e.key}"]`)
    active.classList.add("is-active")
    setTimeout(() => {
        active.classList.remove("is-active")
    }, 100);
})
