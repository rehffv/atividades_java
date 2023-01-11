const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkDados = document.getElementById("link-perfil-dados");
const eventoVoltar = document.getElementById("evento-voltar");

//linkPerfil.addEventListener("mouseover", () => {
//  navPerfil.style.display = "block"
//})

window.addEventListener('keyup', (event) => {
  //console.log(linkDados)

  if (event.key === '1') {
    if(navPerfil.style.display == "block") {
      linkDados.click()        

    }else{
      navPerfil.style.display = "block"
    }
  
  }else if (event.code === 'Escape' || event.code === 'Backspace'){
    navPerfil.style.display = "none"
    eventoVoltar.click()
  }

})