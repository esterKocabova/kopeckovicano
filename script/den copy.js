
    var myText = 'Obřad bude probíhat dopoledne v kostele sv. Jana a Pavla ve Frýdku-Místku. Poté bude následovat přejezd na svatební hostinu na Chatě Dukle na Čeladné (20km). Přesný harmonogram bude brzy upřesněn na našem webu.';
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