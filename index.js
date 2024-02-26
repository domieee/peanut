// Your ScrollMagic code here

const cursor = document.querySelector(".cursor");
const container = document.querySelector(".sectionOne");

const cta = document.querySelector(".landingpage-cta");
const stroke = document.querySelector(".strokeBusiness");
const body = document.querySelector("body");

const ctaHeading = document.querySelector(".cta-heading");
const ctaSubtext = document.querySelector(".cta-subtext");
const sectionTwoHeading = document.querySelector(".section-two-heading");
const sectionTwoSubHeading = document.querySelector(".section-two-subheading");

const allrounder = document.querySelector(".allrounder");

const ctaButton = document.querySelector(".cta-button");
const vcsButton = document.querySelector(".vcs-button");

const taskDev = document.querySelector(".task-dev");

const taskDesign = document.querySelector(".task-design");
const taskCi = document.querySelector(".task-ci");

const secondBlob = document.querySelector("#blobSvg2");

let progressColor = "#0000ff";

const techno = document.querySelector(".techno");
let blobExpanded = false;
let blobTriggered = false;

function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrollPercentage = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = scrollPercentage + "%";
  progressBar.style.backgroundColor = progressColor;
}

function changeThemeColor(color) {
  // Find the existing theme-color meta tag
  var metaThemeColor = document.querySelector("meta[name=theme-color]");

  // If the meta tag exists, change its content attribute to the new color
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", color);
  } else {
    // If the meta tag does not exist, create one and append it to the <head>
    metaThemeColor = document.createElement("meta");
    metaThemeColor.name = "theme-color";
    metaThemeColor.content = color;
    document.getElementsByTagName("head")[0].appendChild(metaThemeColor);
  }
}

document.documentElement.scrollTop = 0;

var tween = TweenMax.to(".animate4", 1, { x: -1000 }); // Example tween
var controller = new ScrollMagic.Controller();

// build scene

// Define start and end scroll positions for the opacity change
const animationStartScrollY = 0; // Start changing opacity at this scroll position
const animationEndScrollY = 1000; // Finish changing opacity at this scroll position

// Function to update opacity based on scroll position
function updateOpacityOnScroll() {
  cursor.style.opacity = 1;
}

function convertNumber(n) {
  let convertedValue;

  if (n >= 90 && n <= 99) {
    convertedValue = 0.9;
  } else if (n >= 80 && n <= 89) {
    convertedValue = 0.8;
  } else if (n >= 70 && n <= 79) {
    convertedValue = 0.7;
  } else if (n >= 60 && n <= 69) {
    convertedValue = 0.6;
  } else if (n >= 50 && n <= 59) {
    convertedValue = 0.5;
  } else if (n >= 40 && n <= 49) {
    convertedValue = 0.4;
  } else if (n >= 30 && n <= 39) {
    convertedValue = 0.3;
  } else if (n >= 20 && n <= 29) {
    convertedValue = 0.2;
  } else if (n >= 10 && n <= 19) {
    convertedValue = 0.1;
  } else if (n < 1 && n > 0) {
    // For numbers between 0 and 1, not including 0 or 1
    convertedValue = Math.floor(n * 10) / 10;
  } else {
    return n; // Return the number as is if it doesn't match any condition
  }

  // Apply rounding down to one decimal place for the converted value
  return Math.floor(convertedValue * 10) / 10;
}

// Example usage
let numbers = [95, 85, 75, 45, 20, 10, 5, 0.208, 0.95];
let convertedNumbers = numbers.map(convertNumber);
console.log(convertedNumbers);

// Listen to scroll events
window.addEventListener("DOMContentLoaded", updateOpacityOnScroll);

