const scriptURL = 'https://script.google.com/macros/s/AKfycby3BJTWfMAXDcLN3JMK-tG8OB_0HVir7QFnrgAIkLabKDgWsFYU_CszNaCcnYRdOWlv/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()

  // Check if all form fields are filled
  if (validateForm()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        if (response.ok) {
          alert("Thank you! Your form is submitted successfully.")
          window.location.href = './welcome.html'; // Change this URL to the desired next page URL
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => console.error('Error!', error.message))
  } else {
    alert("Please fill in all the fields before submitting the form.")
  }
})

// Function to validate the form fields
function validateForm() {
  let isValid = true;
  const formElements = form.elements;

  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].type !== 'submit' && formElements[i].value.trim() === '') {
      isValid = false;
      break;
    }
  }

  return isValid;
}
