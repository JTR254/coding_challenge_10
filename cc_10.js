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

// Task 2 - Order Class

class Order { // created Order class
    constructor (orderId, product, quantity) {
        this.orderId = orderId
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity); // used updateStock method to adjust the quantity after the order was placed
    }
    getOrderDetails(){ // created method to gather the order details
        const totalPrice = this.product.price * this.quantity // allows totalPrice to equal the product price * the quantity
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price $${totalPrice}`
    }
};
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 3 - Inventory Class

class Inventory { // creates inventory class
    constructor() { 
        this.products = []
        this.orders = []
    }
    addProduct(product) { // method that adds products to the array
        this.products.push (product)
    }
    listProducts() { // method that returns the details for each product
        return this.products.forEach(product => 
            console.log(product.getDetails())
        )
    }
    placeOrder(orderId, product, quantity) { // this method decides of placing an order is an option based on quantity
        if (product.stock >= quantity) {
            let order = new Order (orderId, product, quantity);
            this.orders.push(order);
        } else {
        return `${product.name} is out of stock`
        }
    };
    listOrders() { // this method logs each of the orders to the console
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
};
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4 - Order Management
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"