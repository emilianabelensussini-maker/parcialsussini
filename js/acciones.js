const miniaturas = document.querySelectorAll('.miniatura');
const visor = document.getElementById('visor');
const imagenGrande = document.getElementById('imagen-grande');
const botonCerrar = document.getElementById('boton-cerrar');

miniaturas.forEach((miniatura) => {
  miniatura.addEventListener('click', () => {
    // Mostramos el visor cambiando su estilo CSS
    visor.style.display = 'flex';
    // Asignamos la ruta de la imagen seleccionada a la imagen grande
    imagenGrande.src = miniatura.src;
  });
});

botonCerrar.addEventListener('click', () => {
  visor.style.display = 'none';
});


visor.addEventListener('click', (e) => {
  if (e.target === visor) {
    visor.style.display = 'none';
  }
});

 function validarFormulario(evento) {
            evento.preventDefault();
            
            let nombre = document.getElementById("nombre").value;
            let email = document.getElementById("email").value
            let telefono = document.getElementById("telefono").value

            if (nombre === "" || email==="" || telefono===""){
                alert("Por favor, complete los datos personales.");
            } else {
                alert("Gracias por su consulta " + nombre +" en breve estaremos respondiendo.");
            }
}

