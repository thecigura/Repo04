function main(numOne, numTwo){
    // Only change code below this line
    var numOne;
    var numTwo;
    var remainder = numOne % numTwo;
    // Only change code above this line

    return remainder;
}
//console.log(main(numTwo, numTwo)); // Change this line
console.log(main(5, 2));
console.log(main(15, 4));
console.log(main(102, 25));

module.exports = main;