

"use strict"


var showTimerBtn = document.querySelector(".timer").firstElementChild;
showTimerBtn.addEventListener('click', showTimer);

var hidetimerBtn = document.querySelector("#hide");
hidetimerBtn.addEventListener('click', hideTimer);
hidetimerBtn.style.display = "none";




function showTimer() {
    //var used for timer; 
    var data = new Date;
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    var session = "AM";
    var clicked = false;
    var time = document.createElement('h1');
    var div = document.querySelector('.showInfo');
    div.appendChild(time);

    h = (h < 10) ? (h = "0" + h) : (h = h);
    m = (m < 10) ? (m = "0" + m) : (m = m);
    s = (s < 10) ? (s = "0" + s) : (s = s);
    session = (h > 12) ? (session = "PM") : (session = session);


    if (clicked == false) {
        time.textContent = h + ":" + m + ":" + s + " " + session
        time.style.color = "black"
        time.style.fontFamily = 'Source Sans Pro';
        time.style.fontSize = '40px';
        time.style.position = "relative";
        time.style.bottom = '300px'
        time.style.left = '77px'

        showTimerBtn.style.display = "none";
        hidetimerBtn.style.display = "unset";

        return clicked = true;

    } else if (clicked == true) {
        hideTimer(time);

        return clicked = false;
    }


    //setTimeout(showTimer, 1000)
    // manca solo capire come printare questi valori a schermo tramite il click della funzione;
    //console.log(time)
}


function hideTimer(time) {

    var time = document.querySelector(".showInfo").firstElementChild;
    //console.log(time); Funziona
    time.remove();
    console.log(time);

    showTimerBtn.style.display = "unset";
    hidetimerBtn.style.display = "none";

}



