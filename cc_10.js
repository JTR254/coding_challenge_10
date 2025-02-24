// Task 1 - Creating a Product Class

class Product {
    constructor (name, id, price, stock) { // created class with product name, id, price, and stock
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() { // method that returns the product details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    }
    updateStock(quantity) { // method that updates stock amount when new orders are placed
        this.stock -= quantity
        return `The new stock amount is ${this.stock}`
    }
};
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // logs the method to the console
prod1.updateStock(3);
console.log(prod1.getDetails()); // logs the updated method to the console

