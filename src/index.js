// Get all the buttons on the page
const buttons = document.querySelectorAll("button");

// Loop through the buttons and add a click event
buttons.forEach(function (button) {
  button.addEventListener(
    "click",

    // Callback function
    function (event) {
      console.log(event.target.innerText);
    }
  );
});
