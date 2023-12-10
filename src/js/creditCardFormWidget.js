import { dataCards } from './data';
import { getPaymentSystem } from './getPaymentSystem';
import { validatorCards } from './validatorCards';

export default class CreditCardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
    this.onFilter = this.onFilter.bind(this);
  }

  bindToDOM() {
    const cardFormWidget = `<form class="card-form-widget">
      <div class="cards">
      </div>
      <div class="control">
        <input type="text" id="numberCart-input" class="input" placeholder="Credit card number">
        <button class="submit">Click to Validate</button>
      </div>
     </form>
    `;
    
    this.parentEl.insertAdjacentHTML('afterBegin', cardFormWidget);
    
    const cards = this.parentEl.querySelector('.cards');

    for (let card in dataCards) {
      const newCard = document.createElement('div');

      newCard.id = card;

      newCard.classList.add('card');
      cards.appendChild(newCard);
    }

    this.element = this.parentEl.querySelector('.card-form-widget');
    this.submit = this.element.querySelector('.submit');
    this.input = this.element.querySelector('.input');

    this.registrationEvents();
  }

  registrationEvents() {
    this.element.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onFilter);
  }

  onFilter(e) {
    e.preventDefault();
    
    const value = this.input.value;
    const cards = this.parentEl.querySelectorAll('.card');
    
    if (getPaymentSystem(value)) {
      console.log(getPaymentSystem(value));
      for (let card of cards) {
        if (card.id !== getPaymentSystem(value)) {
          card.classList.remove('active');
          card.classList.add('disabled');
        } else {
          card.classList.add('active');
          card.classList.remove('disabled');
        }
      }      
    } else {
      for (let card of cards) {
        card.classList.remove('disabled');
        card.classList.remove('active');
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    
    const value = this.input.value;
    
    if (validatorCards(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}
