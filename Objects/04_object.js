let myCar = new Object();
myCar['company'] = "Maruti";
myCar['model'] = "Baleno";
myCar['year'] = 2014;

let myCar2 = new Object();
myCar2["company"] = "Honda";
myCar2["model"] = "Amaze";
myCar2["year"] = 2020;


console.log("company:" + myCar.company);
console.log("model:" + myCar.model);
console.log("year:" + myCar.year);


console.log("company:" + myCar.company);
console.log("model:" + myCar.model);
console.log("year:" + myCar.year);
console.log(myCar == myCar2); // false  because two reference are not same.