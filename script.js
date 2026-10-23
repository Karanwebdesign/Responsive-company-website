// Sunpeak Digital: responsive navigation, current year, and contact form validation.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      navigation.classList.toggle("nav-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        navigation.classList.remove("nav-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    service: document.querySelector("#service"),
    message: document.querySelector("#message"),
    consent: document.querySelector("#consent")
  };
  const status = document.querySelector("#form-status");

  function showError(fieldName, message) {
    const errorElement = document.querySelector(`#${fieldName}-error`);
    if (errorElement) errorElement.textContent = message;
    if (fields[fieldName] && fields[fieldName].type !== "checkbox") {
      fields[fieldName].setAttribute("aria-invalid", message ? "true" : "false");
    }
    return !message;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";
    let valid = true;

    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();

    valid = showError("name", name.length < 2 ? "Please enter at least 2 characters." : "") && valid;
    valid = showError("email", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email address." : "") && valid;
    valid = showError("service", !fields.service.value ? "Please choose a service." : "") && valid;
    valid = showError("message", message.length < 10 ? "Please write at least 10 characters." : "") && valid;
    valid = showError("consent", !fields.consent.checked ? "Please agree before submitting." : "") && valid;

    if (!valid) {
      status.textContent = "Please check the highlighted fields and try again.";
      status.classList.add("status-error");
      const firstInvalid = form.querySelector('[aria-invalid="true"]') || (!fields.consent.checked ? fields.consent : null);
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    status.textContent = "Thanks! The form passed validation. This demo does not send messages to a server yet.";
    status.classList.add("status-success");
    form.reset();
    Object.keys(fields).forEach((fieldName) => showError(fieldName, ""));
  });

  Object.entries(fields).forEach(([fieldName, field]) => {
    if (fieldName === "consent") {
      field.addEventListener("change", () => showError("consent", field.checked ? "" : "Please agree before submitting."));
    } else {
      field.addEventListener("input", () => showError(fieldName, ""));
      field.addEventListener("change", () => showError(fieldName, ""));
    }
  });
});