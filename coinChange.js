//
// Coin Change
// Objectives:
//
//     Write a function that creates and returns an object.
//
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
//
// Example: coinChange(312) returns
//
// {dollars: 3, dimes: 1, pennies: 2}
//
// Example: coinChange(78) returns
//
// {quarters: 3, pennies: 3}
//
// BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.
//
// Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns
//
// {dollars: 3, quarters: 2, nickels: 1}
//

function coinChange(pennyCollection) {

  coinReference = {dollar : 100, quarter : 25, dime : 10, nickel : 5, penny : 1};
  coinCollection = {};

  for ( coin in coinReference ) {
    coinCollection[coin] = Math.floor(pennyCollection / coinReference[coin]);
    pennyCollection %= coinReference[coin];
  }
  return coinCollection;
}
console.log(coinChange(312));
console.log(coinChange(78));
