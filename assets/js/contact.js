const form = document.querySelector(".contact-form")

const nameInput = document.querySelector(".contact-name-input");
const emailInput = document.querySelector(".contact-email-input");
const messageInput = document.querySelector(".contact-message-input");

messageInput.addEventListener("focus", () => {
	if (messageInput.value == "Drop a message to the McAtee Group...") {
		messageInput.value = "";
	}
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendEmail();
})

(function(){
	emailjs.init("zPKR6_gHufVNrHLZT");
})();

/**
 * Send email
 */
function sendEmail() {
    
	const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
	
	if (formData.name == "" || formData.email == "") {
		displayNotification("You must fill in the Name and Email. Please Try again.", "OK", 5000);
        return false;
	}

	var templateParams = {
		from_name: formData.name,
		to_name: "McAtee Group",
		from_email: formData.email,
		message: formData.message,
		reply_to: formData.email
	};

	emailjs.send("service_q2d91ik", "template_0j3zj9k", templateParams, "zPKR6_gHufVNrHLZT")
		.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			displayNotification("The message was successfully sent to McAtee Group. Thank you!", "OK", 5000);
			resetForm();
		}, function(error) {
			console.log('FAILED...', error);
			displayNotification("The message failed to send. Try again or send directly to INFO@mcateegroup.com", "OK", 5000);
		});
}

/**
 * Reset the form values
 */
function resetForm() {
	nameInput.value = "";
	emailInput.value = "";
	messageInput.value = "Leave a message for Dillon...";
}

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

const inputContainer2 = document.querySelector('.input-container-2');
const inputContainer1 = document.querySelector('.input-container-1');

inputContainer1.style.Height = inputContainer2.offsetHeight + 'px';