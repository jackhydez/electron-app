
let result = document.querySelector('#result')

fetch('http://localhost:9999/')
  .then(response => response.text())
  .then(data => result.textContent = data);

