document.addEventListener("DOMContentLoaded", function() {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems, {});

  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {});

  // Slider
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });
