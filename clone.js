


   function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('.fifthsec');
const message = document.querySelector('#messages');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

   // message.textContent = messageText;

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

}, {
    passive: true
});