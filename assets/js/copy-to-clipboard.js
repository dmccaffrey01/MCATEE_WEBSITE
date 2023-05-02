const copyLinks = document.querySelectorAll('.copy-link');


copyLinks.forEach(function (copyLink) {
    copyLink.addEventListener('click', function (event) {
        event.preventDefault();
        const copyText = this.getAttribute('data-copy-text');

        navigator.clipboard.writeText(copyText)
            .then(() => {
                let message = `"${copyText}" - was copied to the clipboard`;
                displayNotification(message, "CLOSE", 3000);
            })
            .catch(() => {
                let message = 'Failed to copy text to clipboard';
                displayNotification(message, "CLOSE", 3000);
            });
    });
});

/**
 * Display notification message
 */
function displayNotification(message, btn1, time) {
	// Define vars
	let notification = document.querySelector(".notification");
	let notificationMessage = document.querySelector(".notification-message");
	let notificationBtn = document.querySelector(".notification-btn");

	notificationMessage.innerText = message;

	notificationBtn.innerText = btn1;

	notification.classList.add("active");

	notificationBtn.addEventListener("click", () => {
		notification.classList.remove("active");
	});

    window.setTimeout(() => {
        notification.classList.remove("active");
    }, time);
}