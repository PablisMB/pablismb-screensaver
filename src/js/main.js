window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById("embed-iframe");
  const options = {
    uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
  };
  const callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

const form = document.querySelector("form");
const searchInput = document.querySelector("#song-search");
const searchButton = document.querySelector("#search-button");
const iframe = document.querySelector("#spotify-player");

const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time-text").textContent = currentTime;
};

setInterval(updateTime, 1000);

var canvas = document.getElementById("snow");
var ctx = canvas.getContext("2d");

var flakeCount = 150;
var flakeSize = 2;
var flakeSpeed = 1;

var flakes = [];

function drawSnow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (var i = 0; i < flakeCount; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * flakeSize,
      speed: Math.random() * flakeSpeed + 0.05,
      xSpeed: Math.random() * flakeSpeed - flakeSpeed / 2,
      ySpeed: Math.random() * flakeSpeed + flakeSpeed / 2,
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i];

      flake.y += flake.ySpeed * flake.speed;
      flake.x += flake.xSpeed * flake.speed;

      if (flake.y > canvas.height) {
        flake.y = 0;
      }

      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    }

    requestAnimationFrame(update);
  }

  update();
}

function stopSnow() {
  flakes = [];
  var canvas = document.getElementById("snow");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateBackgroundClass() {
  var time = new Date().getHours();
  var background = document.getElementById("bg");
  var timeText = document.getElementById("time-text");

  background.classList.remove(
    "early-morning",
    "morning",
    "late-morning",
    "noon",
    "afternoon",
    "late-afternoon",
    "evening",
    "night",
    "late-night"
  );

  timeText.classList.remove(
    "early-morning",
    "morning",
    "late-morning",
    "noon",
    "afternoon",
    "late-afternoon",
    "evening",
    "night",
    "late-night"
  );

  if (time >= 4 && time < 6) {
    background.classList.add("early-morning");
    timeText.classList.add("early-morning");
  } else if (time >= 6 && time < 10) {
    background.classList.add("morning");
    timeText.classList.add("morning");
  } else if (time >= 10 && time < 12) {
    background.classList.add("late-morning");
    timeText.classList.add("late-morning");
  } else if (time >= 12 && time < 13) {
    background.classList.add("noon");
    timeText.classList.add("noon");
  } else if (time >= 13 && time < 16) {
    background.classList.add("afternoon");
    timeText.classList.add("afternoon");
  } else if (time >= 16 && time < 18) {
    background.classList.add("late-afternoon");
    timeText.classList.add("late-afternoon");
  } else if (time >= 18 && time < 20) {
    background.classList.add("evening");
    timeText.classList.add("evening");
  } else if (time >= 20 && time < 24) {
    background.classList.add("night");
    timeText.classList.add("night");
  } else {
    background.classList.add("late-night");
    timeText.classList.add("late-night");
  }
}

var languageSelector = document.getElementById("lg-selector");
var timeChangingBackgroundChecked = document.getElementById("time-bg-checkbox");
var settingsCheckbox = document.getElementById("settings-checkbox");
var themeRadios = document.getElementsByName("themepicker");
var settingsMenu = document.getElementById("settings-menu");
var settingsWrap = document.getElementById("settings-wrapper");
var settings = document.getElementById("settings");
var checkmark = document.getElementById("checkmark");
var wrap = document.getElementById("bg");
var timeText = document.getElementById("time-text");
var themeSettingsCheckbox = document.getElementById("theme-settings-checkbox");
var moreThemesPanel = document.getElementById("more-themes-panel");
var closeThemePanel = document.getElementById("close-theme-panel");
var degRange = document.getElementById("deg-range");
var degreesValue = document.getElementById("degrees-value");
var bgDegrees = degRange.value;
var degNumberDegrees = document.getElementById("degNumberValue");
var defaultbgDegrees = -135;
var spotifyCheckbox = document.getElementById("spotify-checkbox");
var spotifyMenu = document.getElementById("spotify-menu");
var spotifyWrap = document.getElementById("spotify-wrapper");
var spotifySvg = document.getElementById("spotify-svg");

// Text vars
var chooseThemeText = document.getElementById("text-choose-theme");
var rotationInfoText = document.getElementById("degrees-info");
var changeColorOnTimeText = document.getElementById("changeColorbasedOnTime");
var snowToggleText = document.getElementById("snowonoroff");
var closeThemePanelText = document.getElementById("close-theme-panel-text");

if (localStorage.getItem("language") === null) {
  localStorage.setItem("language", "en");
}

// check if language is already set in localStorage
var language = localStorage.getItem("language");
if (language === "en") {
  chooseThemeText.innerHTML = "Choose theme";
  rotationInfoText.innerHTML = "Rotation of the current background:";
  changeColorOnTimeText.innerHTML = "Change color based on time";
  snowToggleText.innerHTML = "Snow?";
  closeThemePanelText.innerHTML = "More themes";
}

if (language === "es") {
  chooseThemeText.innerHTML = "Elige entre tema";
  rotationInfoText.innerHTML = "Rotación del fondo actual:";
  changeColorOnTimeText.innerHTML = "Cambiar el color según la hora";
  snowToggleText.innerHTML = "Nieve?";
  closeThemePanelText.innerHTML = "Más temas";
}

if (language === "fr") {
  chooseThemeText.innerHTML = "Choisir un thème";
  rotationInfoText.innerHTML = "Rotation du fond actuel:";
  changeColorOnTimeText.innerHTML = "Changer la couleur en fonction de l'heure";
  snowToggleText.innerHTML = "Neige?";
  closeThemePanelText.innerHTML = "Plus de thèmes";
}

languageSelector.addEventListener("change", function () {
  var language = languageSelector.value;
  localStorage.setItem("language", language);

  if (language === "en") {
    chooseThemeText.innerHTML = "Choose theme";
    rotationInfoText.innerHTML = "Rotation of the current background:";
    changeColorOnTimeText.innerHTML = "Change color based on time";
    snowToggleText.innerHTML = "Snow?";
    closeThemePanelText.innerHTML = "More themes";
  }

  if (language === "es") {
    chooseThemeText.innerHTML = "Elige entre tema";
    rotationInfoText.innerHTML = "Rotación del fondo actual:";
    changeColorOnTimeText.innerHTML = "Cambiar el color según la hora";
    snowToggleText.innerHTML = "Nieve?";
    closeThemePanelText.innerHTML = "Más temas";
  }

  if (language === "fr") {
    chooseThemeText.innerHTML = "Choisir un thème";
    rotationInfoText.innerHTML = "Rotation du fond actuel:";
    changeColorOnTimeText.innerHTML =
      "Changer la couleur en fonction de l'heure";
    snowToggleText.innerHTML = "Neige?";
    closeThemePanelText.innerHTML = "Plus de thèmes";
  }
});

if (localStorage.getItem("language") !== null) {
  languageSelector.value = localStorage.getItem("language");
}

var snowCheckbox = document.getElementById("snow-checkbox");

snowCheckbox.addEventListener("change", function () {
  if (this.checked) {
    var snow = true;
    localStorage.setItem("snow-checkbox", snow);
    drawSnow();
  } else {
    var snow = false;
    localStorage.setItem("snow-checkbox", snow);
    stopSnow();
  }
});

function checkIfSnowChecked() {
  var snow = localStorage.getItem("snow-checkbox");
  if (snow === "true") {
    snowCheckbox.checked = true;
    drawSnow();
  } else {
    snowCheckbox.checked = false;
    stopSnow();
  }
}

checkIfSnowChecked();
setInterval(checkIfSnowChecked, 1000);

timeChangingBackgroundChecked.addEventListener("change", function () {
  if (this.checked) {
    var bgTime = true;
    localStorage.setItem("time-bg-checkbox", bgTime);
    updateBackgroundClass();
  } else {
    var bgTime = false;
    localStorage.setItem("time-bg-checkbox", bgTime);
    var background = document.getElementById("bg");
    var timeText = document.getElementById("time-text");
    background.classList.remove(
      "early-morning",
      "morning",
      "late-morning",
      "noon",
      "afternoon",
      "late-afternoon",
      "evening",
      "night",
      "late-night"
    );

    timeText.classList.remove(
      "early-morning",
      "morning",
      "late-morning",
      "noon",
      "afternoon",
      "late-afternoon",
      "evening",
      "night",
      "late-night"
    );
  }
});

function checkIfbgTimeChecked() {
  var bgTime = localStorage.getItem("time-bg-checkbox");
  if (bgTime === "true") {
    timeChangingBackgroundChecked.checked = true;
    updateBackgroundClass();
  } else {
    timeChangingBackgroundChecked.checked = false;
  }
}

checkIfbgTimeChecked();
setInterval(checkIfbgTimeChecked, 1000);

var bgTime = localStorage.getItem("time-bg-checkbox");
if (bgTime === "true") {
  timeChangingBackgroundChecked.checked = true;
  updateBackgroundClass();
} else {
  timeChangingBackgroundChecked.checked = false;
}

degNumberDegrees.value = degRange.value;
var newPlaceHolder = degNumberDegrees.value;

if (localStorage.getItem("deg-value") === null) {
  bgDegrees = defaultbgDegrees;
  localStorage.setItem("deg-value", bgDegrees);
  degRange.value = bgDegrees;
} else {
  bgDegrees = localStorage.getItem("deg-value");
  degRange.value = bgDegrees;
}

degRange.addEventListener("input", function () {
  bgDegrees = degRange.value;
  degNumberDegrees.value = degRange.value;
  var newPlaceHolder = degNumberDegrees.value;
  localStorage.setItem("deg-value", bgDegrees);
  document.documentElement.style.setProperty(
    "--gradient-angle",
    newPlaceHolder + "deg"
  );
});

degNumberDegrees.addEventListener("input", function () {
  bgDegrees = degNumberDegrees.value;
  degRange.value = degNumberDegrees.value;
  var newPlaceHolder = degNumberDegrees.value;
  localStorage.setItem("deg-value", bgDegrees);
  document.documentElement.style.setProperty(
    "--gradient-angle",
    newPlaceHolder + "deg"
  );

  if (degNumberDegrees.value > 360) {
    degNumberDegrees.value = 360;
  } else if (degNumberDegrees.value < -360) {
    degNumberDegrees.value = -360;
  }

  if (degNumberDegrees.value === "") {
    degNumberDegrees.value = 0;
    document.documentElement.style.setProperty(
      "--gradient-angle",
      degNumberDegrees.value + "deg"
    );

    localStorage.setItem("deg-value", degNumberDegrees.value);

    degRange.value = degNumberDegrees.value;
  }
});

document.documentElement.style.setProperty(
  "--gradient-angle",
  bgDegrees + "deg"
);

var bgDegrees = localStorage.getItem("deg-value");
degNumberDegrees.value = bgDegrees;

settingsCheckbox.addEventListener("click", function () {
  settingsMenu.classList.toggle("active");
  settings.classList.toggle("active");
  settingsWrap.classList.toggle("active");
  checkmark.classList.toggle("active");
  moreThemesPanel.classList.remove("active");
});

spotifyCheckbox.addEventListener("click", function () {
  spotifyMenu.classList.toggle("active");
  spotifyWrap.classList.toggle("active");
  spotifySvg.classList.toggle("active");
});

themeSettingsCheckbox.addEventListener("click", function () {
  moreThemesPanel.classList.toggle("active");
});

closeThemePanel.addEventListener("click", function () {
  moreThemesPanel.classList.remove("active");
});

for (var i = 0; i < themeRadios.length; i++) {
  themeRadios[i].addEventListener("click", function () {
    var themeclass = this.className;
    wrap.classList.remove(
      "blue-theme",
      "green-theme",
      "red-theme",
      "purple-theme",
      "orange-theme",
      "yellow-theme",
      "pink-theme",
      "grey-theme",
      "black-theme",
      "brown-theme",
      "black-theme",
      "white-theme",
      "lightblue-theme",
      "lightgreen-theme"
    );

    timeText.classList.remove(
      "blue-theme",
      "green-theme",
      "red-theme",
      "purple-theme",
      "orange-theme",
      "yellow-theme",
      "pink-theme",
      "grey-theme",
      "black-theme",
      "brown-theme",
      "black-theme",
      "white-theme",
      "lightblue-theme",
      "lightgreen-theme"
    );
    wrap.classList.add(themeclass);
    timeText.classList.add(themeclass);
    localStorage.setItem("theme", themeclass);
  });
}

var themeClass = localStorage.getItem("theme");

wrap.classList.remove(
  "blue-theme",
  "green-theme",
  "red-theme",
  "purple-theme",
  "orange-theme",
  "yellow-theme",
  "pink-theme",
  "grey-theme",
  "black-theme",
  "brown-theme",
  "black-theme",
  "white-theme",
  "lightblue-theme",
  "lightgreen-theme"
);

timeText.classList.remove(
  "blue-theme",
  "green-theme",
  "red-theme",
  "purple-theme",
  "orange-theme",
  "yellow-theme",
  "pink-theme",
  "grey-theme",
  "black-theme",
  "brown-theme",
  "black-theme",
  "white-theme",
  "lightblue-theme",
  "lightgreen-theme"
);

if (themeClass) {
  wrap.classList.add(themeClass);
  timeText.classList.add(themeClass);
  document.getElementById(themeClass).checked = true;
}

if (localStorage.getItem("theme") === null) {
  wrap.classList.add("blue-theme");
  timeText.classList.add("blue-theme");
} else {
  wrap.classList.add(themeClass);
  timeText.classList.add(themeClass);
}

const clientId = "c2e0cd2315e24a849a2332b5c571db01";
const clientSecret = "ba77c6a6b3904c5a9b8c5d081f44ba61";
let accessToken = "";

const getAccessToken = () => {
  const url = "https://accounts.spotify.com/api/token";
  const data = "grant_type=client_credentials";
  const authString = `${clientId}:${clientSecret}`;
  const base64Auth = btoa(authString);

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${base64Auth}`,
    },
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data.access_token)
    .catch((error) => console.error(error));
};

const updateIframeSrc = (trackId) => {
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
  iframe.setAttribute("src", embedUrl);
};

searchButton.addEventListener("click", async () => {
  const query = encodeURIComponent(searchInput.value);
  const url = `https://api.spotify.com/v1/search?type=track&q=${query}`;

  if (!accessToken) {
    accessToken = await getAccessToken();
  }

  fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const trackId = data.tracks.items[0].id;
      updateIframeSrc(trackId);
    })
    .catch((error) => console.error(error));
});
