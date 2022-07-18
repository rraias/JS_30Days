const player = document.querySelector(".player")
const vid = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button");
const progressBar = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const rangeButtons = document.querySelectorAll('[type="range"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const fullscreenButton = document.querySelector(".fullscreen")

let mousedown = false;
let isFull = false;
vid.addEventListener("click", playVid);
vid.addEventListener("timeupdate", handleProgress);
playButton.addEventListener("click", playVid);
skipButtons.forEach(button => button.addEventListener("click", skip));
rangeButtons.forEach(button => button.addEventListener("input", handleRange));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
fullscreenButton.addEventListener("click", setFullscreen )

function playVid() {
    if (vid.currentTime > 0 && !vid.paused && !vid.ended) {
        vid.pause()
        playButton.innerHTML = "►"
    }
    else {
        vid.play()
        playButton.innerHTML = "▌▌"
    }
};

function handleRange() {
    vid[this.name] = this.value
};

function skip() {
    vid.currentTime += parseFloat(this.dataset.skip)
};

function handleProgress() {
    progressBar.style.flexBasis = (vid.currentTime / vid.duration) * 100 + "%"
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * vid.duration;
    vid.currentTime = scrubTime;
}

function setFullscreen(){
    if(isFull == false){
        player.requestFullscreen()
        isFull = true
    }
     else {
        document.exitFullscreen()
        isFull = false
    }
}