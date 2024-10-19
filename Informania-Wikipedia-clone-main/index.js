// index.js
var editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var contentDiv = this.closest('.content');
    var title = contentDiv.querySelector('.title').textContent;
    var text = contentDiv.querySelector('.text').textContent;

    localStorage.setItem('title', title);
    localStorage.setItem('text', text);

    window.location.href = 'editPage.html';
  });
});