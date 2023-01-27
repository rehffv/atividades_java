/*// ---------- FUNÇÕES GERAIS -------------- //

function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}*/

// ---------- VALIDAÇÃO USERNAME ---------- //

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
const form = document.getElementById('form')
let value = '';



// mostrar popoup
// remover popup


function togglePopUp(label, input) {

  input.addEventListener('blur', (e) => {
    if (value.length === 0) {
      label.classList.add('required-popup')
      input.classList.add('error')
    } else if (value.length > 2 && value.length < 11) {
      input.classList.add('correct')
      usernameHelper.classList.remove('visible')
    } else {
      label.classList.remove('required-popup')
      input.classList.remove('error')
 
    }
  })
}


togglePopUp(usernameLabel, usernameInput)
togglePopUp(emailLabel, emailInput)



//validar valor do input

usernameInput.addEventListener('change', (e) => {
    value = e.target.value;
})


form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(value.length < 3) {
    usernameInput.classList.add('error')
    usernameHelper.innerText = 'Nome tem que ter mais de 3 letras!'
    usernameHelper.classList.add('visible')
  } else if (value.length > 10) {
    usernameHelper.innerText = 'Nome tem que ter menos de 10 letras!'
  } else {
    usernameInput.classList.remove('error')
    usernameHelper.classList.remove('visible')
    enviarDadosParaAPI()
    conferirSeTemCertoCaracter()
  }
 

})


function enviarDadosParaAPI() {
  console.log('DADOS ENVIADOS')
}

function conferirSeTemCertoCaracter() {
  const tem0arroba = value.includes('@')
  console.log(tem0arroba)
}



// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false;

  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true;
  }
})

/*// ---------- VALIDAÇÃO EMAIL ---------- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;

  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
})



// ---------- VALIDAÇÃO SENHA ---------- //

const senhaInput = document.getElementById('senha');
const senhaLabel = document.getElementById('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');

senhaInput.addEventListener('blur', (e) => {
  const senhaValue = e.target.value

  if (senhaValue) {
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;

  } else {
    estilizarInputIncorreto(senhaInput, senhaHelper);
    senhaHelper.innerText = 'A senha é obrigatória'
    inputsCorretos.senha = false;
  }
})



// ---------- VALIDAÇÃO CONFIRMAÇÃO SENHA ---------- //

const confirmarSenhaInput = document.getElementById('confirma-senha');
const confirmarSenhaLabel = document.getElementById('label[for="confirma-senha"]');
const confirmarSenhaHelper = document.getElementById('confirma-senha-helper');

confirmarSenhaInput.addEventListener('blur', (e) => {
  const value = e.target.value

  if (value === senhaInput.value) {
    estilizarInputCorreto(confirmarSenhaInput, confirmarSenhaHelper);
    inputsCorretos.confirmarSenha = true;

  } else {
    estilizarInputIncorreto(confirmarSenhaInput, confirmarSenhaHelper);
    confirmarSenhaHelper.innerText = 'As senhas devem ser iguais!'
    inputsCorretos.confirmarSenha = false;
  }
})



// ---------- HABILITAR ENVIO DE FORMULÁRIO ---------- //

const submitButton = document.getElementById('submit');
const inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmarSenha: false
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const values = Object.values(inputsCorretos)
  //console.log('array original', values)

  const anyFalse = values.filter((value) => value === false)
  //console.log('array filtrado', anyFalse)

  if(!anyFalse.length) {
    alert('Formulário enviado com Sucesso')

  } else {
    alert('Preencha todos os campos corretamente')
  }

})

//tentar fazer resetar os campos e deixa-lo em branco
//colocar a condição do username que quer primeiro, e a false depois
*/