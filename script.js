// ===============================
// Mostrar secciones
// ===============================
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.remove('activa'));

  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.add('activa');
  }
}

// ===============================
// Menú responsive (celular)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const itemsMenu = document.querySelectorAll(".menu-item");
  const closeBtn = document.querySelector(".menu-close");

  // Abrir / cerrar menú ☰
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });

  // Cerrar menú con ❌ (solo si existe)
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("activo");
    });
  }

  // Cerrar menú al tocar una opción
  itemsMenu.forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("activo");
    });
  });
});

