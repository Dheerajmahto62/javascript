function Average () {
    let sum=0;
    for(let x of arguments) {
        sum+=x;
    }
    document.write(`Sum is ${sum}<br>`);
    document.write(`Avg is ${sum/arguments.length} <br>`);
}
document.write(`<strong> First call ------------<strong> <br>`);
Average(5,10,20,6);
document.write(`<strong> Second call ------------<strong> <br>`);
Average(4,6,3);