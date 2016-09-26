"use strict";

const sec = 1;
const min = 60*sec;
const hour = 60*min;

var f00 = (n) => (n<10) ? "0"+n : String(n);
var calcTime = (dist, speed) => (dist / speed) * hour;  // seconds
var calcDist = (time, speed) => speed * time / hour;    // meters
var calcPace = (time, dist) => time / dist * 1000;      // seconds(/km)
var calcSpeed = (time, dist) => dist * hour / time;     // meters(/hour)

/* ============================== */

function setTime(time, changed){
    let hms = [time/hour, Math.floor(time/min)%60, time%60].map(Math.floor);
    elTime.value = hms.map(f00).join(":");
}

function setDist(dist, changed){
    let spanDist = document.getElementById("spanDist");
    spanDist.innerHTML = (dist/1000).toFixed(1) + "km";
    elDist.value = dist;
    
    if (timeFix.checked){
        let speed = calcSpeed(parseTime(elTime.value), dist);
        if (changed) setSpeed(speed, false);
    } else{
        let time = calcTime(elDist.value, elSpeed.value);
        setTime(time, false);
    }
}

function setSpeed(speed, changed){
    let spanPace = document.getElementById("spanPace");
    let spanSpeed = document.getElementById("spanSpeed");

    let kph = (speed/1000);
    let mpk = (60/kph);
    let ms = [mpk, (mpk%1)*60].map(Math.floor).map(f00).join(":");

    spanPace.innerHTML = ms + "/km";
    spanSpeed.innerHTML = kph.toFixed(1) + "kph";
    elSpeed.value = speed;

    if (timeFix.checked){
        let dist = calcDist(parseTime(elTime.value), speed);
        if (changed) setDist(dist, false);
    } else{
        let time = calcTime(elDist.value, elSpeed.value);
        setTime(time, true);
    }
}
