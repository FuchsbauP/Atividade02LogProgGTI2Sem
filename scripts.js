const form = document.getElementById("form")
const plantName = document.getElementById("plant-name")
const plantSpecies = document.getElementById("plant-species")
const plantHeight = document.getElementById("plant-height")
const btnCad = document.getElementById('btn-cad')

//Previnir submit default
form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkInputs()
})
//Previnir submit default

function checkInputs() {
  const plantNameValue = plantName.value
  const plantSpeciesValue = plantSpecies.value
  const plantHeightValue = plantHeight.value

  //Validação Nome
  if (plantNameValue === "") {
    setErrorFor(plantName, 'O nome da planta é obrigatório.')
  }
  else {
    setSuccessFor(plantName)
  }
  //Validação Nome

  //Validação Espécie
  if (plantSpeciesValue === "") {
    setErrorFor(plantSpecies, 'A espécie da planta é obrigatória.')
  }
  else {
    setSuccessFor(plantSpecies)
  }
  //Validação Espécie

  //Validação Altura Máxima
  if (plantHeightValue === "") {
    setErrorFor(plantHeight, 'A altura da planta é obrigatória.')
    plantHeight.focus
  }
  else {
    setSuccessFor(plantHeight);
  }
  //Validação Altura Máxima

  const formControlsSuccess = form.querySelectorAll('.form-control')
  const formIsValid = [...formControlsSuccess].every(formControlsSuccess => {
    return (formControlsSuccess.className === "form-control success")
  })
  if (formIsValid) {
    console.log('Formulário 100% valido')
    plantName.value = ""
    plantSpecies.value = ""
    plantHeight.value = ""
    setFormHeight()
    setSuccessMessage('Planta cadastrada com sucesso')
    btnCad.innerText = "Aguarde"
    // alert('Planta cadastrada com sucesso!')
    sleep(1500).then(() => {
      document.querySelector('p').className = 'form-success'
      form.className = "form"
      const formPlant = plantName.parentElement
      formPlant.className = 'form-control'
      const formSpecies = plantSpecies.parentElement
      formSpecies.className = 'form-control'
      const formHeight = plantHeight.parentElement
      formHeight.className = 'form-control'
      btnCad.innerText = "Cadastrar"
      plantName.focus()
    })
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small');
  //Adicionar a Mensagem de erro
  small.innerText = message
  //Adicionar a Classe de erro
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  //Adicionar Classe de Sucesso
  formControl.className = 'form-control success'
}

function setFormHeight() {
  form.className = "form success"
}

function setSuccessMessage(message) {
  const p = document.querySelector('p')
  p.innerText = message
  document.querySelector('p').className = 'form-success success-message'
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}