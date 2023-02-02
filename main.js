var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  var userNameInput = document.getElementById('name')[0].value;
  var userPostInput = document.getElementById('message')[0].value;
  var pName = document.createElement('p');
  var pPost = document.createElement('p');
  var userNameInputElement = document.createTextNode(userNameInput);
  var userPostInputElement = document.createTextNode(userPostInput);
  
  pPost.appendChild(userPostInputElement)
  pName.appendChild(userNameInputElement);
  
  document.getElementsByClassName('posts')[0].append(pName);
  document.getElementsByClassName('posts')[0].append(pPost);
});