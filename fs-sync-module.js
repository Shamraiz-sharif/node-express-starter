const {readFileSync, writeFileSync  } =require('fs')


//**************************/
const firstFile= readFileSync('./content/first.txt','utf8') // first parameter is path and second is encoding tech
console.log(firstFile);

const secFile= readFileSync('./content/second.txt','utf8') // first parameter is path and second is encoding tech
console.log(secFile);


//************************/
const addFile= writeFileSync('./content/addFile.txt',`merging the first and secind file 
${firstFile}, ${secFile}`,{flag: 'a'});// not overridding
// console.log(addFile);    