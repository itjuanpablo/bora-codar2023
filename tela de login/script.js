function togglePassword() {
  document.querySelectorAll('.eye').forEach(eye => eye.classList.toggle('hide'))

  const type = senha.getAttribute('type') == 'password' ? 'text' : 'password'

  senha.setAttribute('type', type)
}

const fields = document.querySelectorAll('[required]')

console.log(fields)

function customValidation(event) {
  const field = event.target

  // Verificar se existem erros
  function verifyErrors() {
    let foundError = false

    for (let error in field.validity) {
      if (error != 'customError' && field.validity[error]) {
        foundError = error
      }
    }

    return foundError
  }
}

const error = verifyErrors()

if (erro) {
  //trocar mensagem de required
  field.setCustomValidity('Esse campo é obrigatório')
} else {
  field.setCustomValidity('')
}

for (field of fields) {
  field.addEventListener('invalid', customValidation)
}
