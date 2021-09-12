let info = [
  { item: "apple", type: "Fuji", weight: 10, pricePerKilo: "$3" },
  { item: "orange", type: "Clementine", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Nova", quantity: 1, pricePerItem: "$5" },
  { item: "orange", type: "Navel", weight: 6, pricePerKilo: "$7" },
  { item: "pineapple", type: "Queen", quantity: 4, pricePerItem: "$15" },
  { item: "pineapple", type: "Pernambuco", quantity: 3, pricePerItem: "$12" },
  { item: "apple", type: "Cameo", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Trio", quantity: 2, pricePerItem: "$9" },
  {
    item: "pineapple",
    type: "Red Spanish",
    quantity: 3,
    pricePerItem: "$9,99",
  },
  { item: "watermelon", type: "Millionaire", quantity: 2, pricePerItem: "$7" },
  { item: "orange", type: "Tangerine", weight: 4, pricePerKilo: "$4,99" },
  { item: "apple", type: "Jazz", weight: 4, pricePerKilo: "$5" },
];

let parseInfo = (info) => {
  if (!info) return {};
  if (typeof info === "object") return info;
  if (typeof info === "string") return JSON.parse(info);
  return {};
};

let products = parseInfo(info);
console.log(products);

let validateInfo = (info) => {
  info.forEach((object) => {
    if (
      typeof object.item !== "undefined" &&
      typeof object.type !== "undefined" &&
      typeof object.weight !== "undefined" &&
      typeof object.pricePerKilo !== "undefined"
    ) {
      object.pricePerKilo = parseFloat(
        object.pricePerKilo.replace("$", "".split(",").join("."))
      );
      if (
        typeof object.item === "string" &&
        typeof object.type === "string" &&
        typeof object.quantity !== "undefined" &&
        typeof object.pricePerItem === "number"
      ) {
        return true;
      } else {
        return false;
      }
    } else if (
      typeof object.item !== "undefined" &&
      typeof object.type !== "undefined" &&
      typeof object.quantity !== "undefined" &&
      typeof object.pricePerItem !== "undefined"
    ) {
      object.pricePerItem = parseFloat(
        object.pricePerItem.replace("$", "").split(",").join(".")
      );
      return (
        typeof object.item === "string" &&
        typeof object.type === "string" &&
        typeof object.quantity === "number" &&
        typeof object.pricePerItem === "number"
      );
    }
  });
};

validateInfo(products);

let countWatermelons = (array) => {
  let quantity = 0;
  array.forEach((object) => {
    if (object.item == "watermelon") quantity++;
  });
  console.log(`Watermelons - ${quantity}`);
};

countWatermelons(products);

let countApplesWeight = (array) => {
  let weight = 0;
  array.forEach((object) => {
    if (object.item == "apple") weight += object.weight;
  });
  console.log(`Apples - ${weight}`);
};

countApplesWeight(products);

let sortItems = (array) => {
  let sortedItems = [];
  array.forEach((object) => {
    if (object.item) sortedItems.push(object.item);
  });
  sortedItems.sort();
  let makeSet = new Set(sortedItems);
  sortedItems = [...makeSet];
  console.log(sortedItems);
};

sortItems(products);

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

let sortByCost = (array) => {
  let pricePerKilo = [],
    pricePerItem = [];
  array.forEach((object) => {
    if (typeof object.pricePerKilo !== "undefined") {
      pricePerKilo.push(`$${parseFloat(object.pricePerKilo)}`);
    } else if (typeof object.pricePerItem !== "undefined") {
      pricePerItem.push(`$${parseFloat(object.pricePerItem)}`);
    }
  });
  let totalPrice = pricePerItem.concat(pricePerKilo);
  calcTotalPrice = pricePerItem.concat(pricePerKilo);
  pricePerKilo.sort(compare);
  pricePerItem.sort(compare);
  totalPrice.sort(compare);
  console.log(`price per kilo ${pricePerKilo}`);
  console.log(`price per item ${pricePerItem}`);
  console.log(`total price ${totalPrice}`);
};

sortByCost(products);

let getType = (array) => {
  let price = [];
  let type;
  array.forEach((object) => {
    if (object.item === "orange") {
      price.push(parseFloat(object.pricePerKilo));
      price.sort(compare);
      let cheapestOrange = price[0];
      if (object.pricePerKilo === cheapestOrange) {
        type = object.type;
      }
    }
  });

  console.log(`The cheapest orange type is: ${type}`);
};

getType(products);

let totalPrice = [];

let getCost = (array) => {
  let applesPrice = [],
    pineapplesPrice = [],
    watermelonsPrice = [],
    orangesPrice = [];
  array.forEach((object) => {
    if (object.item === "apple") {
      if (typeof object.pricePerKilo !== "undefined") {
        applesPrice.push(`$${object.pricePerKilo}`);
        totalPrice.push(parseFloat(object.pricePerKilo));
      }
    } else if (object.item === "pineapple") {
      if (typeof object.pricePerItem !== "undefined") {
        pineapplesPrice.push(`$${object.pricePerItem}`);
        totalPrice.push(parseFloat(object.pricePerItem));
      }
    } else if (object.item === "watermelon") {
      if (typeof object.pricePerItem !== "undefined") {
        watermelonsPrice.push(`$${object.pricePerItem}`);
        totalPrice.push(parseFloat(object.pricePerItem));
      }
    } else if (object.item === "orange") {
      if (typeof object.pricePerKilo !== "undefined") {
        orangesPrice.push(`$${object.pricePerKilo}`);
        totalPrice.push(parseFloat(object.pricePerKilo));
      }
    }
  });
  console.log(
    `Apples - ${applesPrice},Pineapples - ${pineapplesPrice}, Watermelons - ${watermelonsPrice}, Oranges - ${orangesPrice}`
  );
  return totalPrice;
};

getCost(products);

let calculateTotalPrice = (price) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let calculate = price.reduce(reducer);
  console.log(
    `The cost that should be paid for all these goods is: $${calculate}`
  );
  return calculate;
};

calculateTotalPrice(totalPrice);
