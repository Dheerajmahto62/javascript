let myCar = new Object();
myCar['company'] = "Maruti";
myCar['model'] = "Baleno";
myCar['year'] = 2014;
myCar['reg no'] = "MP04CB2314";
console.log("price:" + myCar.price);  // property is not define
console.log("company:" + myCar.company);
console.log("model:" + myCar.model);
console.log("year:" + myCar.year);
console.log("reg no: " + myCar["reg no"]);

console.log("I sold my first car and bought my second car:");
// ========  change the property value =========
myCar["company"] = "Honda";
myCar["model"] = "Amaze";
myCar["year"] = 2020;

console.log("company:" + myCar.company);
console.log("model:" + myCar.model);
console.log("year:" + myCar.year);
console.log(myCar)
