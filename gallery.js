const slideshowContainer = document.getElementById('slideshowContainer');
let currentImageIndex = 0;
let images = [];

// Ambil data gambar dari JSON
fetch('./JSON/sample.json')
    .then(response => response.json())
    .then(data => {
        images = data.images;
        createSlideshow();
        setInterval(showNextImage, 3000); // Ganti gambar setiap 3 detik (3000 milidetik)
    })
    .catch(error => console.error(error));

function createSlideshow() {
    for (let i = 0; i < images.length; i++) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const image = document.createElement('img');
        image.src = images[i].src;
        image.alt = images[i].alt;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.textContent = 'Click to enlarge';

        const imageName = document.createElement('p');
        imageName.textContent = images[i].name;

        
        slideshowContainer.appendChild(imageContainer);
        imageContainer.appendChild(image);
        imageContainer.appendChild(overlay);
        imageContainer.appendChild(imageName);
        
    }
}

function showNextImage() {
    const imageContainers = document.querySelectorAll('.image-container');
    const overlays = document.querySelectorAll('.overlay');

    for (let i = 0; i < imageContainers.length; i++) {
        if (i >= currentImageIndex && i < currentImageIndex + 3) {
            imageContainers[i].style.display = 'block';
            overlays[i].style.display = 'block';
        } else {
            imageContainers[i].style.display = 'none';
            overlays[i].style.display = 'none';
        }
    }

    currentImageIndex = (currentImageIndex + 3) % imageContainers.length;
}

slideshowContainer.addEventListener('click', () => {
    // Perform action when the image is clicked
    alert('Image ' + (currentImageIndex + 1) + ' clicked!');
    // You can modify this to open the image in a modal or perform any other desired action
});