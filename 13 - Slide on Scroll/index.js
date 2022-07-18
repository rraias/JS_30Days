const elements = document.querySelectorAll('[data-anime]');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


function animate() {
    const calc = window.scrollY + (window.innerHeight * 0.50)
    elements.forEach(el => {
        if(calc > el.offsetTop){
            el.classList.add("animate")
        } else {
            el.classList.remove("animate")
        }
    })
}

window.addEventListener("scroll", debounce(animate, 10))