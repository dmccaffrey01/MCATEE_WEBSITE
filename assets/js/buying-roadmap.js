const pieceContainers = document.querySelectorAll('.roadmap-piece-container');
const popupContainers = document.querySelectorAll('.roadmap-piece-popup-container');
const popupTexts = document.querySelectorAll('.piece-popup-text');

const getImage = (pieceContainer) => {
    return pieceContainer.querySelector('.roadmap-piece-img');
}

const getImageSrc = (index) => {
    if (index == 0 || index == 2) {
        return "./assets/images/roadmap-piece-a.png";
    } else if (index == 4 || index == 6) {
        return "./assets/images/roadmap-piece-b.png";
    } else if (index == 5 || index == 7) {
        return "./assets/images/roadmap-piece-c.png";
    } else if (index == 3 || index == 1) {
        return "./assets/images/roadmap-piece-d.png";
    }
}

const getImageBorder = (imageSrc) => {
    return imageSrc.replace('.png', '-border.png');
}

const addImageBorder = (image, borderSrc) => {
    image.src = borderSrc;
}

const resetImage = (image, imageSrc) => {
    image.src = imageSrc;
};

pieceContainers.forEach((pieceContainer, index) => {
    let image = getImage(pieceContainer);
    let imageSrc = getImageSrc(index);
    let borderSrc = getImageBorder(imageSrc);

    let popupContainer = popupContainers[index];
    let popupText = popupTexts[index];
    
    pieceContainer.addEventListener('mouseenter', () => {
        addImageBorder(image, borderSrc);
        window.setTimeout(() => {
            //popupContainer.classList.add('clicked');
        }, 1000);
    });

    pieceContainer.addEventListener('mouseleave', () => {
        if (!pieceContainer.classList.contains('clicked')) {
            resetImage(image, imageSrc);
            //popupContainer.classList.remove('clicked');
        } else {
            return;
        }
    });
    
    pieceContainer.addEventListener('click', () => {
        if (!pieceContainer.classList.contains('clicked')) {
            removeOtherClickedPieces(index);
            window.setTimeout(() => {
                pieceContainer.classList.add('clicked');
                addImageBorder(image, borderSrc);
                popupContainer.classList.add('clicked');
                window.setTimeout(() => {
                    popupText.classList.add('clicked');
                }, 200);
            }, 500);
        } else {
            pieceContainer.classList.remove('clicked');
            resetImage(image, imageSrc);
            popupContainer.classList.remove('clicked');
            popupText.classList.remove('clicked');
        }
    });
})

const removeOtherClickedPieces = (index) => {
    pieceContainers.forEach((newPieceContainer, newIndex) => {
        if (newPieceContainer.classList.contains('clicked') && index !== newIndex) {
            newPieceContainer.classList.remove('clicked');
            let newImage = getImage(newPieceContainer);
            let newImageSrc = getImageSrc(newIndex);
            resetImage(newImage, newImageSrc);
            let popupContainer = popupContainers[newIndex];
            let popupText = popupTexts[newIndex];
            popupContainer.classList.remove('clicked');
            popupText.classList.remove('clicked');
        }
    })
}
