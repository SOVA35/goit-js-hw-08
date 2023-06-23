import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const storageKey = 'feedback-form-state';




document.addEventListener('DOMContentLoaded', function() {
   
  const saveFormState = throttle(function() {
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.setItem(storageKey, JSON.stringify(formState));
  }, 500);


  form.addEventListener('input', saveFormState);


  form.addEventListener('submit', function(event) {
    event.preventDefault();
      event.currentTarget.reset();
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.removeItem(storageKey);
  console.log(formState);
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const savedFormState = localStorage.getItem(storageKey);
    if (savedFormState) {
      const formState = JSON.parse(savedFormState);
      emailInput.value = formState.email;
      messageInput.value = formState.message;
      console.log(savedFormState);
    } else {
   
    localStorage.removeItem(storageKey);
   
  };
  });



