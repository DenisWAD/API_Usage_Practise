const eventClicked = function () { console.log("Button was clicked function expression") }

document.getElementById("button1").addEventListener("click", eventClicked);


function clickedButton() {
  console.log("Button was clicked")
}

fetch('https://reqres.in/api/users')
  .then(res => console.log(res))