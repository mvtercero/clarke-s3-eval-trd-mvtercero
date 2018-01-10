
var burguer= document.querySelector('.burguer');
var burguerClose= document.querySelector('.burguer-close');
var menuLateral= document.querySelector('.menuLateral');


function showMenu() {
  menuLateral.classList.toggle('animation-menu');
};

burguer.addEventListener('click', showMenu);
burguerClose.addEventListener('click', showMenu);

var container= document.querySelector('.container');
var buttonReason= document.querySelector('.button-text-reason');

buttonReason.addEventListener('click', addReason)

function addReason() {
  fetch("https://three-random-reasons-izwfjpgbqm.now.sh/")
  .then(function(response){
  return response.json();
})
.then(function(json){
  var newReason= json.reasons;
  var containerReason= "";
  for (var i = 0; i < newReason.length; i++) {
  containerReason += '<div class=""><h3 class="reason-title-mobile txt-center">' + newReason[i].title + '</h3><p class="reason-description txt-center">'+ newReason[i].description + '</p></div>';
  }

  container.innerHTML += containerReason
})

}
