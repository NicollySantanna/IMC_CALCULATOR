
// ESTRUTURA DE DADOS DO MODAL -- OBJETO LITERAL

export const Modal = {

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

Modal.buttonClose.onclick = () => {
    Modal.close()
 }

//  PARA FECHAR O MODAL COM A TECLA ESC DO TECLADO
 window.addEventListener('keydown', handleKeydown)

 function handleKeydown(event) {
    
    if (event.key == 'Escape') {
        Modal.close()
    }
 }
