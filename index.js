document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var name = document.getElementById('name').value;
  var location = document.getElementById('location').value;
  var comment = document.getElementById('comment').value;

  var commentElement = document.createElement('div');
  commentElement.className = 'comment';
  commentElement.innerHTML = '<h4>' + name + ' - ' + location + '</h4><p>' + comment + '</p>';

  document.getElementById('comments').appendChild(commentElement);

  // Limpiar los campos del formulario
  document.getElementById('name').value = '';
  document.getElementById('location').value = '';
  document.getElementById('comment').value = '';
});

