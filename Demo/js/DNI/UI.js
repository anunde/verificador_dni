import { dniInput, dniBtn, formulario } from './selectores.js'

class UI {
    mostrarError(msg) {
        this.eliminarErroresAnteriores();
        
        const error = document.createElement('small');
        error.textContent = msg;
        error.className = 'text-danger text-sm font-weight-bold mt-1';
        dniInput.classList.add('border-danger');
        
        dniInput.parentNode.appendChild(error);
    }

    eliminarErroresAnteriores() {
        const errores = document.querySelectorAll('.text-danger');
        if( errores.length != 0 ) {
            errores.forEach( el => el.remove() )
        }
        dniInput.classList.remove('border-danger');
    }

    habilitarBtn() {
        dniBtn.disabled = false;
        dniBtn.classList.remove('not-allowed');
    }

    informar(msg, error) {
        const alerta = document.createElement('div');
        alerta.className = 'alert alert-success alert-dismissible fade show mt-4 col-md-10 mx-auto text-center';
        alerta.innerHTML = `
            <strong>${msg}</strong>
        `

        if( error == true ){
            alerta.classList.remove('alert-success');
            alerta.classList.add('alert-danger');
        }

        formulario.parentNode.appendChild(alerta);

        setTimeout( () => {
            alerta.remove();
            formulario.reset()
        }, 5000);
    }
}


export default UI;