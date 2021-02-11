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