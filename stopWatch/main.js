window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var  ButtonStart = document.getElementById("button-start");
    var  ButtonStop = document.getElementById("button-stop");
    var  ButtonReset = document.getElementById("button-restart")
    var Interval ; // to store timer vaules

        //this function will run when click on start

   function startTimer(){
          tens++;

       if(tens < 9) {
        appendTens.innerHTML = "0" + tens;
       }
       if(tens > 9) {
        appendTens.innerHTML = tens;
       }
       if(tens > 99) {
           seconds++;
           appendSeconds.innerHTML = "0" + seconds;
           tens = 0;
           appendTens.innerHTML = "0"+ 0;
       }
       if(seconds > 9){
           appendSeconds.innerHTML = seconds;
       }
   }
    ButtonStart.onclick = function(){
    Interval = setInterval(startTimer);
  };

     ButtonStop.onclick = function(){
        clearInterval(Interval);
    };
    
    ButtonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }
}

  
 
