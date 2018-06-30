window.onload = init;
let displayEle, drumeles;
function init() {
  displayEle = document.getElementById('display');
  drumEles = document.getElementsByClassName('drum-pad');
}

function manageClick(ele) { 
  displayEle.innerHTML = ele.parentElement.firstElementChild.innerHTML;
  ele.firstElementChild.play();  
}
