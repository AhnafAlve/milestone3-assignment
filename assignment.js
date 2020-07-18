// 1. feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    if (mile < 0 ){
        return ("Negative values are not allowed");
    }
    return mile;
}
var result = feetToMile(8885);
console.log(result);



// 2.woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalwood = chairCount + tableCount + bedCount;
    return totalwood;
}

var result = woodCalculator(2, 3, 4);
console.log(result);  



//3. brickCalculator

function brickCalculator(floor){

    if(floor < 10){
        return floor * 15;
    }
    if( floor < 20){
        return floor * 12;
    }
    else{
        return floor * 10;
    }
}

var result = brickCalculator(23) * 1000;
console.log(result);



// 4.tinyFriend
function tinyFriend(names){
    var smallest = names[0];
    for( var i = 0; i < names.indexOf; i++){
       var  currentName = names[i];
       if(currentName < smallest){
           smallest = currentName;
        }
    }
    return smallest;
}
var result = tinyFriend(["alve", "tanvir", "shakib", "rakib", "nakib"]);
console.log(result);
