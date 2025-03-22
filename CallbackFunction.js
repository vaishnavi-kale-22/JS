// Basic Callback Function
function introduce(person, callback) {
    console.log(`Hey, my name is ${person}.`);
    callback();
}

function sayThanks() {
    console.log("Nice to meet you!");
}

introduce("Aarav", sayThanks);

// Callback for Asynchronous operation
function loadData(callback) {
    console.log("Loading data...");
    setTimeout(() => {
        callback("Data successfully loaded!");
    }, 1500);
}

loadData(response => console.log(response));
