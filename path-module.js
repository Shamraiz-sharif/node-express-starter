const path = require ('path')

console.log(path.sep); // give us path seprator 

const filePath = path.join('/content/','subcon','test.txt'); // build  a path  of the entered element
console.log(filePath);

const base = path.basename(filePath);// just provide the final path file/folder
console.log(base);

const absolute =path.resolve(__dirname,filePath);
console.log(absolute);