document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.getElementById('type_obrad');
  if (!targetElement) return;
  const myText = '13. srpna 2026';
  let loopTimer = null;
  function startTyping() {
    // reset
    clearTimeout(loopTimer);
    targetElement.innerHTML = '';
    let myArray = myText.split('');
    function frameLooper() {
      if (myArray.length > 0) {
        targetElement.innerHTML += myArray.shift();
        loopTimer = setTimeout(frameLooper, 70);
      }
    }
    frameLooper();
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startTyping(); // 👉 pokaždé znovu
      }
    });
  }, {
    threshold: 0.3
  });
  observer.observe(targetElement);
});