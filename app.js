const correctPassword = "okoska22";

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (passwordInput === correctPassword) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('galleryContainer').style.display = 'block';
    } else {
        errorMessage.textContent = "Hibás jelszó, próbáld újra!";
    }
}

function showImage(imageName) {
    const imageElement = document.getElementById('displayImage');
    
    imageElement.classList.remove('show');
    imageElement.classList.add('hidden');
    
    setTimeout(() => {
        imageElement.src = 'images/' + imageName;
        imageElement.alt = imageName;
        imageElement.classList.remove('hidden');
        imageElement.classList.add('show');
    }, 100);
}

function hideImage() {
    const imageElement = document.getElementById('displayImage');
    imageElement.classList.remove('show');
    imageElement.classList.add('hidden');
}
