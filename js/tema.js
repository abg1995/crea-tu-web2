const botonTema = document.getElementById("toggle-button");
const botonHamburguesa = document.getElementById("menu-anvorguesa");
const icono = botonTema.querySelector("img");
const hamburguesa = botonHamburguesa.querySelector("img");

botonTema.addEventListener("click", () => {
  const root = document.documentElement;

  const colores = ["bg", "text", "accent"];

  colores.forEach((c) => {
    const current = getComputedStyle(root)
      .getPropertyValue(`--color-${c}-current`)
      .trim();
    const dk = getComputedStyle(root)
      .getPropertyValue(`--color-${c}-dk`)
      .trim();
    const lh = getComputedStyle(root)
      .getPropertyValue(`--color-${c}-lh`)
      .trim();

    if (current === dk) {
      root.style.setProperty(`--color-${c}-current`, lh);
    } else {
      root.style.setProperty(`--color-${c}-current`, dk);
    }
  });

  //cambiar img boton
  const modoActual = getComputedStyle(root)
    .getPropertyValue(`--color-bg-current`)
    .trim();

  if (
    modoActual ===
    getComputedStyle(root).getPropertyValue(`--color-bg-lh`).trim()
  ) {
    icono.src = "assets/icons/luna.svg";
  } else {
    icono.src = "assets/icons/sol.svg";
  }

  //cambiar menu hamburguesa con tema

  const hambMenu = getComputedStyle(root)
    .getPropertyValue(`--color-bg-current`)
    .trim();
  if (
    hambMenu === getComputedStyle(root).getPropertyValue(`--color-bg-lh`).trim()
  ) {
    hamburguesa.src = "assets/icons/menu-svgrepo-com-black.svg";
  } else {
    hamburguesa.src = "assets/icons/menu-svgrepo-com.svg";
  }
});
