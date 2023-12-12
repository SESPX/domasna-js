window.onload= function(){
const images = [
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
  ];
  
  document.querySelector('.btn-1').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    images.forEach(imagePath => {
      const img = document.createElement('img');
      img.src = imagePath;
      img.classList.add('image');
      imageContainer.appendChild(img);
    });
  });
  
  document.querySelector('.btn-2').addEventListener('click', function() {
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
      image.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.5)';
      image.style.borderRadius = '5px';
    });
  });
}
  