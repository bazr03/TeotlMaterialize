document.addEventListener("DOMContentLoaded", function() {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems, {});

  const currentYear = document.querySelector("#currentYear");
  const year = new Date().getFullYear();
  currentYear.innerHTML = year;

  // sideNav
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {
    draggable: true,
    preventScrolling: true
  });

  // Parallac
  const parallax = document.querySelectorAll(".parallax");
  M.Parallax.init(parallax, {});

  // Carousel
  const carousel = document.querySelectorAll(".carousel");
  M.Carousel.init(carousel, {
    duration: 200,
    padding: 200,
    indicators: true,
    shift: 3,
    onCycleTo: 2000
  });

  console.log(carousel);
  var instance = M.Carousel.getInstance(carousel);
  console.log(instance);
  //autoplay(instance);
  // function autoplay(INST) {
  //   //
  //   INST.next();
  //   setTimeout(autoplay, 4500);
  // }
  // Slider
  // const slider = document.querySelector(".slider");
  // M.Slider.init(slider, {
  //   indicators: false,
  //   height: 500,
  //   transition: 500,
  //   interval: 6000
  // });
  // autoplay(carousel);

  // function autoplay(CSRS) {
  //   CSRS.carousel("next");
  //   setTimeout(autoplay, 4500);
  // }
});
