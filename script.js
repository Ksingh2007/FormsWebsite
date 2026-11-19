document.getElementById("myForm").addEventListener("submit", function(event) {
    var errorDiv = document.getElementById("error");
    errorDiv.textContent = ""; // Clear any previous error messages

    // Check if the Terms and Conditions checkbox is checked
    var agreeCheckbox = document.getElementById("fagree");
    if (!agreeCheckbox.checked) {
        event.preventDefault(); // Prevent form submission
        errorDiv.textContent = "You must agree to the Terms and Conditions.";
        return;
    }

    // Phone number validation
    var phoneNumber = document.getElementById("fnum").value;
    var phonePattern = /^[0-9]{10,15}$/; // Only allows digits, length between 10 to 15 digits

    if (!phonePattern.test(phoneNumber)) {
        event.preventDefault(); // Prevent form submission
        errorDiv.textContent = "Please enter a valid phone number (10-15 digits).";
    }
});