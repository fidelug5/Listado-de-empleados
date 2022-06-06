const personas = [
  {
    foto: "imagenes/empresa-1.jpg",
    nombre: "fidel",
    apellido: "urias",
    telefono: "3221321761",
    correo: "fidelug5@gmail.com",
    puesto: "jefe",
    fecha_nacimiento: "22/05/2000",
    fecha_registro: "05/06/2022",
    responsabilidades: "todas",
  },
  {
    foto: "imagenes/empresa-1.jpg",
    nombre: "Angel",
    apellido: "Urias",
    telefono: "3221321761",
    correo: "jose@gmail.com",
    puesto: "jefe",
    fecha_nacimiento: "22/05/2000",
    fecha_registro: "05/06/2022",
    responsabilidades: "todas",
  },
  {
    foto: "imagenes/empresa-1.jpg",
    nombre: "Michel",
    apellido: "Urias",
    telefono: "3221321761",
    correo: "ramiro@gmail.com",
    puesto: "jefe",
    fecha_nacimiento: "22/05/2000",
    fecha_registro: "05/06/2022",
    responsabilidades: "todas",
  },
  {
    foto: "imagenes/empresa-1.jpg",
    nombre: "luis",
    apellido: "Gayrardo",
    telefono: "3221321761",
    correo: "luis@gmail.com",
    puesto: "jefe",
    fecha_nacimiento: "22/05/2000",
    fecha_registro: "05/06/2022",
    responsabilidades: "todas",
  },
];

function mostrarCartas() {
  const contenido = document.querySelector(".row");
  for (let i = 0; i < personas.length; i++) {
    contenido.innerHTML += `
        <div class="col">  
        <div class="card h-100" id="btnmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src="${personas[i].foto}" class="card-img-top" alt="perfil">
        <div class="card-body p-0"> 
        <h5 class="card-title text-center" >Nombre: ${personas[i].nombre}</h5> 
        <p class="card-text text-center" id="telefono">telefono: ${personas[i].telefono}</p> 
        <p class="card-text text-center" id="correo">correo: ${personas[i].correo}</p> 
        <p class="card-text text-center" id="puesto">puesto: ${personas[i].puesto}</p> 
        <p class="card-text text-center" id="fecha">fecha de nacimiento: ${personas[i].fecha_nacimiento}</p> 
        <p class="card-text text-center" id="registro">fecha de registro: ${personas[i].fecha_registro}</p> 
        <p class="card-text text-center" id="res">Responsabilidades: ${personas[i].responsabilidades}</p> 
        <div class="d-flex"> 
            <button class="border bg-white p-1" style="width: 100%;"><a href="">Email</a></button> 
            <button class="border bg-white p-1" style="width: 100%;"><a href="">Call</a></button> 
        </div>
        </div>
        </div>
        </div>
        `;
  }

  mostrarModal();
}

mostrarCartas();

function mostrarModal() {
  const cartas = document.querySelectorAll(".card");

  for (let i = 0; i < personas.length; i++) {
    cartas[i].addEventListener("click", () => {
      const modal = document.querySelector(".modal-body");
      modal.innerHTML = `
            <img src="${personas[i].foto}" class="card-img-top" alt="perfil">
            <h5 class="modal-title">${personas[i].nombre} ${personas[i].apellido}</h5>
            <p class="modal-text">telefono: ${personas[i].telefono}</p>
            <p class="modal-text">correo: ${personas[i].correo}</p>
            <p class="modal-text">puesto: ${personas[i].puesto}</p>
            <p class="modal-text">fecha de nacimiento: ${personas[i].fecha_nacimiento}</p>
            <p class="modal-text">fecha de registro: ${personas[i].fecha_registro}</p>
            <p class="modal-text">Responsabilidades: ${personas[i].responsabilidades}</p>
            `;
    });
  }
}
