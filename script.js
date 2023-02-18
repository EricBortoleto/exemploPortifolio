let imagens = document.querySelectorAll('.smallImg');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modalImg');
let btClose = document.querySelector('#btClose');
let srcVal = '';

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener('click', function () {
    srcVal = imagens[i].getAttribute('src');
    modalImg.setAttribute('src', srcVal);
    modal.classList.toggle('modalActive');
  });
}

btClose.addEventListener('click', function () {
  modal.classList.toggle('modalActive');
});
