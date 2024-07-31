function changeImage(imageSrc, captionText) {
    // Altera a imagem principal
    document.getElementById('main-image').src = imageSrc;
    
    // Altera a legenda
    document.getElementById('caption').textContent = captionText;
}
