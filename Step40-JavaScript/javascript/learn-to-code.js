//var name="Jack";
//var age="23";


//var firstName="John";
//var lastName="Smith";
//var dateOfBirth="10-09-2000";

//var message="Welcome, "+firstName;      
//console.log(message);
    
//var sum=10+15;
//var sub=15-10;
//var mul=10*3;
//var div=10/3;
//var mod=10%3;

//var result=10*(5-2);
//console.log(result);


//var myAccountBalance=300;
//var nikeShoes=799.23;
//var coupon=500;

//var val1=23:
//var val2="23";

//if(nikeShoes<=myAccountBalance){
//    myAccountBalance=myAccountBalance-nikeShoes-coupon;
 //   console.log("we just bought some shoes");
//    console.log("Account Balance: " + myAccountBalance);
//}else if(nikeShoes-coupon<=myAccountBalance){
  //     console.log("we just bought some shoes");
    //console.log("Account Balance: " + myAccountBalance);
//}

//else{
//    console.log("Sorry you do not have enough money");
//}

//if(val1===val2){
//    console.log("I am same age as John");
//}else{
//    console.log("Not the same");
//}



//if(1===3 || "joe" === "joe"){
//    console.log("At least One of them is true");
//}else {
//    console.log("BOTH ARE false")
//}


//var students =["Timmy","Jennesa","Arun"];


//var naughtyList=[];


//naughtyList.push(students[0]);
//naughtyList.push("Lavdim");
//console.log(naughtyList);
//var index=naughtyList.indexOf("Timmy");
//if(index>-1){
//  naughtyList.splice(index,1);
//}
//console.log(naughtyList);

//total=10;
//for(var x=0;x<total;x++){
//    console.log(x);
    
//}

//var students =/["John","Jacob","Jingle","Heimer","Smith"];

//for(x=0;x<students.length;x++){
//    console.log(students[x]);
//}

var length1=15;
var width1=10;
var area1=length1*width1;

var length2=12;
var width2=14;
var area2=length2*width2;

function area(length,width){
    var actualarea=length*width;
    return actualarea;
}
var rectanglesAreas=[];
rectanglesAreas.push(area(15,12));
rectanglesAreas.push(area(14,2));
rectanglesAreas.push(area(4,5));
console.log(rectanglesAreas);

var bankBalance=500;

function makeTransaction(priceOfSale){
    if(priceOfSale<=bankBalance){
        bankBalance=bankBalance-priceOfSale;
        console.log("transaction succesful");
    }else{
        console.log("Transaction not possible")
    } 
        
}
console.log(bankBalance);
makeTransaction(120);
console.log(bankBalance);
makeTransaction(86.5);
console.log(bankBalance);
makeTransaction(400);
console.log(bankBalance);

var printCustomer=function(first,last){
    console.log("First Name: "+first+" Last name: "+last);
}

printCustomer("Lavdim","Imeri");
