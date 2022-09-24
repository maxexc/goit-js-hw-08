import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
const dataForm = {};

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', throttle(onTextInput, 1000));
dataStore();

function onSubmitBtn(event) {
  event.preventDefault();
  console.log(`Email: ${form.email.value} message: ${form.message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}

function onTextInput(event) {
  dataForm.email = form.elements.email.value;
  dataForm.message = form.elements.message.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function dataStore() {
  const savedText = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (savedText) {
    form.email.value = savedText.email;
    form.message.value = savedText.message;
  }
}
