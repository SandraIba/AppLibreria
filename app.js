//Evento para crear un nuevo Libro
document.getElementById("formulario").addEventListener("submit", crear);

//Función Crear

function crear(e){
titulo = document.getElementById("titulo").value
descripcion = document.getElementById("descripcion").value
precio = document.getElementById("precio").value

let libro = {
titulo,
descripcion,
precio
  }
   

  if(localStorage.getItem("Libros") === null){
  let libros = []
libros.push(libro) 
localStorage.setItem("Libros", JSON.stringify(libros))

}else{ 
    let libros = JSON.parse(localStorage.getItem("Libros"))
    libros.push(libro) 
    localStorage.setItem("Libros", JSON.stringify(libros))

  }

  leer();

document.getElementById("formulario").reset();
console.log("Libro guardado correctamente")
e.preventDefault()
}


//Función "Leer"

function leer(){
    let libros = JSON.parse(localStorage.getItem("Libros")); 
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i < libros.length; i++){
    let titulo = libros[i].titulo
    let descripcion = libros[i].descripcion
    let precio = libros[i].precio
    
    document.getElementById("tbody").innerHTML +=
    `<tr>
    <td>${titulo}</td>
    <td>${descripcion}</td>
    <td>${precio}</td>
    <td><button onclick="eliminar('${titulo}')" class="btn btn-danger">Eliminar</button></td>
    <td><button onclick="Editar('${titulo}')" class="btn btn-success">Editar</button></td>

    </tr>
    `
    }

} 
    


//función "Editar"
function editar(titulo){
    let libros = JSON.parse(localStorage.getIten ("Libros"));
    for (let i=0; i<libros.length; i++){
     if(libros[i].titulo === titulo){ 
        document.getElementById("body").
         innerHTPAL = `<div class="row">
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    <h2>Editar libro</h2>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <input type="text" id="newtitulo" class="form-control my-3" placeholder="${libros [i].titulo}">
                        </div>
                        <div class="form-group">
                            <textarea id="newdescripcion" class="form-control my-3" placeholder="${libros [i].descripcion}"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="number" id="newprecio" class="form-control my-3" placeholder="${libros [i].precio+zzzzzzzzz}">
                        </div>
                    
                    </form>
                    <button class=btn btn-success"onclick="actualizar('${i})'"actualizar</button>
                    <button class=btn btn-primary" onclick="VistaPrincipal()">Cancelar</button>
                </div>
            </div>  
        
        
        `

     }

    }
    

}

//Función actualizar
function actualizar(i){
let libros = JSON.parse(localStorage.getItem("Libros")); 
libros[i].titulo = document.getElementById("newtitulo").value;
libros[i].descripcions = document.getElementById("newdescripcion").value; 
libros[i].precios = document.getElementById("newprecio").value;


localstorage.setItem("Libros", JS0N.stringify(libros)); 
vistaPrincipal()

}

//función Eliminar
function eliminar(titulo){
   let libros = JSON.parse(localStorage.getItem("Libros"));
    for(let i=0; i<libros.length; i++){ 
        if(libros[i].titulo === titulo){ 
            libros.splice(1,1);
        }

    }

    localstorage.setItem("Libros", JSON.stringify(libros));
leer();

}

//funcion para mostrar la interfaz principal
function vistaPrincipal(){
    document.getElementById("body").innerHTML= ` <div class="row">
    <div class="col-md-5">
    <div class="card">
    <div class="card-header">
    <h2>Agregar nuevo libroc/h2>
</div>
<div class="card-body">
<form id="formulario">
<div class="form-group">
<input type="text" id="titulo" class="form-control my-3" 
placeholder="Ingresar titulo">
</div>
<div class="form-group">
<textarea id="descripcion" class="form-control my-3"
placeholders=" Ingresar descripción"></textarea>
</div>
<div class="form-group">
<input type="number" id="precio" class="form-control my-3" 
placeholder="Ingresar precio">
</div>
<button type="submit" class="btn btn-primary">Agregar</button>
</form>
</div>
</div>
</div>
<div class="col-md-6">
<table class="table caption-top bg-light">
<thead>
<tr>
<th scope="col">Título</th>
<th scope="col">Descripción</th>
<th scope="col">Precio</th>
</tr>
</thead>
<tbody id="tbody">
tr>
<td>Y soy Robot</td>
<td>Libro de Sci-Fi</td>
<td>200.00</td>
</tr>
</tbody>
</table>
</div>
</div>`
leer();
}

leer();
