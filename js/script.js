
import { Modal } from "./modal.js"
import { AlertError } from "./alertError.js"
import {imc, notNumber} from "./utils.js"

// Variáveis
const form = document.querySelector("form")
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")



form.onsubmit = function (e) {
    e.preventDefault(); // evite o padrão 
    
    const pesoUsuario = peso.value;
    const alturaUsuario = altura.value;

    // VALIDAÇÃO DOS INPUTS
   const showAlertError =  notNumber (pesoUsuario) || notNumber(alturaUsuario)

   if (showAlertError){
       AlertError.open()
       return;
   }
       AlertError.close()
    
    const result = imc (pesoUsuario, alturaUsuario)
    displayResultMessage(result)

    function displayResultMessage(result) {
        const message = `Seu IMC é ${result}`
        Modal.message.innerHTML = message 
        Modal.open()
    }

    // PARA LIMPAR OS INPUTS
    peso.value = "";
    altura.value = "";

    // PARA FECHAR O ALERTA SEMPRE QUE EU MEXER NOS INPUTS
    peso.oninput = () => {
    AlertError.close()
}
    altura.oninput = () => {
    AlertError.close()
}

}

// 2 maneiras diferentes de criar função
// form.onsubmit = () => {}
// form.onsubmit =handleSubmit
// function handleSubmit() {}