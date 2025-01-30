const obj = { name: "Hareesh" };
Object.freeze(obj);

obj.name = "Bhittam";
console.log(obj.name);