function updateCursorPositionOnScroll() {
  const scrollTop = window.scrollY;

  // Section One Movement --->

  if (scrollTop >= 200) {
    cursor.style.opacity = 1;
  } else {
    ctaSubtext.style.top = "0%";
    ctaHeading.style.top = "0%";
  }

  if (scrollTop >= 250) {
    cursor.style.opacity = 1;

    ctaHeading.style.opacity = `${scrollTop / 3000}%`;
    ctaSubtext.style.opacity = 1;
  } else {
    ctaSubtext.style.top = "0%";
    ctaHeading.style.top = "0%";
  }

  if (scrollTop < 100) {
    cursor.style.opacity = 0;
    ctaSubtext.style.opacity = 0;
    ctaSubtext.style.top = "0%";
    ctaHeading.style.top = "0%";
  }

  if (scrollTop < 1500) {
    cursor.style.width = "200px";
    cursor.style.height = "200px";
    cursor.style.left = "50%";
    cursor.style.top = "50%";
  }

  if (scrollTop > 1500) {
    cursor.style.width = "120%";
    cursor.style.height = "120%";
    cursor.style.left = "61%";
    cursor.style.top = "36%";
  }
  if (blobTriggered && scrollTop < 1900) {
    cursor.style.display = "none";
    cursor.style.opacity = 0;
  }
  if (blobTriggered && scrollTop > 1900) {
    cursor.style.display = "block";
    cursor.style.opacity = 1;
  }

  if (scrollTop > 1900) {
    progressColor = "#ffa500";
    cursor.style.width = "4000px";
    cursor.style.height = "4000px";
    cursor.style.left = "50%";
    ctaHeading.style.opacity = 0;
    ctaSubtext.style.opacity = 0;
    sectionTwoHeading.style.opacity = 1;
    blobExpanded = true;
  }
  console.log(
    "🚀 ~ file: index.js:65 ~ updateCursorPositionOnScroll ~ scrollTop:",
    scrollTop
  );
  if (scrollTop < 1900) {
    progressColor = "#0000ff";
    ctaHeading.style.opacity = 1;
    ctaSubtext.style.opacity = 1;
    sectionTwoHeading.style.opacity = 0;
    cursor.style.opacity = 1;
    blobExpanded = false;
    container.classList.remove(".sectionOneScrolled");
    changeThemeColor("#fff");
  }

  if (blobExpanded && cursor.offsetHeight >= 2000) {
    stroke.style.opacity = 1;
    stroke.style.width = "100%";
    stroke.style.height = "100vh";
    sectionTwoHeading.style.opacity = 1;
    cta.style.opacity = 0;
    cta.style.width = 0;
    cta.style.height = 0;
    cursor.style.left = "50%";
    cursor.style.top = "4%";
    container.style.backgroundColor = "#000";
    container.classList.add("sectionOneScrolled");
    changeThemeColor("#000");
    secondBlob.style.display = "block";
    secondBlob.style.width = "150px";
    secondBlob.style.height = "150px";
  }

  if (!blobExpanded && cursor.offsetHeight <= 2000) {
    cta.style.width = "100%";
    container.style.backgroundColor = "#fff";

    cta.style.opacity = 1;
    stroke.style.opacity = 0;
    stroke.style.width = 0;
    stroke.style.height = 0;
    cta.style.height = "100vh";
    secondBlob.style.width = 0;
    secondBlob.style.height = 0;
  }

  // <---

  if (scrollTop >= 5000) {
    vcsButton.style.opacity = 1;
    sectionTwoHeading.style.top = "-5%";
    secondBlob.style.width = "170%";
    secondBlob.style.height = "170%";
    secondBlob.style.top = "300%";
    sectionTwoSubHeading.style.opacity = 1;
    sectionTwoSubHeading.style.top = "-5%";
  }

  if (scrollTop < 5000) {
    vcsButton.style.opacity = 0;
    sectionTwoHeading.style.top = "0%";

    sectionTwoSubHeading.style.top = "0%";
  }

  if (scrollTop >= 6500) {
    sectionTwoHeading.style.top = "-5%";
    secondBlob.style.top = "300%";
    sectionTwoHeading.style.opacity = 0;
    sectionTwoSubHeading.style.opacity = 0;
    vcsButton.style.opacity = 0;
  }

  if (scrollTop >= 6500) {
    taskDev.style.opacity = 1;
    taskDev.style.opacity = 1;
  }

  if (scrollTop <= 6500) {
    taskDev.style.opacity = 0;
    taskDev.style.opacity = 0;
  }

  if (scrollTop >= 7500) {
    taskDev.style.opacity = 0;
    taskDev.style.opacity = 0;
    taskDesign.style.opacity = 1;
    taskDesign.style.opacity = 1;
  }

  if (scrollTop <= 7500) {
    taskDesign.style.opacity = 0;
    taskDesign.style.opacity = 0;
  }

  if (scrollTop >= 8500) {
    taskCi.style.opacity = 1;
    taskCi.style.opacity = 1;
    taskDesign.style.opacity = 0;
    taskDesign.style.opacity = 0;
  }

  if (scrollTop <= 8500) {
    taskCi.style.opacity = 0;
    taskCi.style.opacity = 0;
  }

  if (scrollTop >= 9500) {
    taskCi.style.opacity = 0;
    taskCi.style.opacity = 0;
    allrounder.style.opacity = 0;
  }
  if (scrollTop <= 9500) {
    allrounder.style.opacity = 0;
    ctaButton.style.opacity = 0;
  }

  if (scrollTop >= 9500) {
    secondBlob.style.width = "240%";
    secondBlob.style.height = "240%";
    secondBlob.style.left = "56%";
    secondBlob.style.top = "35%";
  }

  if (scrollTop > 9500) {
    allrounder.style.opacity = 1;
    ctaButton.style.opacity = 1;
  }

  if (scrollTop > 12500) {
    secondBlob.style.width = "2200%";
    secondBlob.style.height = "2200%";
    allrounder.style.opacity = 0;
    ctaButton.style.opacity = 0;
  }
}

window.addEventListener("scroll", () => {
  updateCursorPositionOnScroll();
});
function checkScrollAndTriggerAnimation() {
  const triggerScrollY = 5200; // Example scroll position to start animation

  if (window.scrollY >= triggerScrollY) {
    // Directly trigger the tween without a ScrollMagic scene
    tween.play();
  } else {
    tween.reverse();
  }
}

// Listen to scroll events
window.addEventListener("scroll", checkScrollAndTriggerAnimation);

// Event listener for scroll events to update the progress bar
window.addEventListener("scroll", updateProgressBar);

// Initial update in case the page is not at the top when loaded
updateProgressBar();
