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
   var result = hotelCost(23);
console.log(result);