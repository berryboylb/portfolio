const fifthSec = document.querySelector(".fifthsec");


fifthSec.addEventListener("mouseover", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 60, 2000);
    counter("count2", 100, 60, 1800);
    counter("count3", 0, 40, 2000);
   });
   