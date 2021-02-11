import { comprobarDni, desHabilitarBtn, validacionDni } from './helpers.js';
import { dniBtn, dniInput, formulario } from './selectores.js';

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        document.addEventListener('DOMContentLoaded' , desHabilitarBtn);
        dniInput.addEventListener('input', validacionDni);
        dniBtn.addEventListener('click', comprobarDni);
    }
}

export default App;