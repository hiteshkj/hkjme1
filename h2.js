let path = anime.path('path');

var tl = anime.timeline({
  targets: "path",
  opacity: 0,
  duration: 20000,
  loop: true,
  direction: "linear",
  easing: "easeInOutBounce",
  autoplay: true,
});

tl.add({
  targets: ".hdiv",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  duration: 10000,
  loop: true,
  easing: "linear",
}).add({
  targets: ".hdiv",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  duration: 20000,
  loop: true,
  easing: "linear",
});
