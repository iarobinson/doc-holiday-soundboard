window.onload = init;
let displayEle, drumeles;
function init() {
  displayEle = document.getElementById('display');
  drumEles = document.getElementsByClassName('drum-pad');

}

function displayClick() { 
  displayEle.innerHTML = "clicked";
}
