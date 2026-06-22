// Play construction video on hover for coming soon project cards
document.querySelectorAll(".projects-card").forEach((card) => {
  const video = card.querySelector(".hover-video");
  if (video) {
    video.load();
    card.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});

// Typewriter effect for Knowledge section
const speed = 8;
const gap = 300; // Pause at the end of each line
const lines = [...document.querySelectorAll(".typewriter-text")];
let idx = 0;

// Hides text until typewriter effect starts
lines.forEach((el) => {
  el.dataset.text = el.textContent;
  el.textContent = "";
  el.closest("li").style.visibility = "hidden";
});

// Starts typing hidden text
function type() {
  if (idx >= lines.length) return;
  const el = lines[idx];
  el.closest("li").style.visibility = "visible";
  const text = el.dataset.text;
  let i = 0;
  function write() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(write, speed);
    } else {
      idx++;
      setTimeout(type, gap);
    }
  }
  write();
}

// Watches for when section scrolls into view to start effect
const section = document.querySelector("#knowledge");
if (section && "IntersectionObserver" in window) {
  const obs = new IntersectionObserver(
    ([e], o) => {
      if (e.isIntersecting) {
        o.disconnect();
        type();
      }
    },
    { threshold: 0.35 },
  );
  obs.observe(section);
  // If the effect is not supported, type immediately
} else {
  type();
}

// Weather API
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

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const isSv = document.documentElement.lang === "sv";
  const msgs = isSv
    ? { name: "Ange ditt namn", email: "Ange en giltig e-postadress", message: "Skriv ett meddelande" }
    : { name: "Please enter your name", email: "Please enter a valid email address", message: "Please enter your message" };

  const fields = {
    name: { error: document.getElementById("name-error"), valid: (v) => v.trim() !== "" },
    email: {
      error: document.getElementById("email-error"),
      valid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    },
    message: { error: document.getElementById("message-error"), valid: (v) => v.trim() !== "" },
  };

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let allValid = true;
    for (const [id, field] of Object.entries(fields)) {
      const input = document.getElementById(id);
      const val = input.value;
      if (!field.valid(val)) {
        field.error.textContent = msgs[id];
        field.error.style.display = "block";
        allValid = false;
      } else {
        field.error.textContent = "";
      }
    }
    if (!allValid) return;

    const formData = new FormData(contactForm);
    try {
      const res = await fetch(contactForm.action, { method: "POST", body: formData });
      if (res.ok) {
        contactForm.innerHTML = `<p class="form-success">${isSv ? "Tack! Meddelandet har skickats." : "Thank you! Your message has been sent."}</p>`;
      } else {
        throw new Error();
      }
    } catch {
      alert(isSv ? "Något gick fel. Försök igen." : "Something went wrong. Please try again.");
    }
  });
}
