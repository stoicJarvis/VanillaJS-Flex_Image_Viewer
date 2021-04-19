const images = document.querySelectorAll('.img');

function toggleOpen(){
    this.classList.toggle('open');
}

images.forEach(img => img.addEventListener('click', toggleOpen));