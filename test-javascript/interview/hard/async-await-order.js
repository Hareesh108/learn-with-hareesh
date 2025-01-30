async function foo() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

console.log("3");
foo();
console.log("4");
