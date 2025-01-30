async function foo() {
    try {
        return Promise.reject("Error!");
    } catch (e) {
        return "Caught";
    }
}

foo().then(console.log);
