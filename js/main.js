// var burguer= document.querySelector('.burguer');
// var menu= document.querySelector('.menu');
//
// function showMenu() {
//   menu.classList.remove('hidden');
//   menu.classList.add ('animation-menu');
// };
//
// function closeMenu() {
//   menu.classList.add('hidden');
// }
//
// burguer.addEventListener('click', showMenu);
// menu.addEventListener('click', closeMenu);

var burguer= document.querySelector('.burguer');
var menuLateral= document.querySelector('.menuLateral');

function showMenu() {
  menuLateral.classList.add('animation-menu');
};

function closeMenu() {
  menuLateral.classList.remove('animation-menu');
}

burguer.addEventListener('click', showMenu);
menuLateral.addEventListener('click', closeMenu);




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
