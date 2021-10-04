
document.getElementById("button1").addEventListener("click", function () {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then((res) => res.json())
    .then((jsonResponse) => displayJoke(jsonResponse))
    .catch(() => displayError());

});

function displayJoke(jokeObject) {
  document.getElementById("setup").innerHTML = jokeObject.setup;
  document.getElementById("delivery").innerHTML = jokeObject.delivery;
  document.getElementById("error").innerHTML = "";
};

function displayError() {
  document.getElementById("error").innerHTML = "Oh no's! Something went worng! :O";
};