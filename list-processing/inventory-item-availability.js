function transactionsFor(itemNum, inventory) {
  return inventory.filter((obj) => obj.id === itemNum);
}

function inventoryQuantity(itemNum, inventory) {
  let sum = 0;
  let itemTransactions = transactionsFor(itemNum, inventory);
  itemTransactions.forEach((obj) => {
    if (obj.movement === "in") {
      sum += obj.quantity;
    } else {
      sum -= obj.quantity;
    }
  });
  return sum;
}

function isItemAvailable(itemNum, inventory) {
  let itemQuantity = inventoryQuantity(itemNum, inventory);
  return itemQuantity > 0;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
