// Write your code here
// inventory.js

// Declare and initialize the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

/**
 * Logs the first product in the products array.
 */
function logFirstProduct() {
  console.log(products[0]);
}

/**
 * Updates the product name at the given index.
 * If the index is out of range, the function does nothing.
 * @param {number} index - The index of the product to update.
 * @param {string} newName - The new product name.
 */
function updateProductName(index, newName) {
  if (typeof index === "number" && index >= 0 && index < products.length) {
    products[index] = newName;
  }
}

/**
 * Removes the last product from the products array.
 */
function removeLastProduct() {
  products.pop();
}

/**
 * Adds a new product to the end of the products array.
 * @param {string} name - The product name to add.
 */
function addProduct(name) {
  products.push(name);
}

// Export for tests
module.exports = {
  products,
  logFirstProduct,
  updateProductName,
  removeLastProduct,
  addProduct,
};





// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
