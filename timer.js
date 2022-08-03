

"use strict"

var showTimerBtn = document.querySelector(".timer").firstElementChild;
showTimerBtn.addEventListener('click', showTimer);




function showTimer() {
    //var used for timer; 
    var data = new Date;
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    var session = "AM";

    var time = document.createElement('h1');
    var div = document.querySelector('.showInfo');
    time.textContent = h + ":" + m + ":" + s + " " + session

    h = (h < 10) ? (h = "0" + h) : (h = h);
    m = (m < 10) ? (m = "0" + m) : (m = m);
    s = (s < 10) ? (s = "0" + s) : (s = s);
    session = (h > 12) ? (session = "PM") : (session = session);

    // manca solo capire come printare questi valori a schermo tramite il click della funzione;
    //console.log(time)
}



