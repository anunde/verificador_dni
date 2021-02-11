import UI from './UI.js';

const ui = new UI();

class NIF {
    comprobar(valor) {
        let letra = valor.substring(valor.length - 1, valor.length);
        let dni = valor.substring(0, valor.length - 1);
        let er = 'TRWAGMYFPDXBNJZSQVHLCKE';
        dni = dni%23;

        if(er.indexOf(letra) == dni) {
            ui.informar(`El NIF ${valor} es verdadero.`)
        } else {
            ui.informar(`El NIF ${valor} es falso.`, true)
        }
    }
}

export default NIF;