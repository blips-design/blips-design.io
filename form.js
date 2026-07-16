document
.getElementById("feedbackForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    localStorage.setItem(
        "feedback",
        JSON.stringify(data)
    );

    alert("Form submitted successfully.");

    this.reset();
});
