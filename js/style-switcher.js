// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");

  // Save the style switcher state to local storage
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    localStorage.setItem('styleSwitcher', 'open');
  } else {
    localStorage.removeItem('styleSwitcher');
  }
});

// Hide style-switcher
window.addEventListener("mousewheel", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
    localStorage.removeItem('styleSwitcher');
  }
});

window.addEventListener("touchmove", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
    localStorage.removeItem('styleSwitcher');
  }
});

// Theme colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Theme light and dark mode
const dayNight = document.querySelector(".day-night");

// Function to apply theme
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon");
  } else {
    document.body.classList.remove('dark');
    dayNight.querySelector("i").classList.add("fa-moon");
    dayNight.querySelector("i").classList.remove("fa-sun");
  }
}

// Load theme from local storage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  // Default theme
  applyTheme('light');
}

dayNight.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon");
    localStorage.setItem('theme', 'dark');
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
    dayNight.querySelector("i").classList.remove("fa-sun");
    localStorage.setItem('theme', 'light');
  }
});

// Apply style switcher state from local storage
const savedStyleSwitcherState = localStorage.getItem('styleSwitcher');
if (savedStyleSwitcherState) {
  document.querySelector(".style-switcher").classList.add("open");
}
