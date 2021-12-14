//VARIABLES
const form = document.querySelector('.form')
const boton = document.querySelector('.btn');
const formulario = document.querySelector('.form')
const textArea = document.querySelector('.textarea');
const taskSection = document.querySelector('.task-section');
const taskContainer = document.querySelector('.task-container');


//EVENTOS
eventos();
function eventos() {
    boton.addEventListener('click', añadirTexto);
    textArea.addEventListener('blur', validarFormulario);
}

function añadirTexto(e) { 
    e.preventDefault();
    const mensajeUsuario = textArea.value;

    //DIV PADRE
    const div = document.createElement('div');
    div.classList.add('task-container');
    taskSection.appendChild(div);

    //CHECK HIJO 
    const check = document.createElement('img');
    check.classList.add('check', 'display')
    check.src = '/img/check.png';
    div.appendChild(check);

    //LI HIJO
    const task = document.createElement('li');
    task.textContent = mensajeUsuario;
    task.classList.add('task');
    div.appendChild(task);

    //IMG X HIJO
    const icon = document.createElement('img');
    icon.classList.add('icon-x')
    icon.src = '/img/boton-x.png';
    div.appendChild(icon);

    //AÑADIR EVENTO A LA X QUE BORRRA EL TASK 
    const iconos = document.querySelectorAll('.icon-x');
    iconos.forEach((icono) => {
        icono.addEventListener('click', borrarTask);

        function borrarTask() {
            const borrar = icono.parentElement;
            borrar.remove();
        }
    });

    //AÑADE PALOMITA Y TACHA LA TAREA CUANDO EL USAURIO DA CLICK
    div.addEventListener('click', () => {
        task.classList.toggle('tachar-texto');
        check.classList.toggle('display');
    });

    limpiarHTML();
    
}
//ESTA FUNCION VALIDA EL CUADRO DE TEXTO
function validarFormulario(e) {
   const campo = e.target.value;
   if(campo === '') {
       mostrarError('This field must be filled');
   }
}


//ESTA FUNCION MUESTRA UN MENSAJE DE ERROR SI EL USUARIO
//ABANDONA EL CUADRO SIN ESCRIBIR
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('mensajeError');
    form.insertBefore(mensajeError, boton);
    textArea.classList.add('contornoError')

    setTimeout(() => {
        mensajeError.remove();
        textArea.classList.remove('contornoError')
    },2000 );
}

//ESTA FUNCION LIMPIA EL CUADRO DONDE EL USUARIO ESCRIBE CUANDO ESTE DA CLICK EN BOTON
function limpiarHTML() {
    formulario.reset();
}

