const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Do something with the username and password, such as sending them to a server for authentication.
});