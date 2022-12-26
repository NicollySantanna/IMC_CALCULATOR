// VALIDAÇÃO DOS INPUTS
export function notNumber (value) {
    return isNaN (value) || value == ""
}

export function imc (pesoUsuario, alturaUsuario) {
    return (pesoUsuario / ((alturaUsuario / 100) **2 )).toFixed(2)
}
