let myCar = new Object();
myCar['company'] = "Maruti";
myCar['model'] = "Baleno";
myCar['year'] = 2014;

console.log("My car details: ")
console.log("company:" + myCar.company);
console.log("model:" + myCar.model);
console.log("year:" + myCar.year);

delete myCar.year;   // deleting the property value.

console.log("========== My car details:========== ")
console.log("company:" + myCar.company);
console.log("model:" + myCar.model);
console.log("year:" + myCar.year);
console.log("color:" + myCar.color);

console.log("========== property Exists or not ===========");
console.log("company" in  myCar);
console.log("model" in myCar);
console.log("year" in myCar);