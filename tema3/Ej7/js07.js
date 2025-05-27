const images = [
    "images/image1.jpg",
    "images/image2.png",
    "images/image3.jpg",
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showImage(index) {
    sliderImage.style.backgroundImage = `url('${images[index]}')`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);