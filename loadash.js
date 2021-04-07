//Creating the pakage.json with two mehtods one will set up everything npm init -y
// and second will set with help of the ansering the question on the terminal npm init

const l= require('lodash');
 const items =[1,[4,[6,[9]]]];
const it =[1,2,4,6,7,9];
 const newItems= l.flattenDeep(items);
const i= l.partition(it,n => n % 2);
 console.log(newItems);

 console.log(i);
