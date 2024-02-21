console.log("connected");

function buyTicket(elementId) {
  // step 1: hide the banner section
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");
  const transportScreen = document.getElementById("transport");
  transportScreen.classList.remove("hidden");
  getrandomNumber();
}

function getrandomNumber() {
  const seatString =
    "A1A2A3A4B1B2B3B4C1C2C3C4D1D2D3D4E1E2E3E4F1F2F3F4G1G2G3G4H1H2H3H4I1I3I4J1J2J3J4";
  const seats = seatString.split(" ");
  console.log(seats);
}
