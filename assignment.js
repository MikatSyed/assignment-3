//problem1
function kilometerToMeter(km){
    var meter = km *1000;
    return meter;
}


/*var result = kilometerToMeter(5);
console.log(result);
*/




//problem2
function budgetCalculator(w,m,l){
     var watch = w * 50;
     var mobile = m * 100;
     var laptop = l * 500;
     var total = watch + mobile + laptop;
     return total;
}

/*var result = budgetCalculator(4,5,9);
console.log(result);
*/


//problem3

function hotelCost(days){
 var cost = 0;

  if(days <=10){
     cost = days * 100;
 }
 else if(days <=20){
    var firstTen = 10*100;
    var remaining = days - 10;
    var secondTen = remaining*80;
    cost = firstTen + secondTen;
 }

 else{
    var firstTen = 10*100;
    var secondTen = 10*80;
    var remaining = days - 20;
    var thirdTen = remaining * 50;
    cost  = firstTen +secondTen + thirdTen;
}
return cost;
}

/*var result = hotelCost(23);
console.log(result);
*/





//problem4
function megaFriend(names){
var maxname = names[0];
for(var i = 0; i< names.length; i++){
    var element = names[i];
    if (element > maxname){
        maxname = names[i];
    }
}
    return maxname;

}

/*var result = megaFriend('asif','newaz','shiful');
var largestname =(result);
console.log(largestname);
*/

