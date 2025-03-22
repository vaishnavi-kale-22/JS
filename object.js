let fruit = {
    name: "Mango",
    color: "Yellow",
    taste: "Sweet"
};

console.log(fruit.name); // Output: Mango
console.log(fruit["color"]); // Output: Yellow

// Add a new property
fruit.season = "Summer";

// Update a property
fruit.color = "Golden Yellow";

// Delete a property
delete fruit.taste;

console.log(fruit);
