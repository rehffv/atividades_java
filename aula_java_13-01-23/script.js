let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

let confirmarSenhaInput = document.getElementById("confirma-senha");
let confirmarSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmarSenhaHelper = document.getElementById("confirma-senha-helper");

const form = document.getElementById('button')




function togglePopUp(label, input) {

  input.addEventListener('focus', () => {  
      label.classList.add('required-popup')
  });

  input.addEventListener('blur', () => {
      label.classList.remove('required-popup') 
  });
};


function validacaoDosCampos() {

//Validação do Username

  usernameInput.addEventListener('change', () => {
    console.log('chamei o USERNAME')

    if (usernameInput.value.length > 2) {
      usernameLabel.classList.remove('required-popup')
      usernameInput.classList.remove('error')
      usernameHelper.classList.remove("visible")
      usernameInput.classList.add('correct')

    } else {         
      usernameLabel.classList.add('required-popup')
      usernameInput.classList.add('error')
      usernameHelper.classList.add("visible")
      usernameInput.classList.remove('correct')
      usernameHelper.innerText = "Username precisa ter 3 ou mais caracteres."
    }
    });


  //Validação do E-mail

  emailInput.addEventListener('change', () => {
    console.log('chamei o EMAIL')
  
    if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
      emailLabel.classList.remove('required-popup')
      emailInput.classList.remove('error')
      emailHelper.classList.remove("visible")
      emailInput.classList.add('correct')
  
    } else {        
      emailLabel.classList.add('required-popup')
      emailInput.classList.add('error')
      emailHelper.classList.add("visible")
      emailInput.classList.remove('correct')
      emailHelper.innerText = "Insira um email válido."
    }
    });


  //Validação da Idade

  idadeInput.addEventListener('change', () => {
    console.log('chamei a IDADE')
  
    if (idadeInput.value > 0) {
      idadeLabel.classList.remove('required-popup')
      idadeInput.classList.remove('error')
      idadeHelper.classList.remove("visible")
      idadeInput.classList.add('correct')
  
    } else {        
      idadeLabel.classList.add('required-popup')
      idadeInput.classList.add('error')
      idadeHelper.classList.add("visible")
      idadeInput.classList.remove('correct')
      idadeHelper.innerText = "Você deve inserir uma idade."
    }
    });


  //Validação da Senha

  senhaInput.addEventListener('change', () => {
    console.log('chamei a SENHA')
  
    if (senhaInput.value.length > 3 && senhaInput.value.length < 9) {
      senhaLabel.classList.remove('required-popup')
      senhaInput.classList.remove('error')
      senhaHelper.classList.remove("visible")
      senhaInput.classList.add('correct')
  
    } else {        
      senhaLabel.classList.add('required-popup')
      senhaInput.classList.add('error')
      senhaHelper.classList.add("visible")
      senhaInput.classList.remove('correct')
      senhaHelper.innerText = "A senha deve ter entre 4 e 8 caracteres."
      console.log(senhaInput.value)
    }
    });
      
    
  //Validação da confirmação da Senha

  confirmarSenhaInput.addEventListener('change', () => {
    console.log('chamei a CONFIRMA-SENHA')   
  
    if (confirmarSenhaInput.value === senhaInput.value) {
      confirmarSenhaLabel.classList.remove('required-popup')
      confirmarSenhaInput.classList.remove('error')
      confirmarSenhaHelper.classList.remove("visible")
      confirmarSenhaInput.classList.add('correct')
  
    } else {        
      confirmarSenhaLabel.classList.add('required-popup')
      confirmarSenhaInput.classList.add('error')
      confirmarSenhaHelper.classList.add("visible")
      confirmarSenhaInput.classList.remove('correct')
      confirmarSenhaHelper.innerText = "As senhas devem ser iguais nos dois campos."
    }
  });

};   


  togglePopUp(usernameLabel, usernameInput)
  validacaoDosCampos(usernameLabel, usernameInput, usernameHelper)

  togglePopUp(emailLabel, emailInput)
  validacaoDosCampos(emailLabel, emailInput, emailHelper)

  togglePopUp(idadeLabel, idadeInput)
  validacaoDosCampos(idadeLabel, idadeInput, idadeHelper)

  togglePopUp(senhaLabel, senhaInput)
  validacaoDosCampos(senhaLabel, senhaInput, senhaHelper)

  togglePopUp(confirmarSenhaLabel, confirmarSenhaInput)
  validacaoDosCampos(confirmarSenhaLabel, confirmarSenhaInput, confirmarSenhaHelper)


  

  function enviarDadosParaAPI() {
    alert('DADOS ENVIADOS')
  }


  form.addEventListener('click', (e) => {
  e.preventDefault()
  enviarDadosParaAPI()

  });