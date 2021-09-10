// Shop Stocktaking

// Create a function that receives the array of goods and returns the cost that should be paid for all these goods.

// Your code should:
// - Validate the data according to the following rules: item: string,  type: string, weight: number,
// quantity: number, pricePerKilo: `“$” + number` - string,  pricePerItem: `“$” + number` - string
// - Print to the console the total quantity of all watermelons (`Watermelons - ${quantity}`);
// - Print to the console the total weight of all apples (`Apples - ${weight}`);
// - Sort the array in alphabetical order by item field and print it to the console;
// - Sort the array by cost of the record and print it to the console;
// - Print to the terminal the type of oranges with the least price (`The cheapest orange type is: ${type}`);
// - Print to the console the cost of the goods by item name (`Apples - ${costApples},
// Pineapples - ${costPineapples}, Watermelons - ${costWatermelons}, Oranges - ${costOranges}`);
// - Print to the console the result of the execution of this function.

// Note: Try to minimize your code.
// Input array in JSON format:

// [
//   {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
//   {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
//   {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
//   {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
//   {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
//   {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
//   {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
//   {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
//   {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
//   {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
//   {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
//   {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
// ]

// Completed task should be uploaded to github as your own repository. Please insert the link to the repository
//  containing your completed test task below in this form.

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

// - Validate the data according to the following rules: item: string,  type: string, weight: number,
// quantity: number, pricePerKilo: `“$” + number` - string,  pricePerItem: `“$” + number` - string

