
// COMMAND: deno run --allow-read --allow-write file-rwrr.ts 

const decoder = new TextDecoder('utf-8')

// read the file
const data = await Deno.readFile('readme.txt')
console.log(decoder.decode(data));
// alternative
const data1 = await Deno.readTextFile('readme1.txt')
console.log(data1);

// writing files
const encoder = new TextEncoder()

const text = encoder.encode('Hello, This is Hareesh')
await Deno.writeFile('readme.txt',text)

// // renaming and removing files
// await Deno.rename('readme.txt','delete.txt')
// await Deno.remove('delete.txt')



export { };
