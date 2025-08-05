/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/** @type {Item[]} */
const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 5, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// === Complete the functions below! ===

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  // Print each item's name in the items list
  const print = function (item) {
    console.log(item.name);
  };
  items.forEach(print);
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // Uppercase all item names in the item array
  const upper = items.map((item) => item.name.toUpperCase());
  return upper;
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // Fin the item that contains the same id as provided
  const item_match = items.find((item) => item.id === id);

  // Once provided return the item
  return item_match;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name` if found
 */
function getItemPriceByName(items, name) {
  // const item = items.find((item) => item.name === name);
  // return item.price;
  // Iterate through all items in the items array
  for (let i = 0; i < items.length; i++) {
    let current_item = items[i];
    // Once the item with the same name is found
    if (current_item.name === name) {
      // Return the price of that item
      return current_item.price;
    }
  }
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // Return all items found that match the same category
  const items_in_category = items.filter((item) => item.category === category);
  return items_in_category;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // Sum all quantities
  const totalItems = items.reduce((accumulator, current) => {
    total = accumulator + current.quantity;
    return total;
  }, 0);
  return totalItems;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function getTotalPrice(items) {
  // Sum the total cost of the items
  const totalCost = items.reduce((accumulator, current) => {
    total = accumulator + current.quantity * current.price;
    return total;
  }, 0);

  return totalCost;
}

// === READ BUT DO NOT CHANGE THE CODE BELOW ===

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
