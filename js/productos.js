fetch("data/productos.json")
  .then((res) => res.json())
  .then((data) => {
    const contenedor = document.getElementById("contenedor-productos");

    data.forEach((producto, index) => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto-container", `producto-${index + 1}`);

      productoDiv.innerHTML = `
      <div class="producto-contenido section-m>
            <h3 class="producto-titulo>${producto.titulo}</h3>

            <div class="producto-contenido-img"></div>

            <p class="producto-contenido-descripcion">
            ${producto.descripcion}
            </p>
            <a href="#contacto" class="btn-contacto">
                <button class="boton">Solicitar presupuestos </buton>
                </a>
            

      </div>
      `;

      const contenidoImg = productoDiv.querySelector(".producto-contenido-img");
      producto.imagenes.slice(0, 3).forEach((img) => {
        const divImg = document.createElement("div");
        divImg.classList.add("item");
        divImg.innerHTML = `
        <img src="${img.normal}" class="normal" >
        <img src="${img.hover}" class="hover" >`;

        contenidoImg.appendChild(divImg);
      });

      contenedor.appendChild(productoDiv);
    });
  });
