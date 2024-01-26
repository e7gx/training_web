document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const phoneInput = document.getElementById('username');
    const countrySelect = document.getElementById('select');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting until we've done our validation

        const phone = phoneInput.value;
        const country = countrySelect.value; // Use value to get the option value

        let phoneRegex;
        switch (country) {
            case 'KSA':
                phoneRegex = /^05\d{8}$/;
                break;
            case 'OMAN':
                phoneRegex = /^(\+968)[\s-]?\d{8,11}$/;
                break;
            case 'UK':
                phoneRegex = /^(\+44)[\s-]?\d{8,12}$/;
                break;
            default:
                // Handle the case where no country is selected or a country without a specific regex
                alert('Please select a country and enter a valid phone number.');
                return false;
        }

        // Now check the validity only if phoneRegex has been defined
        if (phoneRegex && !phoneRegex.test(phone)) {
            alert('Please enter a valid phone number for the selected country.');
            return false; // Stop the form submission
        } else{
            alert('welcome this is a valid Number !!!!!!')
        }

        // Here, you could proceed with form submission, for example using an AJAX call
        // or by uncommenting the following line to allow the form to submit normally.
        // form.submit();
    });
});
