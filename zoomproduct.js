var scaleFactor = 6;
var first = document.getElementById("first");
var second = document.getElementById("second");
var lens = document.getElementById("lens");

first.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  var divwidth = first.offsetWidth;
  var halfdivwidth = divwidth / 2;

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  second.style.backgroundPosition =
    (x - halfdivwidth / scaleFactor) * -scaleFactor +
    "px " +
    (y - halfdivwidth / scaleFactor) * -scaleFactor +
    "px";
});

