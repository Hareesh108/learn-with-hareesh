const obj = {
    name: "Hareesh",
    getNameArrow: () => console.log(this.name),
    getNameFunction() {
        console.log(this.name);
    }
};

obj.getNameArrow();
obj.getNameFunction();
