window.onload = function() {

    positionSketchContainer();
};
 
  function positionSketchContainer() {
    let el = document.getElementById("SketchContainer");
    let x = 400;
    let y = 170;
    el.style.position = "absolute";
    el.style.left = x + "px";
    el.style.top = y + "px";
  }