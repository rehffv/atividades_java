// ---------- FUNÇÕES GERAIS -------------- //

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

function estilizarInputIncorreto(input, helper, label) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
  label.classList.add("required-popup"); 
}

// ---------- VALIDAÇÃO USERNAME ---------- //

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valorUsername = e.target.value

  if(valorUsername.length > 2){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true;    

  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Username precisa ter 3 ou mais caracteres.";
    estilizarInputIncorreto(usernameInput, usernameHelper, usernameLabel)
    inputsCorretos.username = false;
    
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valorEmail = e.target.value

  if(valorEmail.includes("@") && valorEmail.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;

  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Insira um email válido.";
    estilizarInputIncorreto(emailInput, emailHelper, emailLabel);
    inputsCorretos.email = false;
  }
})




// ---------- VALIDAÇÃO CONFIRMAÇÃO IDADE ---------- //

let idadeInput = document.getElementById('idade');
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper');


togglePopup(idadeInput, idadeLabel)

// Validar valor do input
idadeInput.addEventListener("change", (e)=> {
  let valorIdade = e.target.value

  if (valorIdade > 0) {
    estilizarInputCorreto(idadeInput, idadeHelper);
    inputsCorretos.idade = true;
  
  } else {
    estilizarInputIncorreto(idadeInput, idadeHelper, idadeLabel);   
    idadeHelper.innerText = "Você deve inserir uma idade.";
    inputsCorretos.idade = false;
  }
})


// ---------- VALIDAÇÃO SENHA ---------- //

const senhaInput = document.getElementById('senha');
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById('senha-helper');


togglePopup(senhaInput, senhaLabel)


senhaInput.addEventListener('change', (e) => {
  const valorSenha = e.target.value

  if (valorSenha.length > 3 && valorSenha.length < 9) {
    estilizarInputCorreto(senhaInput, senhaHelper);    
    inputsCorretos.senha = true;

  } else {
    estilizarInputIncorreto(senhaInput, senhaHelper, senhaLabel);
    senhaHelper.innerText = 'A senha deve ter entre 4 e 8 caracteres.'
    inputsCorretos.senha = false;
  }
})



// ---------- VALIDAÇÃO CONFIRMAÇÃO SENHA ---------- //

const confirmarSenhaInput = document.getElementById('confirma-senha');
const confirmarSenhaLabel = document.querySelector('label[for="confirma-senha"]');
const confirmarSenhaHelper = document.getElementById('confirma-senha-helper');


togglePopup(confirmarSenhaInput, confirmarSenhaLabel)


confirmarSenhaInput.addEventListener('change', (e) => {
  const valorConfirmaSenha = e.target.value

  if (valorConfirmaSenha && valorConfirmaSenha === senhaInput.value) {
    estilizarInputCorreto(confirmarSenhaInput, confirmarSenhaHelper);
    inputsCorretos.confirmarSenha = true;

  } else {
    estilizarInputIncorreto(confirmarSenhaInput, confirmarSenhaHelper, confirmarSenhaLabel);
    confirmarSenhaHelper.innerText = 'As senhas devem ser iguais nos dois campos.'
    inputsCorretos.confirmarSenha = false;
  }
})



// ---------- HABILITAR ENVIO DE FORMULÁRIO ---------- //


const submitButton = document.getElementById('submit');
const inputsCorretos = {
  username: false,
  email: false,
  idade: false,
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
    resetarCampo(usernameInput)
    resetarCampo(emailInput)
    resetarCampo(idadeInput)
    resetarCampo(senhaInput)
    resetarCampo(confirmarSenhaInput)

  } else {
    alert('Preencha todos os campos corretamente')
  }

})

//Para resetar os campos após o envio

function resetarCampo (input) {

input.value = '';
input.classList.remove("correct");
 
}