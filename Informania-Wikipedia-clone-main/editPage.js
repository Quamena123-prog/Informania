// editPage.js
window.onload = function() {
  var title = localStorage.getItem('title');
  var text = localStorage.getItem('text');

  document.getElementById('title').value = title;
  document.getElementById('text').value = text;
};