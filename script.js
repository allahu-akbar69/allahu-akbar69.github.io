
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let successMessage = document.getElementById("successMessage");

    if (!name || !email || !subject || !message) {
        alert("⚠️ Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Hiển thị thông báo gửi thành công
    successMessage.classList.remove("hidden");

    // Reset form sau khi gửi
    document.getElementById("contactForm").reset();

    // Ẩn thông báo sau 5 giây
    setTimeout(() => {
        successMessage.classList.add("hidden");
    }, 5000);
}

