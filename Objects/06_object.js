let myCar = new Object();
myCar['company'] = "Maruti";
myCar['model'] = "Baleno";
myCar['year'] = 2014;
myCar['reg no'] = "MP04CB2314";
console.log("====== My car details:=======")
for(let key in myCar) {
    console.log(`${key} , ${myCar[key]}`);
}