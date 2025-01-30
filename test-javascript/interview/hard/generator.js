function* genFunc() {
    yield 1;
    yield 2;
    return 3;
}

const generator = genFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
