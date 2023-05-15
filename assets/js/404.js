const btn = document.querySelector('.return-home-btn');
const text = document.querySelector('.error-text');
let reload = false;

if (document.location.pathname === '/zoom') {
    text.textContent = 'Redirecting to zoom...';
    btn.textContent = 'Go to zoom';
    window.location.href = 'https://us02web.zoom.us/j/4146842904';
    btn.setAttribute("href", "https://us02web.zoom.us/j/4146842904");
    reload = true;
}
