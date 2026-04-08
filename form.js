const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const fields = {
  fullName: document.getElementById("fullName"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  subject: document.getElementById("subject"),
  message: document.getElementById("message"),
};

const errors = {
  fullName: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  phone: document.getElementById("phoneError"),
  subject: document.getElementById("subjectError"),
  message: document.getElementById("messageError"),
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return phone.trim() === "" || /^\+?[0-9()\s-]{7,20}$/.test(phone.trim());
}

function clearErrors() {
  Object.values(errors).forEach((errorEl) => {
    errorEl.textContent = "";
  });
  successMessage.textContent = "";
}

function showError(fieldName, message) {
  errors[fieldName].textContent = message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let formIsValid = true;
  const values = {
    fullName: fields.fullName.value.trim(),
    email: fields.email.value.trim(),
    phone: fields.phone.value.trim(),
    subject: fields.subject.value.trim(),
    message: fields.message.value.trim(),
  };

  if (!values.fullName) {
    showError("fullName", "Please enter your full name.");
    formIsValid = false;
  }

  if (!values.email) {
    showError("email", "Please enter your email address.");
    formIsValid = false;
  } else if (!validateEmail(values.email)) {
    showError("email", "Please enter a valid email address.");
    formIsValid = false;
  }

  if (values.phone && !validatePhone(values.phone)) {
    showError("phone", "Please enter a valid phone number.");
    formIsValid = false;
  }

  if (!values.subject) {
    showError("subject", "Please enter a subject.");
    formIsValid = false;
  }

  if (!values.message) {
    showError("message", "Please enter a message.");
    formIsValid = false;
  }

  if (!formIsValid) {
    return;
  }

  successMessage.textContent = "Thank you! Your request has been submitted successfully.";
  form.reset();
});
