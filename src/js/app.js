import CreditCardFormWidget from "./creditCardFormWidget";

const container = document.querySelector('.container');
const form = new CreditCardFormWidget(container);

form.bindToDOM();
