const divBienvenido = document.getElementById('bienvenido');
const divMain = document.getElementById('maincontent');

function principio() {
    divBienvenido.innerHTML = '';

    let div = document.createElement('section');
    div.classList.add('container-classs');
    div.id ='contenedor-id';

    let h1 = document.createElement('h1') 
    h1.classList.add('h1')
    h1.id ='h1-id';
    h1.textContent= 'Bienvenido/a';

    let input = document.createElement('input');
    input.classList.add('ingresar-class');
    input.id ='input-id';
    input.placeholder = 'Dinos tu nombre';
    input.type = 'text';

    let enviar = document.createElement('button');
    enviar.classList.add('enviar-class');
    enviar.id ='enviar-id';
    enviar.textContent= 'Enviar';
    enviar.disabled = true; 

    input.addEventListener('input', function() {
        if (input.value.trim().toLowerCase() === 'daniel' || input.value.trim().toLowerCase() === 'sandra') {
            enviar.disabled = false; 
        } else {
            enviar.disabled = true; 
        }
    });

    enviar.addEventListener('click', function() {
        divBienvenido.removeChild(div);
        contentMain();
    });

    div.appendChild(h1);
    div.appendChild(input);
    div.appendChild(enviar);

    divBienvenido.appendChild(div);
}

principio(); 

function contentMain() {
    let divContenedor = document.createElement('div');
    divContenedor.classList.add('contenedor-secciones');

    let sectionUno = document.createElement('section');
    sectionUno.classList.add('section-uno');

    let btnUno = document.createElement('button');
    btnUno.textContent = 'Cargar nueva publicidad';
    btnUno.addEventListener('click', function() {
        
        window.location.href = 'cargarpublicidad.html';
    });

    sectionUno.appendChild(btnUno);

    let sectionDos = document.createElement('section');
    sectionDos.classList.add('section-dos');

    let btnDos = document.createElement('button');
    btnDos.textContent = 'Ver publicidades cargadas';
    btnDos.addEventListener('click', function() {
        
        window.location.href = 'publicidades.html';
    });

    sectionDos.appendChild(btnDos);

    divContenedor.appendChild(sectionUno);
    divContenedor.appendChild(sectionDos);

    divMain.appendChild(divContenedor);
}
