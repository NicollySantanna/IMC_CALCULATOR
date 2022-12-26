
import { Modal } from "./modal.js"
import { AlertError } from "./alertError.js"

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
    const message = `Seu IMC é ${result}`
    Modal.message.innerHTML = message 
    Modal.open()

}
// VALIDAÇÃO DOS INPUTS
function notNumber (value) {
    return isNaN (value) || value == ""
}

function imc (pesoUsuario, alturaUsuario) {
    return (pesoUsuario / ((alturaUsuario / 100) **2 )).toFixed(2)
}

// 2 maneiras diferentes de criar função
// form.onsubmit = () => {}
// form.onsubmit =handleSubmit
// function handleSubmit() {}