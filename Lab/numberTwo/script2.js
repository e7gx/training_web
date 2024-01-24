document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const phoneInput = document.getElementById('username');
    const countrySelect = document.getElementById('select');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting until we've done our validation

        const phone = phoneInput.value;
        const country = countrySelect.options[countrySelect.selectedIndex].text;

        let phoneRegex;
        if (country === 'KSA') {
            // KSA phone numbers should start with 05 followed by 8 digits
            phoneRegex = /^05\d{8}$/;
        } else {
            // Other countries should start with +966 or 00966 followed by 8 to 11 digits
            phoneRegex = /^(\+966|00966)[\s-]?\d{8,11}$/;
        }

        const isValid = phoneRegex.test(phone);
        if (!isValid) {
            alert('Please enter a valid phone number for the selected country.');
            return false; // Stop the form submission
        }

        // If the number is valid, you might want to continue with the form submission
        // form.submit(); // Uncomment this to allow the form to submit
    });
});
