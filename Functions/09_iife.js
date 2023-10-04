// Immediately Invoked function Expressions (IIFE)

(function connect() {
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB Connect Two ${name}`)
})("Dheeraj")