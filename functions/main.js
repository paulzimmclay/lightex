// function go(direction, speed) {
//     console.log("The car is moving " + direction + ", at" + speed + " mph.");
// }

// go("forward", 30);

const go = (direction, mph) => {
    console.log(`The car is moving ${forward} at ${mph} mph.`);
    const element = document.getElementById("car");
    return element;
}

const printer = go("forward", 100);
document.write(printer);