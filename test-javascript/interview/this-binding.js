const obj = {
    value: 100,
    getValue() {
        return this.value;
    }
};

const fn = obj.getValue;
console.log(fn()); // undefined
console.log(obj.getValue()); // 100
