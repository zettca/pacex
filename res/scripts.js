"use strict";

const sec = 1;
const min = 60*sec;
const hour = 60*min;

const f00 = (n) => (n<10) ? "0"+n : String(n);
const calcTime = (dist, speed) => (dist / speed) * hour;  // seconds
const calcDist = (time, speed) => speed * time / hour;    // meters
const calcPace = (time, dist) => time / dist * 1000;      // seconds(/km)
const calcSpeed = (time, dist) => dist * hour / time;     // meters(/hour)

var timeLocked = true;

/* ============================== */

function toggleTimeLock(el){
    if (timeLocked){
        timeLocked = false;
        el.innerHTML = "Time Unlocked"
        el.style = ""
    } else{
        timeLocked = true;
        el.innerHTML = "Time Locked"
        el.style = "background:#AAA;"
    }
}

function setTime(time){
    let hms = [time/hour, Math.floor(time/min)%60, time%60].map(Math.floor);
    elTime.value = hms.map(f00).join(":");
}

function setDist(dist, keep){
    console.log("setDist", dist, keep);
    let spanDist = document.getElementById("spanDist");
    spanDist.innerHTML = "Distance " + (dist/1000).toFixed(1) + "km";
    elDist.value = dist;
    
    if (timeLocked){
        let speed = calcSpeed(parseTime(elTime.value), dist);
        if (keep === undefined) setSpeed(speed, true);
    } else{
        let time = calcTime(elDist.value, elSpeed.value);
        setTime(time);
    }
}

function setSpeed(speed, keep){
    console.log("setSpeed", speed, keep);
    let spanPace = document.getElementById("spanPace");

    let kph = (speed/1000);
    let mpk = (60/kph);
    let ms = [mpk, (mpk%1)*60].map(Math.floor).map(f00).join(":");

    spanPace.innerHTML = "Pace " + ms + "/km (" + kph.toFixed(1) + "kph)";
    elSpeed.value = speed;

    if (timeLocked){
        let dist = calcDist(parseTime(elTime.value), speed);
        if (keep === undefined) setDist(dist, true);
    } else{
        let time = calcTime(elDist.value, elSpeed.value);
        setTime(time);
    }
}
