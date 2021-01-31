
let result = document.querySelector('.result');

function setIntervalX(callback, delay, repetitions) {
    let x = 0;
    let intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

function createTag(data) {
    let tag = document.createElement("div");
    let text = document.createTextNode(data);
    tag.appendChild(text);
    result.appendChild(tag);
}

setIntervalX(function () {
    fetch('http://localhost:9999/')
      .then(response => response.text())
      .then(data => createTag(data));
}, 500, 7);
