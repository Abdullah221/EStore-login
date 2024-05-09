document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = document.querySelector('button');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Your authentication logic here
        // For demonstration purposes, let's assume authentication is successful if email and password are both "admin"
        if (email === 'admin' && password === 'admin') {
            window.location.href = 'blogs.html'; // Redirect to blogs.html
        } else {
            alert('Incorrect email or password.');
        }
    });
});