/* Scripts del portafolio. Bootstrap ya gestiona el menú y el scrollspy. */
(function () {
  "use strict";

  // Año del pie de página
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // Línea bajo la barra al hacer scroll
  var nav = document.getElementById("menu");
  function marcarScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  marcarScroll();
  window.addEventListener("scroll", marcarScroll, { passive: true });

  // Cerrar el menú móvil al elegir una sección
  var panel = document.getElementById("menuLinks");
  document.querySelectorAll("#menuLinks .nav-link").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      if (panel.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(panel).hide();
      }
    });
  });

  // Copiar correo al portapapeles
  var boton = document.getElementById("copiarCorreo");
  var estado = document.getElementById("estadoCopia");
  if (boton) {
    var textoOriginal = boton.textContent;
    boton.addEventListener("click", function () {
      var correo = boton.dataset.correo;
      var avisar = function (ok) {
        boton.textContent = ok ? "Correo copiado" : "No se pudo copiar";
        estado.textContent = boton.textContent;
        setTimeout(function () { boton.textContent = textoOriginal; }, 2000);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(correo).then(function () { avisar(true); }, function () { avisar(false); });
      } else {
        avisar(false);
      }
    });
  }
})();
