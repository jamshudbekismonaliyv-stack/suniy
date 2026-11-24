// ========================================================
// FRONTEND MENTOR - NEWSLETTER SIGN-UP FORM
// Interactive Form Handling & State Transition
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  const signupCard = document.getElementById('signupCard');
  const successCard = document.getElementById('successCard');
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const errorMsg = document.getElementById('errorMsg');
  const subscribedEmail = document.getElementById('subscribedEmail');
  const dismissBtn = document.getElementById('dismissBtn');

  // Simple, standard email validation
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  };

  const showError = () => {
    emailInput.classList.add('input-error');
    errorMsg.style.display = 'inline-block';
    emailInput.setAttribute('aria-invalid', 'true');
  };

  const clearError = () => {
    emailInput.classList.remove('input-error');
    errorMsg.style.display = 'none';
    emailInput.removeAttribute('aria-invalid');
  };

  // Submit handler
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = emailInput.value.trim();

    if (!value || !isValidEmail(value)) {
      showError();
      emailInput.focus();
    } else {
      clearError();
      subscribedEmail.textContent = value;
      signupCard.classList.add('hidden');
      successCard.classList.remove('hidden');
    }
  });

  // Real-time input listener to clear error
  emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('input-error')) {
      clearError();
    }
  });

  // Dismiss message to return to form
  dismissBtn.addEventListener('click', () => {
    successCard.classList.add('hidden');
    signupCard.classList.remove('hidden');
    emailInput.value = 'ash@loremcompany.com';
    clearError();
  });
});
