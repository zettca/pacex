"use strict";

const sec = 1;
const min = 60*sec;
const hour = 60*min;

var elTime = document.getElementById("time");
var elDist = document.getElementById("dist");
var elSpeed = document.getElementById("speed");

elTime.oninput = onTime;
elDist.oninput = onDist;
elSpeed.oninput = onSpeed;

function setDist(d, update){
    let spanDist = document.getElementById("spanDist");
    spanDist.innerHTML = (d/1000).toFixed(1) + "km";
    elDist.value = d;
    
    let speed = calcSpeed(parseTime(elTime.value), d);
    if (update) setSpeed(speed, false);
}

function setSpeed(p, update){
    let spanSpeed = document.getElementById("spanSpeed");
    spanSpeed.innerHTML = (p/1000).toFixed(1) + "kph";
    elSpeed.value = p;
    
    let dist = calcDist(parseTime(elTime.value), p);
    if (update) setDist(dist, false);
}

function onTime(e){
    console.log(e.target.value);
    let speed = calcSpeed(parseTime(elTime.value), elDist.value);
    setSpeed(speed, false);
}

function onDist(e){
    console.log(e.target.value);
    setDist(e.target.value, true);
}

function onSpeed(e){
    console.log(e.target.value);
    setSpeed(e.target.value, true);
}

function parseTime(time){
    if (time.toString().indexOf(":") !== -1){
        let splits = time.split(":");
        time = (splits[0]*hour) + (splits[1]*min);
        if (splits[2]) time +=  splits[2]*sec;
    }
    console.log("TIME: " + time);
    return parseInt(time, 10);
}

function calcSpeed(time, dist){
    return (dist) / (time/hour);
}

function calcDist(time, speed){
    return speed * (time/hour);
}
