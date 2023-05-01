const copyLinks = document.querySelectorAll('.copy-link');
const message = document.querySelector('.notification-message');
const notification = document.querySelector(".notification");

copyLinks.forEach(function (copyLink) {
    copyLink.addEventListener('click', function (event) {
        event.preventDefault();
        const copyText = this.getAttribute('data-copy-text');

        navigator.clipboard.writeText(copyText)
            .then(() => {
                message.textContent = `"${copyText}" - was copied to the clipboard`;
                notification.classList.add("active");
                window.setTimeout(() => {
                    notification.classList.remove("active");
                }, 3000);
            })
            .catch(() => {
                message.textContent = 'Failed to copy text to clipboard';
                notification.classList.add("active");
                window.setTimeout(() => {
                    notification.classList.remove("active");
                }, 3000);
            });
    });
});