const boxes = document.querySelectorAll(".input")

boxes.forEach(box => box.addEventListener("click", checkAll))

function checkAll(event) {
    let inBetween = false;
    if (event.shiftKey && this.checked) {
        boxes.forEach(box => {
            if (box === this || box === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                box.checked = true
            }
        })
    }
    lastChecked = this
}


