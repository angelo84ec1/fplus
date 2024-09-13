window.onload = function () {
  document.getElementById("test").getElementsByClassName("opcion").onclick =
    function () {
      cambiarcolor();
    };

  function cambiarcolor() {
    var ob = document.getElementById("test").getElementsByClassName("opcion");
    ob.classList.add("activee");
  }
};
