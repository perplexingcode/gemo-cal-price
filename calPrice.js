const orderItem = {
  drinkType: '',
  size: '',
  cream: '',
  pumps: '',
  breakFast: '',
  foodOption: '',
};

// Final price = base price + markups + tax
const finalPrice = '';

//  Options
const drinkPrices = {
  Hot: 2,
  Cold: 2,
  Blended: 3,
};
const sizePrices = {
  S: 0,
  M: 0.5,
  L: 1,
};
const creams = ['WithCream', 'WithoutCream'];

const creamPrices = {
  WithCream: 0.5,
  WithoutCream: 0,
};

function calculatePrice1(item, add) {
  const { drinkType, size, whippedCream } = item;
  // Exceptions
  if (Object.keys(drinkTypes).indexOf(drinkType) === -1) return;

  if (size === 'L' && drinkType === 'Hot') {
    alert('Large size is only available for cold and blended drinks.');
    process.exit();
  }

  price = drinkPrices[drinkType];
  price += sizePrices[size];
  price += creamPrices[whippedCream];

  return price + add || 0;
}

function calculatePrice2(item) {
  sizePrices.XL = 1.5;
  drinkPrices.MilkTea = 2.25;

  var milkPrices = {
    Whole: 0,
    Almond: 0.5,
  };

  add += milkPrices[item.milk];

  let price = calculatePrice1(item, add);
  return price;
}

function calculatePrice3(drinkType, pumps) {
  if (pumps > 6) {
    alert('Maximum 6 pumps of chocolate sauce.');
  }
  if (pumps < 0) {
    alert('Pumps cannot be negative.');
  }
  if (drinkType === 'Hot' && pumps > 2) {
    finalPrice += 0.5 * (pumps - 2);
  }
}

function calculatePrice4() {
  var breakFasts = ['Sandwich', 'Bagel'];
  basePrices.Sandwich = 3;
  basePrices.Bagel = 3;

  var foodOptions = ['Egg', 'Turkey', 'Butter', 'CreamCheese'];
  var foodOptionsMarkups = {
    Egg: 1,
    Turkey: 1,
    Butter: 0.5,
    CreamCheese: 0.5,
  };
}

function calculatePrice5(orderItems) {
  let invoice = '';
  for (let item of orderItems) {
  }
  return {
    invoice,
    price,
  };
}
