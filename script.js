// mobile nav

const navbtn = document.querySelectorAll(".nav-icon-btn");
const mainnav = document.querySelector(".main-nav");

const menubtn = document.querySelector(".nav-icon-btn");
const menuicon = document.querySelector('.nav-icon[name="menu-outline"]');
const crossbtn = document.querySelector(".nav-icon-btn:last-child");
const crossicon = document.querySelector('.nav-icon[name="close-outline"]');

console.log(menubtn);
navbtn.forEach(function (button) {
  button.addEventListener("click", function () {
    mainnav.classList.toggle("open");
    menubtn.classList.toggle("hidden");
    crossicon.classList.toggle("show");
    crossbtn.classList.toggle("show");
  });
});

// adding year
const year = document.querySelector(".year");
const currentyear = new Date().getFullYear();
year.textContent = currentyear;

//stickey nav

const hero = document.querySelector(".header");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting) {
      document.querySelector('.header').classList.add("sticky");
    }
    if (!ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
  },

  {
    root: null,
    threshold: 0,
  }
);
obs.observe(hero);
