// Variáveis

const form = document.querySelector("form")
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")


// ESTRUTURA DE DADOS DO MODAL
const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }

}


form.onsubmit = function (e) {
    e.preventDefault(); // evite o padrão 
    
    const pesoUsuario = peso.value;
    const alturaUsuario = altura.value;
    
    const result = imc (pesoUsuario, alturaUsuario)
    const message = `Seu IMC é ${result}`
    Modal.message.innerHTML = message 
    Modal.open()

}

Modal.buttonClose.onclick = () => {
   Modal.close()
}

function imc (pesoUsuario, alturaUsuario) {
    return (pesoUsuario / ((alturaUsuario / 100) **2 )).toFixed(2)
}

// 2 maneiras diferentes de criar função
// form.onsubmit = () => {}
// form.onsubmit =handleSubmit
// function handleSubmit() {}