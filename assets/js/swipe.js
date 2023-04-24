const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".testimonial-card")
var currentCardNumber = 0;
var sliding = false;

function swipeToCard(cardNum) {
    if (sliding) {
        return;
    }

    sliding = true;
    currentCardNumber = cardNum;
    for (let i = 0; i < dots.length; i++) {
        let currentTranslateX = 100 * i
        cards[i].style.transform = `translateX(${currentTranslateX - (100 * cardNum)}%)`;
    }

    updateSwipeFeature();

    setTimeout(() => {
        sliding = false;
    }, 250);
}

function updateSwipeFeature() {
    let activeDot = getActiveDot();
    for (let i = 0; i < dots.length; i++) {
        if (currentCardNumber == i && activeDot != i) {
            removeActiveDot(activeDot);
            addActiveDot(i);
            return;
        }
    }
}

function getActiveDot() {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("active")) {
            return i;
        }
    }
}

function removeActiveDot(activeDot) {
    dots[activeDot].classList.remove("active");
}

function addActiveDot(activeDot) {
    dots[activeDot].classList.add("active");
}

const swipeRight = document.querySelector(".swipe-right")
swipeRight.addEventListener("click", () => {
    if (currentCardNumber == (dots.length - 1)) {
        return;
    }
    swipeToCard(Math.floor(currentCardNumber + 1));

})

const swipeLeft = document.querySelector(".swipe-left")
swipeLeft.addEventListener("click", () => {
    if (currentCardNumber == 0) {
        return;
    }
    swipeToCard(Math.ceil(currentCardNumber - 1));
})


for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        swipeToCard(i);
    })
}

