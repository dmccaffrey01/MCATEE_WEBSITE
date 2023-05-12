const images = document.querySelectorAll('.roadmap-piece-img');
const pieceContainers = document.querySelectorAll('.roadmap-piece-container');
for (let i = 0; i < images.length; i++) {
    let originalWidth = images[i].naturalWidth;
    let originalHeight = images[i].naturalHeight;
    let newWidth = originalWidth / 2;
    let newHeight = originalHeight / 2;
    images[i].style.width = newWidth + 'px';
    images[i].style.height = newHeight + 'px';
    pieceContainers[i].style.width = newWidth + 'px';
    pieceContainers[i].style.height = newHeight + 'px';
}

const pieceContainer1 = pieceContainers[0];
const pieceContainer2 = pieceContainers[1];
const pieceContainer3 = pieceContainers[2];
