document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Mock validation
    if (email === "test@example.com" && password === "password123") {
        alert("Sign In Successful!");
        window.location.href = "dashboard-client.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
