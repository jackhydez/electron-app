
let result = document.querySelector('#result')

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

function addTag(data) {
    var tag = document.createElement("div");
    var text = document.createTextNode(data);
    tag.appendChild(text);
    result.appendChild(tag);
}

setIntervalX(function () {
    fetch('http://localhost:9999/')
      .then(response => response.text())
      .then(data => addTag(data));
}, 1000, 5);
