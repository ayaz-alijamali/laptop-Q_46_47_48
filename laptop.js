// Question  _____ 46


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
let myLaptop = new Laptop("HP Pro Book", "G8", 2024);

// Call the describe method to log information about the laptop
myLaptop.describe(); // Output: This is a 2024 HP probook g8 laptop.


// Question  ___ 47


const laptops = [
    { make: 'Apple', model: 'MacBook Pro', year: 2022 },
    { make: 'Dell', model: 'XPS 15', year: 2023 },
    { make: 'HP', model: 'Pro Book G8', year: 2024 }
  ];
  
  const [firstLaptop, secondLaptop] = laptops;
  
  console.log(firstLaptop);
  console.log(secondLaptop);
  

// Question ____ 48


const pricesSet1 = [1200, 900, 1500, 1100];
const pricesSet2 = [1300, 1000, 1400, 1250];

const combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);

console.log(combinedPrices);
