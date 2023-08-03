const textElement = document.getElementById('text');
const text = 'Hi! I am Muhammad Usman, a Front-end Web Developer. ';

let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 100); 
    }
}

typeText();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
}

document.addEventListener("scroll", setActiveLink);


const resumeButton = document.getElementById("resumeButton");

resumeButton.addEventListener("click", () => {
  const resumeImageUrl = "resume.png";
    window.open(resumeImageUrl, "_blank");
    newTab.document.write(`<img src="${resumeImageUrl}" style="width: 50%; height: auto ;">`);


  
});

const downloadButton = document.getElementById("downloadButton");
const downloadLink = document.getElementById("downloadLink");



downloadButton.addEventListener("click", () => {
  const resumeImageUrl = "resume.png";

  downloadLink.href = resumeImageUrl;
  downloadLink.download = "resume.png";

  downloadLink.click();
});



  //animations for sections
  function animateSections(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
};

const sectionsToAnimate = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(animateSections, options);

sectionsToAnimate.forEach((section) => {
    sectionObserver.observe(section);
});