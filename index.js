const cursor = document.querySelector(".cursor");
const container = document.querySelector(".sectionOne");

const cta = document.querySelector(".landingpage-cta");
const stroke = document.querySelector(".strokeBusiness");
const body = document.querySelector("body");

const ctaHeading = document.querySelector(".cta-heading");
const ctaSubtext = document.querySelector(".cta-subtext");
const sectionTwoHeading = document.querySelector(".section-two-heading");
const sectionTwoSubHeading = document.querySelector(".section-two-subheading");
const navButton = document.querySelector(".navButton");
const allrounder = document.querySelector(".allrounder");

const ctaButton = document.querySelector(".cta-button");
const vcsButton = document.querySelector(".vcs-button");

const taskDev = document.querySelector(".task-dev");

const taskDesign = document.querySelector(".task-design");
const taskCi = document.querySelector(".task-ci");

const secondBlob = document.querySelector("#blobSvg2");

const techno = document.querySelector(".techno");
let blobExpanded = false;

function updateCursorPositionOnScroll() {
  const scrollTop = window.scrollY;
  const scrollFactor = 0.3;
  const cursorOffset = scrollTop * scrollFactor;

  // Section One Movement --->

  if (scrollTop >= 100) {
    navButton.style.opacity = 1;
  }

  if (scrollTop <= 100) {
    navButton.style.opacity = 0;
  }

  if (scrollTop <= 1700) {
    cursor.style.top = `${4 + cursorOffset / 10}%`;
  }

  if (scrollTop > 2800) {
    cursor.style.width = "120%";
    cursor.style.height = "120%";
    cursor.style.left = "61%";
    cursor.style.top = "36%";
  }

  if (scrollTop > 3600) {
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
  if (scrollTop < 3600) {
    ctaHeading.style.opacity = 1;
    ctaSubtext.style.opacity = 1;
    sectionTwoHeading.style.opacity = 0;
    cursor.style.opacity = 1;
    blobExpanded = false;
  }

  if (blobExpanded && cursor.offsetHeight >= 3600) {
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
    secondBlob.style.display = "block";
    secondBlob.style.width = "150px";
    secondBlob.style.height = "150px";
  }

  if (!blobExpanded && cursor.offsetHeight <= 3600) {
    cta.style.width = "100%";
    sectionTwoHeading.style.opacity = 0;
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
    sectionTwoSubHeading.style.opacity = 0;
    sectionTwoSubHeading.style.top = "0%";
  }

  if (scrollTop >= 6000) {
    sectionTwoHeading.style.top = "-5%";
    secondBlob.style.top = "300%";
    sectionTwoHeading.style.opacity = 0;
    sectionTwoSubHeading.style.opacity = 0;

    vcsButton.style.opacity = 0;
  }

  if (scrollTop < 6000) {
    sectionTwoHeading.style.display = "block";
    sectionTwoSubHeading.style.display = "block";
  }

  if (scrollTop >= 6500) {
    taskDev.style.opacity = 1;
    taskDev.style.opacity = 1;
  }

  if (scrollTop <= 6500) {
    taskDev.style.opacity = 0;
    taskDev.style.opacity = 0;
  }

  if (scrollTop >= 8000) {
    taskDesign.style.opacity = 1;
    taskDesign.style.opacity = 1;
    taskDev.style.opacity = 0;
    taskDev.style.opacity = 0;
  }

  if (scrollTop <= 8000) {
    taskDesign.style.opacity = 0;
    taskDesign.style.opacity = 0;
  }

  if (scrollTop >= 9000) {
    taskCi.style.opacity = 1;
    taskCi.style.opacity = 1;
    taskDesign.style.opacity = 0;
    taskDesign.style.opacity = 0;
  }

  if (scrollTop <= 9000) {
    taskCi.style.opacity = 0;
    taskCi.style.opacity = 0;
  }

  if (scrollTop >= 10000) {
    taskCi.style.opacity = 0;
    taskCi.style.opacity = 0;
    allrounder.style.opacity = 0;
  }
  if (scrollTop <= 10000) {
    ctaButton.style.opacity = 0;
  }

  if (scrollTop >= 11000) {
    allrounder.style.opacity = 0;
    ctaButton.style.opacity = 0;
    secondBlob.style.width = "240%";
    secondBlob.style.height = "240%";
    secondBlob.style.left = "56%";
    secondBlob.style.top = "35%";
  }

  if (scrollTop > 11500) {
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

ctaButton.addEventListener("click", () => {
  window.open("https://calendly.com/dominikgartz", "_blank");
});

window.addEventListener("scroll", () => {
  updateCursorPositionOnScroll();
});
