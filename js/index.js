document.querySelectorAll(".projects-card").forEach((card) => {
  const video = card.querySelector(".hover-video");
  if (video) {
    video.load();
    card.addEventListener("mouseenter", () => {
      video.play().catch((e) => console.log("Play error:", e));
    });
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".weatherCard");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {}

function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  weatherCard.textContent = "";
  weatherCard.style.display = "flex";
}
