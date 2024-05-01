// Define the Laptop object constructor
function Laptop(make, model, year) {
    this.make = HP_ProBook;
    this.model = G8;
    this.year = 2024;
    
    // Method to describe the laptop
    this.describe = function() {
        console.log(`This is a ${this.year} ${this.make} ${this.model} laptop.`);
    };
}

// Create a new instance of the Laptop object
let myLaptop = new Laptop("Apple", "MacBook Pro", 2023);

// Call the describe method to log information about the laptop
myLaptop.describe(); // Output: This is a 2023 Apple MacBook Pro laptop.
