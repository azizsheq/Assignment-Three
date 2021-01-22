// add negative / unexpected values handeling for false value
// code indentation

// add your repositori link here . . . (Put it on the top)

// then copy the whole file and submit into the submission box

// a function to return a Kilometer unit to Meter
function kilometerToMeter(km) {
    var meter = 0;
    if (km < 0){
        console.log("Sorry, Negative Values are Not Accepted, Try Again.");
    } else {
        meter = km * 1000;
        return meter;
    }
}
// test
// var meter = kilometerToMeter(-1.236);
// console.log(meter);

// a function to do budget calculation a = watch (50.00), b = phone(100.00), c = laptop(500.00)
// will return total cost only amount no strings 
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop) {
    var watchPrice = 50.00;
    var phonePrice = 100.00;
    var laptopPrice = 500.00;
    var totalPrice = 0;

    if(numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0){
        console.log("Sorry, Negative Values are Not Accepted, Try Again.");
    } else {
        totalPrice = ( (numOfWatch * watchPrice) + (numOfPhone * phonePrice) +(numOfLaptop * laptopPrice) );
        return totalPrice;
    }
}
//test
// var cart = budgetCalculator(-1,0,0);
// console.log(cart);


//every night (1-10day) 100.00, (11-20day) 80.00, (21day >) 50.00 
function hotelCost(duration) {
    var lapOne = 0;
    var lapTwo = 0;
    var lapThree = 0;
    var totalRent = 0;

    if(duration < 0){
        return console.log("Sorry, Hotel Duration cannot be Negative, Try Again.");
    } else if (duration > 0 && duration <= 10) {
        lapOne = duration * 100.00;
        return totalRent = lapOne;
    } else if (duration > 10 && duration <= 20) {
        lapOne = 10 * 100.00;
        lapTwo = (duration - 10) * 80.00;
        return totalRent = lapOne + lapTwo;
    } else {
        lapOne = 10 * 100.00;
        lapTwo = 10 * 80.00;
        lapThree = (duration - 20) * 50.00;
        return totalRent = lapOne + lapTwo + lapThree;
    }
}
// test
// var hotelStay = hotelCost(-15);
// console.log(hotelStay);

// input an array of some names,  then find the biggest string and return string
function megaFriend(nameArray) {
    var max = 0;
    var megaName = '';
    for(var i = 0; i < nameArray.length; i++){
        var element  = nameArray[i];
        var num = element.length;
        //console.log(num);
        if(num > max){
            max = num;
            megaName = nameArray[i];
            //console.log(megaName);
        }
    }
    return megaName;
}

var friendName = ['Abdullah', 'Kamal', 'Omar Khaiam Bin', 'Jubaier', 'Abul', 'Abdur Rahman'];
var biggest = megaFriend(friendName);
console.log(biggest);