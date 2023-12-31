function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*pegar a tag img*/
  const img = document.querySelector("#profile img")
  /*substituir a imagem*/

  if (html.classList.contains("light")) {
    //se tiver ligh mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Mike de óculos escuro")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Renato sorrindo de óculos")
  }
}

//CONFIGURAÇÕES DO CAROUSEL//
$(".carousel").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
})
