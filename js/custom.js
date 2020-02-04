document.addEventListener("DOMContentLoaded", function() {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems, {});

  const currentYear = document.querySelector("#currentYear");
  const year = new Date().getFullYear();
  currentYear.innerHTML = year;

  // sideNav
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {});

  // Parallac
  const parallax = document.querySelectorAll(".parallax");
  M.Parallax.init(parallax, {});

  // Carousel
  const carousel = document.querySelectorAll(".carousel");
  M.Carousel.init(carousel, {
    duration: 200,
    padding: 20,
    indicators: true,
    shift: 3
  });
  // Slider
  // const slider = document.querySelector(".slider");
  // M.Slider.init(slider, {
  //   indicators: false,
  //   height: 500,
  //   transition: 500,
  //   interval: 6000
  // });
});
