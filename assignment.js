// https://github.com/azizsheq/Assignment-Three
// github repositori link above ^

// then copy the whole file and submit into the submission box

/**
 * kilometerToMeter
 * this function to receive a kilometer unit
 * then return a meter unit
 */
function kilometerToMeter(km) {

    // initializing the variable value as '0'
    var meter = 0;
    // error texts
    var errorTxt = "Sorry, Kilometer cannot be Negative, Try Again.";
    var errorTxtForZero = "Sorry, Please add Value more than Zero / '0', Try Again.";

    if (km < 0) {           //validation - if the unit input is Negative 
        return errorTxt;
    } else if (km == 0) {   //validation - if the unit input is Zero / '0'
        return errorTxtForZero;
    } else {
        meter = km * 1000;  // 1 Kilometer = 1000 Meter
        return meter;
    }
}
// test
var meter = kilometerToMeter(1);
console.log(meter);

/**
 * budgetCalculator
 * this function will receive quantity of three different product
 * then return the total price of the products together where product prices are prefixed 
 */
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop) {

    // given product prices
    var watchPrice = 50.00;
    var phonePrice = 100.00;
    var laptopPrice = 500.00;

    // to hold the total price and initializing the variable as '0'
    var totalPrice = 0;

    // error texts
    var errorTxt = "Sorry, Number of Product cannot be Negative, Try Again.";
    var errorTxtForZero = "Sorry, Please add at least one Product, Try Again.";

    if (numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0) {              //validation - if the input is Negative
        return errorTxt;
    } else if (numOfWatch == 0 && numOfPhone == 0 && numOfLaptop == 0) {    //validation - if the input is Zero / '0' for all product
        return errorTxtForZero;
    } else {
        totalPrice = ((numOfWatch * watchPrice) + (numOfPhone * phonePrice) + (numOfLaptop * laptopPrice));
        return totalPrice;
    }
}
//test
var cart = budgetCalculator(0, 0, 1);
console.log(cart);


/**
 * hotelCost
 * this function will receive the duration in days for staying in hotel
 * then return the cost of duration
 */
function hotelCost(duration) {

    // initializing the laps
    var lapOne = 0;
    var lapTwo = 0;
    var lapThree = 0;

    // to hold the total calculated rent and initializing the variable as '0'
    var totalRent = 0;

    // error texts
    var errorTxt = "Sorry, Hotel Duration Days cannot be Negative, Try Again.";
    var errorTxtForZero = "Sorry, Please add at least one Day Duration, Try Again.";

    if (duration < 0) {                             //validation - if the duration is Negative
        return errorTxt;
    } else if (duration == 0) {                      //validation - if the duration is Zero / '0'
        return errorTxtForZero;
    } else if (duration > 0 && duration <= 10) {    // given condition for lap one which is 1 to 10 days
        lapOne = duration * 100.00;
        return totalRent = lapOne;
    } else if (duration > 10 && duration <= 20) {   // given condition for lap one which is 11 to 20 days
        lapOne = 10 * 100.00;
        lapTwo = (duration - 10) * 80.00;
        return totalRent = lapOne + lapTwo;
    } else {                                        // given condition for lap one which is more than 20 days
        lapOne = 10 * 100.00;
        lapTwo = 10 * 80.00;
        lapThree = (duration - 20) * 50.00;
        return totalRent = lapOne + lapTwo + lapThree;
    }
}
// test
var hotelStay = hotelCost(1);
console.log(hotelStay);

/**
 * megaFriend
 * this function will receive an array of some names (strings)
 * then return the biggest name(string) from that array
 */
function megaFriend(nameArray) {

    // to hold the counted values of string and and initializing the variable as '0'
    var max = 0;

    // to hold the biggest name / string
    var megaName = '';

    // error texts
    var errorTxt = 'Sorry, There is an Empty String, Try Again.';

    for (var i = 0; i < nameArray.length; i++) {
        var element = nameArray[i];
        var num = element.length;
        if (num == 0) {         //validation - if the string legth is Zero / '0'
            return errorTxt;
        }
        else if (num > max) {   // comparing the length of the string with previous one
            max = num;
            megaName = nameArray[i];
        }
    }
    return megaName;
}
//test
var friendName = ["Abul Kalam", "Jhon", "X", "Mr No One and Someone",];
var biggest = megaFriend(friendName);
console.log(biggest);