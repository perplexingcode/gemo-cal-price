//  Options
const drinkTypes = ['hot', 'cold', 'blended'];
const sizes = ['S', 'M', 'L'];
const creams = ['withCream', 'withoutCream'];

const sizeMarkups = {
  S: 0,
  M: 0.5,
  L: 1,
};

const drinkTypeMarkups = {
  hot: 0,
  cold: 0,
  blended: 1,
};

const creamMarkups = {
  withCream: 0.5,
  withoutCream: 0,
};

function calculatePrice1(drinkType, size, whippedCream) {
  // Exceptions
  if (size === 'L' && drinkType === 'hot') {
    alert('Large size is only available for cold and blended drinks.');
  }

  if (
    drinkTypes.indexOf(drinkType) === -1 ||
    sizes.indexOf(size) === -1 ||
    creams.indexOf(whippedCream) === -1
  ) {
    alert('Invalid input, please double check your order.');
  }

  // Price calculation
  let price = 2; // base price

  price += sizeMarkups[size];
  price += creamMarkups[whippedCream];
  price += drinkTypeMarkups[drinkType];

  return price;
}
