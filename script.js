document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const homeText = document.querySelector(".home-text");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    homeText.classList.add("show");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(homeText);
});
function login(){
    const password = document.getElementById("password").value;
    const msg = document.getElementById("message");
    const minlength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    if (password.length<minlength){
        msg.textContent = "Password must be 8 characters long.";
    }else if (!hasUpperCase){
        msg.textContent = "Password must contain uppercase letter";
    }else if (!hasLowerCase){
        msg.textContent = "Password must contain lowercase letter";
    }else if (!hasNumbers){
        msg.textContent = "Password must contain numbers";
    }else if (!hasSpecialChar){
        msg.textContent = "Password must contain special characters";
    }else{
        msg.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "grade.html";
        }, 1500);
    }
}
document.getElementById("year").textContent = new Date().getFullYear();