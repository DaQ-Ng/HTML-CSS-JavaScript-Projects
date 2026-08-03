//new Date(year, month, day, hour, minute)
// Note: month is 0-indexed, so January is 0, February is 1, etc.
const launchDate = new Date(2026, 11, 1, 12, 0); // January 1st, 2027 at 12:00PM

//DOM ELEMENTS
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const emailForm = document.getElementById("email-form");
const successMessage = document.getElementById("success");

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    // Countdown has ended
    dayEl.textContent = "00";
    hourEl.textContent = "00";
    minuteEl.textContent = "00";
    secondEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // 1 second * 1 minute * 1 hour * 1 day
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // remainder of days, converted to hours
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // remainder of hours, converted to minutes
  const seconds = Math.floor((diff % (1000 * 60)) / 1000); // remainder of minutes, converted to seconds

  //1000 * 60 * 60 * 24 = ms in one full day
  //diff % (that) → remainder after removing all full days → leftover ms (less than a day)
  //1000 * 60 * 60 = ms in one hour
  //leftover / (that) → converts leftover ms into hours
  //Math.floor(...) → rounds down to a whole number

  dayEl.textContent = days.toString().padStart(2, "0"); //pads the left side with "0" until the string is 2 characters long EX: 02
  hourEl.textContent = hours.toString().padStart(2, "0");
  minuteEl.textContent = minutes.toString().padStart(2, "0");
  secondEl.textContent = seconds.toString().padStart(2, "0");
}
// init call
updateCountdown(); // this run once when the page loads, so the countdown is displayed immediately without waiting for the first interval to complete

// update every second
setInterval(updateCountdown, 1000);

emailForm.addEventListener("submit", (e) => {
  e.preventDefault(); //this will prevent the form from submitting and refreshing the page

  const button = emailForm.querySelector("button");
  button.innerHTML = "<i class='fa-solid fa-spinner'></i>";
  button.disabled = true;

  // simulate an api call
  setTimeout(() => {
    emailForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }, 1000);
});
