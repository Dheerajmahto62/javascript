function greetings() {
    document.write(`Function call with ${arguments.length} argument <br>`);

    for (let name of arguments) {
        document.write(`Good Eving ${name} <br>`);
    }
}

document.write(`<strong>First call <strong><br>`);
greetings("Dheeraj", "Amit", "Ravi");
document.write(`<strong>Second call <strong><br>`);
greetings("Ajay", "Rahul");