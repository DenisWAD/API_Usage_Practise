document.getElementById("button1").addEventListener("click", eventClicked);


function clickedButton() {
  console.log("Button was clicked")
}

const eventClicked = function () { console.log("Button was clicked function expression") }