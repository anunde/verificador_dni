import { dniBtn, dniInput, nifRegex } from './selectores.js';
import UI from './UI.js';
import NIF from './NIF.js';

const ui = new UI();
const nif = new NIF();

export function desHabilitarBtn() {
    dniBtn.disabled = true;
    dniBtn.classList.add('not-allowed');
}

export function validacionDni() {
    const dni = dniInput.value;

    if( dni.length >= 9 ) {
        if( dni.length > 9) {
            ui.mostrarError('El valor introducido es demasiado largo');
            desHabilitarBtn();
           return;
        }

        if( nifRegex.test(dni) ) {
            ui.eliminarErroresAnteriores();
            ui.habilitarBtn();
        } else {
            ui.mostrarError('Ese dni no es válido');
            desHabilitarBtn();
        }
    } else {
        ui.eliminarErroresAnteriores();
        desHabilitarBtn();
    }
}

export function comprobarDni(e) {
    e.preventDefault();

    const valor = dniInput.value;
    
    nif.comprobar(valor);
}