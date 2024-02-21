console.log("connected");

function buyTicket() {
  // step 1: hide the banner section
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");
  const transportScreen = document.getElementById("transport");
  transportScreen.classList.remove("hidden");
}

// const seatString= document.querySelectorAll('.py-2')
const element = document.addEventListener("mouseup", justClick());

function justClick() {
  element.classList.add(red);
}
