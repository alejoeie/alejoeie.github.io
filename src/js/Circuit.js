var circuit = document.querySelector("#box");
function position(e) {
  circuit.style.setProperty("--xPos", e.layerX + "px");
  circuit.style.setProperty("--yPos", e.layerY + "px");
}
circuit.addEventListener("mousemove", position, false);
circuit.addEventListener("touchmove", position, false);
