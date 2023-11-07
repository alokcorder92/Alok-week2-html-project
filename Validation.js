<script>
    document.getElementById("registration-form").addEventListener("submit", function (e) {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            e.preventDefault();
        }

        var email = document.getElementById("email").value;
        if (!isValidEmail(email)) {
            alert("Invalid email format");
            e.preventDefault();
        }

        // You can add more validation for other fields and password strength here
    });

    function isValidEmail(email) {
        // A simple email format validation using regular expression
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
    }
</script>
