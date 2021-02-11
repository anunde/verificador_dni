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
