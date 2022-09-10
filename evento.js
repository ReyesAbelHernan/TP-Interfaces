let canvasEventos = document.getElementById("canvas");
let elemLeft = canvasEventos.offsetLeft + canvasEventos.clientLeft;
let elemTop = canvasEventos.offsetTop + canvasEventos.clientTop;
let seleccionado = undefined;

canvasEventos.addEventListener("click", function (event) {
  var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;
  
  figuras.forEach(function (element) {
    element.seleccionar(x, y);
  });
});

canvasEventos.addEventListener("mousedown", function (event) {
  var x = event.pageX - elemLeft,
    y = event.pageY - elemTop;
  figuras.forEach(function (element) {
    if (element.estaSeleccionado(x, y)) {
      seleccionado = element;
    }
  });
});

canvasEventos.addEventListener("mouseup", function (event) {
  var x = event.pageX - elemLeft,
    y = event.pageY - elemTop;
  seleccionado.moveTo(x, y);
});
