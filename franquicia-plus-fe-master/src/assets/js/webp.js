Modernizr.on("webp", function(result) {
  var bannerprincipal = document.getElementById("banner-principal");
  if (result) {
    bannerprincipal.classList.add("webp2");
  } else {
    bannerprincipal.classList.add("no-webp");
  }
});
