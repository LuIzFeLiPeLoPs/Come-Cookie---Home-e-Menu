

window.onload = function () {
    var cookieshome = document.getElementById("cookieshome");
    cookieshome.style.display = "block";
    setTimeout(function () {
        cookieshome.style.opacity = 1;
    },);
}


function mostrarImagem() {
  const imagem = document.getElementById('chips');
  const posicaoImagem = imagem.getBoundingClientRect();

  // Verifica se a imagem está na área visível da tela
  if (posicaoImagem.top < window.innerHeight && posicaoImagem.bottom >= 0) {
    imagem.style.opacity = 1;
  }
}

// Chama a função quando a página é carregada e quando rola
window.addEventListener('load', mostrarImagem);
window.addEventListener('scroll', mostrarImagem);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();

           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });

