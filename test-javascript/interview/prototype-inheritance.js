function Parent() {
    this.value = 42;
}

Parent.prototype.getValue = function () {
    return this.value;
};

function Child() {}

Child.prototype = new Parent();

const child = new Child();
console.log(child.getValue());
