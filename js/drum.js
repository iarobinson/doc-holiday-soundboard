window.onload = init;
let displayEle, drumeles;
function init() {
  displayEle = document.getElementById('display');
  drumEles = document.getElementsByClassName('drum-pad');
  console.log(drumEles[0]);
  console.log(drumEles[0].id);
  // drumEles.addEventListeners('click', displayClick);
  
  // document.getElementById("myBtn").addEventListener("click", displayDate);

}

function displayClick() { 
  // console.log(displayEle);
  displayEle.innerHTML = "clicked";
}
