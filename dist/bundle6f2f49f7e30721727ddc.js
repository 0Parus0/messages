/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var hash = window.location.hash;
var message = atob(hash.replace('#', ''));
if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerText = message;
}
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');
  var input = document.querySelector('#message-input');
  var encrypted = btoa(input.value);
  var linkInput = document.querySelector('#link-input');
  linkInput.value = "".concat(window.location, "#").concat(encrypted);
  linkInput.select();
});
/******/ })()
;
//# sourceMappingURL=bundle6f2f49f7e30721727ddc.js.map