const swipeDots = document.querySelectorAll(".dot");
const swipeRight = document.querySelector(".swipe-right");
const swipeLeft = document.querySelector(".swipe-left");
const cards = document.querySelectorAll(".testimonial-card");

const getActiveDot = () => {
    let activeDot;

    swipeDots.forEach((dot, i) => {
        if (dot.classList.contains("active")) {
            activeDot = i;
        }
    });

    return activeDot;
}

const getNextDot = (dot, direction) => {
    let nextDot = dot + direction;

    if (nextDot == -1) {
        nextDot = 2;
    } else if (nextDot == 3) {
        nextDot = 0;
    }

    return nextDot;
}

const getPositions = (nextDot) => {
    let positions = ["center", "right", "left"];

    if (nextDot == 1) {
        positions[0] = "left";
        positions[1] = "center";
        positions[2] = "right";
    } else if (nextDot == 2) {
        positions[0] = "right";
        positions[1] = "left";
        positions[2] = "center";
    }

    return positions;
}

const moveDots = (nextDot) => {
    swipeDots.forEach((dot, i) => {
        if (i == nextDot) {
            dot.classList.add("active");
        } else if (dot.classList.contains("active")) {
            dot.classList.remove("active");
        }
    });
}

const swipeCards = (currentDot, nextDot, direction) => {
    let currentPositions = getPositions(currentDot);
    let nextPositions = getPositions(nextDot);

    cards.forEach((card, i) => {
        let currentPosition = currentPositions[i];
        let nextPosition = nextPositions[i];
        if (nextPosition === 'left' && direction == -1) {
            card.style.display = "none";
            card.classList.remove("right");
            card.classList.add("left");
            window.setTimeout(() => {
                card.style.display = "flex";
            }, 400);
        } else if (nextPosition === 'right' && direction == 1) {
            card.style.display = "none";
            card.classList.remove("left");
            card.classList.add("right");
            window.setTimeout(() => {
                card.style.display = "flex";
            }, 400);
        } else {
            card.classList.remove(currentPosition);
            card.classList.add(nextPosition);
        }
    });
}

const moveCards = (direction) => {
    let currentDot = getActiveDot();
    let nextDot = getNextDot(currentDot, direction);

    moveDots(nextDot);
    swipeCards(currentDot, nextDot, direction);
}

let stopSwipe = false;

swipeLeft.addEventListener("click", () => {
    moveCards(-1);
    stopSwipe = true;
});

swipeRight.addEventListener("click", () => {
    moveCards(1);
    stopSwipe = true;
});

document.addEventListener("DOMContentLoaded", () => {
    let swipeInterval = window.setInterval(() => {
        if (stopSwipe) {
            clearInterval(swipeInterval);
        } else {
            moveCards(1);
        }
    }, 4000);
});

const heroWrapper = document.querySelector(".home-hero-wrapper");
const headerEl = document.querySelector("header");

let scrollEnabled = false;
let DOMLoaded = false;
let backToTop = false;

function handleScroll(event) {
  if (!scrollEnabled && DOMLoaded && !backToTop) {
    event.preventDefault();
    document.documentElement.scrollTop = 200;
    heroWrapper.classList.add("transition");
    headerEl.classList.add("transition");
    window.setTimeout(() => {
        scrollEnabled = true;
    }, 500);
  } else if (document.documentElement.scrollTop === 0) {
    scrollEnabled = false;
    backToTop = true;
    heroWrapper.classList.remove("transition");
    headerEl.classList.remove("transition");
    window.setTimeout(() => {
        document.documentElement.scrollTop = 200;

        window.setTimeout(() => {
            backToTop = false;
        }, 500);
    }, 1000);
  }
}

document.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.scrollTop = 200;
    window.setTimeout(() => {
        DOMLoaded = true;
    }, 500);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));