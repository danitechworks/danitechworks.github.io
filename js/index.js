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

const terminalLines = document.querySelectorAll(
  ".terminal-command, .terminal-skill",
);
const speed = 8;

let currentLine = 0;

const texts = [];

terminalLines.forEach((line) => {
  const text = line.querySelector(".typewriter-text");
  texts.push(text.textContent);
  text.textContent = "";
  line.style.visibility = "hidden";
});

function typeLine() {
  if (currentLine >= terminalLines.length) {
    return;
  }

  let i = 0;
  const line = terminalLines[currentLine];
  const text = line.querySelector(".typewriter-text");
  const txt = texts[currentLine];

  line.style.visibility = "visible";

  function typeCharacter() {
    if (i < txt.length) {
      text.textContent += txt.charAt(i);
      i++;
      setTimeout(typeCharacter, speed);
    } else {
      currentLine++;
      setTimeout(typeLine, 300);
    }
  }

  typeCharacter();
}

const knowledgeSection = document.querySelector("#knowledge");
let terminalStarted = false;

function startTerminalAnimation() {
  if (terminalStarted) {
    return;
  }

  terminalStarted = true;
  typeLine();
}

if (knowledgeSection && "IntersectionObserver" in window) {
  const terminalObserver = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        startTerminalAnimation();
        observer.disconnect();
      }
    },
    { threshold: 0.35 },
  );

  terminalObserver.observe(knowledgeSection);
} else {
  startTerminalAnimation();
}

const weatherCard = document.querySelector(".weatherCard");
const WEATHER_KEY = "735aafa53526ebaad3622866aa203515";

(async () => {
  if (!weatherCard) return;
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${WEATHER_KEY}&units=metric`,
    );
    if (!res.ok) throw new Error();
    const {
      name,
      main: { temp, humidity },
      weather: [{ description, icon }],
    } = await res.json();
    weatherCard.style.display = "flex";
    weatherCard.innerHTML = `
      <h3 class="cityDisplay">${name}</h3>
      <p class="tempDisplay">${temp}°C</p>
      <p class="humidityDisplay">Humidity: ${humidity}%</p>
      <p class="descDisplay">${description}</p>
      <img class="iconDisplay" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
    `;
  } catch {
    weatherCard.style.display = "flex";
    weatherCard.innerHTML =
      '<p class="errorDisplay">Could not fetch Stockholm weather</p>';
  }
})();
