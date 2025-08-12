document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Input elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const resultBox = document.getElementById("formResult");

  // Error elements
  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const phoneErr = document.getElementById("phoneErr");
  const subjectErr = document.getElementById("subjectErr");
  const messageErr = document.getElementById("messageErr");

  // Regex patterns
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  let valid = true;

  // Reset errors
  [nameErr, emailErr, phoneErr, subjectErr, messageErr].forEach(el => el.textContent = "");

  // Validation
  if (name.value.trim().length < 2) {
    nameErr.textContent = "Name must be at least 2 characters.";
    valid = false;
  }
  if (!emailRegex.test(email.value.trim())) {
    emailErr.textContent = "Enter a valid email address.";
    valid = false;
  }
  if (!phoneRegex.test(phone.value.trim())) {
    phoneErr.textContent = "Enter a valid 10-digit phone number.";
    valid = false;
  }
  if (subject.value.trim().length < 3) {
    subjectErr.textContent = "Subject must be at least 3 characters.";
    valid = false;
  }
  if (message.value.trim().length < 10) {
    messageErr.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  // Show result
  if (valid) {
    const now = new Date();
    const timeStamp = now.toLocaleString();

    resultBox.innerHTML = `✅ Thanks ${name.value.trim()}! Your message is ready for submission.
      <span class="timestamp">Submitted on: ${timeStamp}</span>`;
    resultBox.className = "result success";
    resultBox.style.display = "block";
    setTimeout(() => resultBox.style.opacity = "1", 10); // fade-in
    this.reset();
  } else {
    resultBox.textContent = "⚠ Please fix the errors above.";
    resultBox.className = "result error";
    resultBox.style.display = "block";
    setTimeout(() => resultBox.style.opacity = "1", 10);
  }
});
