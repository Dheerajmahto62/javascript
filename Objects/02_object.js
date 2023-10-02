let myCar = new Object();
myCar.company = "MAruti";
myCar.model = "Baleno";
myCar.year = 2014;

let mname = "model";
console.log(myCar.mname); //undifined
console.log(myCar[mname]); // Beleno
console.log(myCar);