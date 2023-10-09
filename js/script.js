const emailInput = document.getElementById("email");
const confirmInput = document.getElementById("confirm-email");
const message = document.getElementById("email-match-text");

emailInput.addEventListener("input",function(){
	if (emailInput.value !== confirmInput.value) {
		message.textContent = "email does not match!";
		console.log("mismatch");
	} else {
		message.textContent = "";
	}
});

confirmInput.addEventListener("input",function(){
	if (emailInput.value !== confirmInput.value) {
		message.textContent = "email does not match!";
		console.log("mismatch");
	} else {
		message.textContent = "";
	}
});