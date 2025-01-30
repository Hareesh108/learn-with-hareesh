const sym = Symbol("myKey");

const obj = {
    [sym]: "value",
    normalKey: "normal"
};

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
