document.addEventListener("DOMContentLoaded", function() {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems, {});

  // sideNav
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {});

  // Parallac
  const parallax = document.querySelectorAll(".parallax");
  M.Parallax.init(parallax, {});
  // Slider
  // const slider = document.querySelector(".slider");
  // M.Slider.init(slider, {
  //   indicators: false,
  //   height: 500,
  //   transition: 500,
  //   interval: 6000
  // });
});
