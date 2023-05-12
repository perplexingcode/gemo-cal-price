//  Options
const drinkTypes = ['Hot', 'Cold', 'Blended'];
const sizes = ['S', 'M', 'L'];
const creams = ['WithCream', 'WithoutCream'];

const sizeMarkups = {
  S: 0,
  M: 0.5,
  L: 1,
};

const drinkTypeMarkups = {
  Hot: 0,
  Cold: 0,
  Blended: 1,
};

const creamMarkups = {
  WithCream: 0.5,
  WithoutCream: 0,
};

function calculatePrice1(drinkType, size, whippedCream) {
  // Exceptions
  if (size === 'L' && drinkType === 'Hot') {
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

function calculatePrice2() {
  sizes.push('XL');
  sizeMarkups.XL = 1.5;

  drinkTypes.push('MilkTea');
  drinkTypeMarkups.MilkTea = 0.25;

  var milk = ['Whole', 'Almond'];
  var milkMarkups = {
    Whole: 0,
    Almond: 0.5,
  };
}
