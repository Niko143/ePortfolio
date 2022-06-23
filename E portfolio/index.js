// template_pklodcg
// service_7x7ulh5
// H-stovPPALtvHuAqu
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 80;

// background shapes movement
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

// dark mode and light mode
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

//  change colors of text function

let colorToggle = false;
function toggleColor() {
  if (colorToggle) {
    colorToggle = false;
    return document.body.classList.remove("blue");
  }

  colorToggle = true;
  document.body.classList += " blue";
}
// modal opener and closer
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_7x7ulh5",
      "template_pklodcg",
      event.target,
      "H-stovPPALtvHuAqu"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at nikeshe143@gmail.com"
      );
    });
}

// toggle modal
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