let calculateTotalPrice = (array) => {
  let validateInfo = (info) => {
    info.forEach((object) => {
      if (
        typeof object.item !== "undefined" &&
        typeof object.type !== "undefined" &&
        typeof object.weight !== "undefined" &&
        typeof object.pricePerKilo !== "undefined"
      ) {
        let priceKilo = object.pricePerKilo.replace("$", "");
        priceKilo = parseInt(priceKilo);
        object.pricePerKilo = priceKilo;
        if (
          typeof object.item === "string" &&
          typeof object.type === "string" &&
          typeof object.weight === "number" &&
          typeof object.pricePerKilo === "number"
        ) {
          // console.log("validation 1.1 succeed");
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
        let pricePerItem = object.pricePerItem.replace("$", "");
        pricePerItem = parseInt(pricePerItem);
        object.pricePerItem = pricePerItem;
        if (
          typeof object.item === "string" &&
          typeof object.type === "string" &&
          typeof object.quantity === "number" &&
          typeof object.pricePerItem === "number"
        ) {
          // console.log("validation 1.2 succeed");
          return true;
        } else {
          return false;
        }
      }
    });
  };

  // validateInfo(products);
  // - Print to the console the total quantity of all watermelons (`Watermelons - ${quantity}`);
  // Print to the console the total weight of all apples (`Apples - ${weight}`);

  let countItems = (array) => {
    let quantity = 0,
      weight = 0;
    array.forEach((object) => {
      if (object.item == "watermelon") {
        quantity++;
        return quantity;
      }
      if (object.item == "apple") {
        weight += object.weight;
        return weight;
      }
    });
    console.log(`Watermelons - ${quantity}`);
    console.log(`Apples - ${weight}`);
  };

  countItems(products);

  // - Sort the array in alphabetical order by item field and print it to the console;

  let sortItems = (array) => {
    let sort = [];
    array.forEach((object) => {
      if (object.item) {
        sort.push(object.item);
      }
    });
    //   sort.sort((a, b) => a - b);
    function compare(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }

      return 0;
    }
    sort.sort(compare);
    return sort;
  };

  //delete duolicats

  let sort = sortItems(products),
    makeSet = new Set(sort);
  sort = [...makeSet];
  console.log(sort);

  // - Sort the array by cost of the record and print it to the console;
  let calcTotalPrice = [];

  let sortByCost = (array) => {
    let pricePerKilo = [],
      pricePerItem = [];
    array.forEach((object) => {
      if (typeof object.pricePerKilo !== "undefined") {
        pricePerKilo.push(
          parseFloat(object.pricePerKilo.replace("$", "").split(",").join("."))
        );
        return pricePerKilo;
      } else if (typeof object.pricePerItem !== "undefined") {
        pricePerItem.push(
          parseFloat(object.pricePerItem.replace("$", "").split(",").join("."))
        );
        return pricePerItem;
      }
    });

    function compare(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }

    let totalPrice = pricePerItem.concat(pricePerKilo);
    calcTotalPrice = pricePerItem.concat(pricePerKilo);

    pricePerKilo.sort(compare);
    pricePerItem.sort(compare);
    totalPrice.sort(compare);

    let prefix = "$";

    pricePerKilo = pricePerKilo.map(function (el) {
      return prefix + el;
    });
    pricePerItem = pricePerItem.map(function (el) {
      return prefix + el;
    });
    totalPrice = totalPrice.map(function (el) {
      return prefix + el;
    });

    console.log(`price per kilo ${pricePerKilo}`);
    console.log(`price per item ${pricePerItem}`);
    console.log(`total price ${totalPrice}`);
  };

  sortByCost(products);

  // - Print to the terminal the type of oranges with the least price (`The cheapest orange type is: ${type}`);

  let getType = (array) => {
    let price = [];
    let type;
    array.forEach((object) => {
      if (object.item === "orange") {
        parseFloat(object.pricePerKilo.replace("$", "").split(",").join("."));
        price.push(object.pricePerKilo);

        function compare(a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        }

        price.sort(compare);
        let cheapestOrange = price[0];
        if (object.pricePerKilo === cheapestOrange) {
          type = object.type;
        }
      }
    });

    console.log(`The cheapest orange type is: ${type}, ${price[0]}`);
  };
  getType(products);

  // - Print to the console the cost of the goods by item name (`Apples - ${costApples},
  // Pineapples - ${costPineapples}, Watermelons - ${costWatermelons}, Oranges - ${costOranges}`);

  let getCost = (array) => {
    let applesPrice = [],
      pineapplesPrice = [],
      watermelonsPrice = [],
      orangesPrice = [];
    array.forEach((object) => {
      if (object.item === "apple") {
        if (typeof object.pricePerKilo !== "undefined") {
          applesPrice.push(object.pricePerKilo);
        } else if (typeof object.pricePerItem !== "undefined") {
          applesPrice.push(object.pricePerItem);
        }
      } else if (object.item === "pineapple") {
        if (typeof object.pricePerKilo !== "undefined") {
          pineapplesPrice.push(object.pricePerKilo);
        } else if (typeof object.pricePerItem !== "undefined") {
          pineapplesPrice.push(object.pricePerItem);
        }
      } else if (object.item === "watermelon") {
        if (typeof object.pricePerKilo !== "undefined") {
          watermelonsPrice.push(object.pricePerKilo);
        } else if (typeof object.pricePerItem !== "undefined") {
          watermelonsPrice.push(object.pricePerItem);
        }
      } else if (object.item === "orange") {
        if (typeof object.pricePerKilo !== "undefined") {
          orangesPrice.push(object.pricePerKilo);
        } else if (typeof object.pricePerItem !== "undefined") {
          orangesPrice.push(object.pricePerItem);
        }
      }
    });
    console.log(
      `Apples - ${applesPrice},Pineapples - ${pineapplesPrice}, Watermelons - ${watermelonsPrice}, Oranges - ${orangesPrice}`
    );
  };

  getCost(products);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  calcTotalPrice = calcTotalPrice.reduce(reducer);
  console.log(typeof calcTotalPrice);

  console.log(
    `The cost that should be paid for all these goods is: $${calcTotalPrice}`
  );
  return calcTotalPrice;
};

calculateTotalPrice(products);

// - Print to the console the result of the execution of this function.
