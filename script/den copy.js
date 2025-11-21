
    var myText = '17. 6. 2023 ve 13:30 Kostel sv. Matouše Deštné v Orl. h.';
    var myArray = myText.split("");
    var loopTimer;
    var targetElement = document.getElementById("type_obrad");
  
    // Clear existing text in the target element
    targetElement.innerHTML = '';
  
    function frameLooper() {
      if(myArray.length > 0) {
        targetElement.innerHTML += myArray.shift();
      } else {
        clearTimeout(loopTimer);
        return false;
      }
      loopTimer = setTimeout(frameLooper, 70);
    }
  
    frameLooper();
  

  