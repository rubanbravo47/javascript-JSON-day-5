//for - loop
var sandwich = {
    "bread" : "wheat braed",
    "mayyo" : "egg mayyo",
     "vag1" : " onion",
    " veg2" : " capsicum",
    " salt" : "one pinch"

};
 for (var i = 0; i<sandwich.length; i++){
    console.log(sandwich[i]);
 }

 


//for of - loop 
         var num = [1,2,3,4,5,6,7,8,9,0];
         for(var newnum of num){
            console.log(num);
         }

  // for each - loop 
  
   var a =[1,2,3,4,5];
   a.forEach(element => {
    console.log(element)
   })



   // for in loop
var burger = {
    "bun" : "maidha",
    "tomato" : "veg mayyo",
     "vegge" : " onion chopped",
    " vegge" : " capsicum chopped",
    " powder" : "hot & spicy pwder"

};
for ( var i in burger){
    console.log(i,burger[i]);
    };

    
