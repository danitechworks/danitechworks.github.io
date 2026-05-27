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
const apiKey = "735aafa53526ebaad3622866aa203515";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, icon }],
  } = data;
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h3");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const iconDisplay = document.createElement("img");

  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay");

  tempDisplay.textContent = `${temp}°C`;
  tempDisplay.classList.add("tempDisplay");

  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.classList.add("humidityDisplay");

  descDisplay.textContent = description;
  descDisplay.classList.add("descDisplay");

  iconDisplay.src = getWeatherEmoji(icon);
  iconDisplay.alt = description;
  iconDisplay.classList.add("iconDisplay");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(iconDisplay);
}

function getWeatherEmoji(weatherIcon) {
  return `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
