/**
 * Se puede ejecutar en el NAVEGADOR
 * URL = https://littlesleepies.com/products/rust-rainbows-bamboo-viscose-zippy
 */

const messageElementContainer = document.createElement('div');
messageElementContainer.classList.value = 'featured-tag tw--mt-1.5 lg:!tw-static lg:!tw-translate-x-0 lg:!tw-translate-y-0';
messageElementContainer.style.display = 'none';

const messageElement = document.createElement('div');
messageElement.classList.value = 'featured-tag-text-container';
messageElement.style.backgroundColor = '#D0EBE7';

const priceContainer = document.getElementsByClassName('product__price')[0].parentElement.parentElement;

messageElementContainer.appendChild(messageElement);
priceContainer.insertAdjacentElement('afterEnd', messageElementContainer);


// .querySelector('form[action="/cart/add"')
// .querySelector('[name="quantity"]')

const handleChange = function () {
  let size = document
    .querySelector('form[action="/cart/add"')
    .querySelector('fieldset')
    .querySelector('label.pdp-variant-select-label-active').innerText;

  if (typeof(size) == 'string') {
    size = size.trim();
  }

  let qty = Array.from(document
    .querySelector('form[action="/cart/add"')
    .querySelectorAll('[name="quantity"] '))
    .filter(e => !e.disabled)[0].valueAsNumber;

  if (!(
    size == '2T'
    || size == '3T'
    || size == '18-24 months'
  )) {
    messageElementContainer.style.display = 'none';
    return;
  }

  messageElementContainer.style.display = 'block';

  if (qty === 1) {
    messageElement.innerText = 'Add 2 of this product and the third one is free!';
    return;
  }

  if (qty === 2) {
    messageElement.innerText = 'Add another one free to your cart.';
    return;
  }

  if (qty === 3) {
    messageElement.innerText = 'Congrats! add to cart now!';
    return;
  }

  messageElementContainer.style.display = 'none';
}


// Add listener to buttons
document
  .querySelectorAll('.js-pdp-quantity-input-container button')
  .forEach(button => button.addEventListener('click', handleChange));

// Add listener to fieldset
document
  .querySelector('form[action="/cart/add"')
  .querySelectorAll('fieldset input')
  .forEach(element => element.addEventListener('click', handleChange));
