//Variables

//NIF
const nifInput = document.querySelector('#nif');
const nifBtn = document.querySelector('#nifBtn');

//NIE
const nieInput = document.querySelector('#nie');
const nieBtn = document.querySelector('#nieBtn');


//EventListeners
document.addEventListener('DOMContentLoaded' , () => {
    nifBtn.addEventListener('click', () => {
        validar(nifInput);
    });
    nieBtn.addEventListener('click', () => {
        validar(nieInput);
    });
});

function validar(input) {
    const documento = input.value;
    const tipo = input.dataset.tipo;

    switch(tipo) {
        case 'nif':
            if(documento != 0 && documento.length == 9) {
                informar(validarNIF(documento), input);
            } else {
                informar(false, input);
            }
            break;
        case 'nie':
            if(documento != 0 && documento.length == 9) {
                informar(validarNIE(documento), input);
            } else {
                informar(false, input);
            }
            break;
    }
}

function informar(tipo, input) {
    const contenedor = input.parentNode;

    const anteriorIcono = contenedor.querySelector('svg');

    if(anteriorIcono) {
        anteriorIcono.remove();
    }

    input.classList.add('rounded');
    const icono = document.createElement('div');
    icono.className = 'input-group-addon';

    if(tipo === true) {   
        input.classList.remove('border-danger');     
        input.classList.add('border-success');
        icono.innerHTML = `
        <svg class="icono text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        `
    } else {
        input.classList.remove('border-success');
        input.classList.add('border-danger');
        icono.innerHTML = `
        <svg class="icono text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
        `
    }

    contenedor.insertBefore(icono, input);
}


//Funcion para validar NIF

function validarNIF(nif) {
    let letra = nif.substring(nif.length - 1, nif.length);
    let dni = nif.substring(0, nif.length - 1);
    let er = 'TRWAGMYFPDXBNJZSQVHLCKE';

    dni = dni%23;

    if(er.indexOf(letra) == dni) {
        return true;
    } else {
        return false;
    }
}

//Funcion para validar NIE

function validarNIE(nie) {
    let digitoControl = nie.substr(0, 1);

    switch(digitoControl) {
        case 'X':
            digitoControl = 0;
            break;
        case 'Y':
            digitoControl = 1;
            break;
        case 'Z':
            digitoControl = 2;
            break;
        default:
            return false;
    }

    let dni = nie.substring(1, nie.length - 1);
    dni = digitoControl + dni;
    dni = dni%23;

    let er = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let letra = nie.substring(nie.length - 1, nie.length);

    if(er.indexOf(letra) == dni) {
        return true;
    } else {
        return false;
    }
}
